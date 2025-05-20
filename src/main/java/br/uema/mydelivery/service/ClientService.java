package br.uema.mydelivery.service;

import br.uema.mydelivery.entity.Client;
import br.uema.mydelivery.repository.ClientRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author lccf
 */
public class ClientService {
    
    @Autowired
    private ClientRepository repository;
    
    public List<Client> listAll(){
        return repository.findAll();
    }
    
}
