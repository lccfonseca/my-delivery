DELIMITER //

DROP PROCEDURE IF EXISTS pr_update_voucher_uses_count //

CREATE PROCEDURE pr_update_voucher_uses_count(
	IN voucher BIGINT
)
BEGIN
	UPDATE `voucher` SET
		uses_count = uses_count + 1
	WHERE id = voucher;
END //

DELIMITER ;