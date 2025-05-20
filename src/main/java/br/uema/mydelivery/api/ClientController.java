package br.uema.mydelivery.api;

import br.uema.mydelivery.service.ClientService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author lccf
 */
@RestController
@RequestMapping({"/client"})
public class ClientController {
    
    private ClientService service;

    public ClientController(ClientService service) {
        this.service = service;
    }
    
    @GetMapping
    public List findAll() {
        return service.listAll();
    }
}
