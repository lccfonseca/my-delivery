package br.uema.mydelivery.repository;

import br.uema.mydelivery.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author lccf
 */
public interface ProductRepository extends JpaRepository <Product, Long>{
    
}
