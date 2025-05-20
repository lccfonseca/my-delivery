package br.uema.mydelivery.service;

import br.uema.mydelivery.entity.City;
import br.uema.mydelivery.repository.CityRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author lccf
 */
@Service
public class CityService {
   
    @Autowired
    private CityRepository repository;
    
    public List<City> listAllByState(String state){
        return repository.findAllByState(state);
    }
    
}
