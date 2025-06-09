DELIMITER //

DROP PROCEDURE IF EXISTS pr_apply_voucher //

CREATE PROCEDURE pr_apply_voucher(
	IN p_order_id BIGINT,
    IN p_voucher_id BIGINT
)
BEGIN
    DECLARE v_start_date DATE;
    DECLARE v_end_date DATE;
    DECLARE v_uses_count INT;
    DECLARE v_max_uses INT;
	DECLARE v_voucher_type INT;
    DECLARE v_fixed_value DECIMAL(12,2);
    DECLARE v_fixed_min_value DECIMAL(12,2);
    DECLARE v_percentual_off DECIMAL(12,2);
    DECLARE v_percentual_max_value DECIMAL(12,2);
    
    DECLARE v_voucher_id BIGINT;
    DECLARE v_order_total_price DECIMAL(12,2);
    DECLARE v_voucher_discount DECIMAL(12,2);
    DECLARE v_order_final_price DECIMAL(12,2);
    
    SELECT `start_date`,
		   `end_date`,
           `uses_count`,
		   `max_uses`,
		   `voucher_type`,
		   `fixed_value`,
           `fixed_min_value`,
		   `percentual_off`,
           `percentual_max_value`
	INTO v_start_date, v_end_date, v_uses_count, v_max_uses, v_voucher_type,
		 v_fixed_value, v_fixed_min_value, v_percentual_off,
		 v_percentual_max_value
	FROM  `voucher` v
    WHERE v.id = p_voucher_id;
    
    SELECT total_price
    INTO v_order_total_price
    FROM `order` o
    WHERE o.id = p_order_id;
    
    IF v_uses_count < v_max_uses THEN
		IF v_start_date <= CURDATE() AND CURDATE() <= v_end_date THEN
			SET v_voucher_id = p_voucher_id;
            IF v_voucher_type = 1 THEN
				SET v_voucher_discount = v_fixed_value;
			ELSE
				SET v_voucher_discount = (v_order_total_price * v_percentual_off) / 100;
                IF v_voucher_discount > v_percentual_max_value  THEN
					SET v_voucher_discount = v_percentual_max_value;
				END IF;
			END IF;
            SET v_order_final_price = v_order_total_price - v_voucher_discount;
		ELSE
			SET v_voucher_id = NULL;
			SET v_voucher_discount = NULL;
			SET v_order_final_price = v_order_total_price;
		END IF;
        
		UPDATE `order` SET
			voucher_id = v_voucher_id,
			voucher_discount = v_voucher_discount,
			final_price = v_order_final_price
		WHERE id = p_order_id;
        
        IF v_voucher_id IS NOT NULL THEN
			CALL pr_update_voucher_uses_count(v_voucher_id);
		END IF;
    
    END IF;
    
END //

DELIMITER ;

