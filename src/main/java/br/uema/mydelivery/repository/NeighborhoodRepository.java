package br.uema.mydelivery.repository;

import br.uema.mydelivery.entity.Neighborhood;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author lccf
 */
public interface NeighborhoodRepository extends JpaRepository <Neighborhood, Long>{
    
}
