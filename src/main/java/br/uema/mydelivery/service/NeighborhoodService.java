package br.uema.mydelivery.service;

import br.uema.mydelivery.entity.Neighborhood;
import br.uema.mydelivery.repository.NeighborhoodRepository;
import br.uema.mydelivery.util.IBaseService;
import br.uema.mydelivery.util.NotFoundException;
import java.io.IOException;
import java.sql.SQLException;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 *
 * @author lccf
 */
@Service
public class NeighborhoodService implements IBaseService<Neighborhood> {
    
    @Autowired
    private NeighborhoodRepository repository;

    @Override
    public Neighborhood create(Neighborhood request) throws IOException {
        return repository.save(request);
    }

    @Override
    public Neighborhood getById(String id) throws NotFoundException {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Page<Neighborhood> listAll(Pageable pageable) throws BadRequestException {
        try {
            return repository.findAll(pageable);
        } catch (Exception e) {
            throw new BadRequestException("Erro ao fazer consulta no banco");
        }
    }

    @Override
    public Neighborhood update(Neighborhood request) throws IOException {
        return this.create(request);
    }

    @Override
    public void deleteById(String id) throws NotFoundException, IOException {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }    
}
