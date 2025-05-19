package br.uema.mydelivery.api;

import br.uema.mydelivery.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author lccf
 */
public class ClientController {
    
    @Autowired
    private ClientService service;
}
