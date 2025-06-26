package br.uema.mydelivery.api;

import br.uema.mydelivery.entity.Order;
import br.uema.mydelivery.service.OrderService;
import br.uema.mydelivery.util.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author lccf
 */
@RestController
@RequestMapping({"/order"})
public class OrderController extends BaseController<Order, OrderService>{
    
        
}