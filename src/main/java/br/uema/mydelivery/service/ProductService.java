package br.uema.mydelivery.service;

import br.uema.mydelivery.entity.Product;
import br.uema.mydelivery.repository.ProductRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author lccf
 */
@Service
public class ProductService {
    
    @Autowired
    private ProductRepository repository;    
        public List<Product> listAll(){
        return repository.findAll();
    }
    
    public Optional<Product> findById(Long id){
        return repository.findById(id);
    }
    
    public Product save(Product e){
        return repository.save(e);
    }
    
    public void deleteById(Long Id){
        repository.deleteById(Id);
    }
    
}
