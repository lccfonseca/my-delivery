package br.uema.mydelivery.repository;

import br.uema.mydelivery.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author lccf
 */
public interface ClientRepository extends JpaRepository<Client, Long> {
    
}
