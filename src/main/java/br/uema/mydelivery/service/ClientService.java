package br.uema.mydelivery.service;

import br.uema.mydelivery.entity.Client;
import br.uema.mydelivery.repository.ClientRepository;
import java.util.List;
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
    
}
