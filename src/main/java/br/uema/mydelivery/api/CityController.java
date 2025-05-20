package br.uema.mydelivery.api;

import br.uema.mydelivery.entity.City;
import br.uema.mydelivery.service.CityService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author lccf
 */
@RestController
@RequestMapping({"/city"})
public class CityController {
    
    @Autowired
    private CityService service;
    
    @GetMapping("/by-state/{state}")
    public List<City> listAllByState(@PathVariable String state){
        return service.listAllByState(state.toUpperCase());
    }
    
}
