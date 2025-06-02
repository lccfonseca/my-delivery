package br.uema.mydelivery.service;

import br.uema.mydelivery.entity.Client;
import br.uema.mydelivery.repository.ClientRepository;
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
public class ClientService {
    
    @Autowired
    private ClientRepository repository;
    
    public List<Client> listAll(){
        return repository.findAll();
    }
    
    public Optional<Client> findById(Long id){
        return repository.findById(id);
    }
    
    public Client save(Client e){
        e.setCreated_at(new Date());
        return repository.save(e);
    }
    
}
