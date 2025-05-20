package br.uema.mydelivery.repository;

import br.uema.mydelivery.entity.City;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author lccf
 */
public interface CityRepository extends JpaRepository<City, Long> {
    
    public List<City> findAllByState(String state);
    
}
