DELIMITER //

CREATE PROCEDURE apply_voucher(
	IN order_id BIGINT,
    IN voucher_id BIGINT
)
BEGIN
	DECLARE voucher_type INT;
    DECLARE fixed_value DECIMAL(12,2);
    DECLARE fixed_min_value DECIMAL(12,2);
    
    SELECT `start_date`,
		   `end_date`,
		   `max_uses`,
		   `voucher_type`,
		   `fixed_value`,
           `fixed_min_value`,
		   `percentual_off`,
           `percentual_max_value`
	FROM  `voucher` v
    WHERE v.id = voucher_id;   
    
    
END //

DELIMITER ;

