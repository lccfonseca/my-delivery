package br.uema.mydelivery.repository;

import br.uema.mydelivery.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author lccf
 */
public interface OrderRepository extends JpaRepository <Order, Long> {
    
}
