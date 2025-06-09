package br.uema.mydelivery.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author lccf
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date created_at;
    private int status;
    private Long client_id;
    private Long voucher_id;
    private Double total_price;
    private Double voucher_discount;
    private Double final_price;
}
