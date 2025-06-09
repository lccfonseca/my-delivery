DELIMITER //

DROP PROCEDURE IF EXISTS pr_update_order_price //

CREATE PROCEDURE pr_update_order_price(
	IN order_id BIGINT
)
BEGIN
	DECLARE v_total DECIMAL(12,2);
    
    SELECT sum(amount * price) 
    INTO v_total
	FROM order_item oi
    WHERE oi.order_id = order_id;
 
    UPDATE `order`
    SET
		total_price = v_total
	WHERE id = order_id;
END //

DELIMITER ;