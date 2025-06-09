package br.uema.mydelivery.service;

import br.uema.mydelivery.entity.Order;
import br.uema.mydelivery.repository.OrderRepository;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author lccf
 */
@Service
public class OrderService {
    
    @Autowired
    private OrderRepository repository;
    
    public List<Order> listAll(){
        return repository.findAll();
    }
    
    public Optional<Order> findById(Long id){
        return repository.findById(id);
    }
    
    public Order save(Order e){
        e.setCreated_at(new Date());
        return repository.save(e);
    }
    
}
