package br.uema.mydelivery.api;

import br.uema.mydelivery.entity.Neighborhood;
import br.uema.mydelivery.service.NeighborhoodService;
import br.uema.mydelivery.util.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 *
 * @author lccf
 */
@RestController
@RequestMapping("/neighborhood")
public class NeighborhoodController extends BaseController<Neighborhood, NeighborhoodService>{
    
}
