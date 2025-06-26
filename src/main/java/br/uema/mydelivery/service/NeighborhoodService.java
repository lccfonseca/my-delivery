package br.uema.mydelivery.service;

import br.uema.mydelivery.entity.Neighborhood;
import br.uema.mydelivery.repository.NeighborhoodRepository;
import br.uema.mydelivery.util.IBaseService;
import br.uema.mydelivery.util.NotFoundException;
import java.io.IOException;
import java.util.List;
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
    public Neighborhood getById(Long id) throws NotFoundException {
        return repository.findById(id).orElseThrow(NotFoundException::new);
    }

    @Override
    public Page<Neighborhood> listAllToPage(Pageable pageable) throws BadRequestException {
        try {
            return repository.findAll(pageable);
        } catch (Exception e) {
            throw new BadRequestException("Erro ao fazer consulta no banco");
        }
    }

    @Override
    public List<Neighborhood> listAllToList() throws BadRequestException {
        try {
            return repository.findAll();
        } catch (Exception e) {
            throw new BadRequestException("Erro ao fazer consulta no banco");
        }
    }

    @Override
    public Neighborhood update(Neighborhood request) throws IOException {
        return this.create(request);
    }

    @Override
    public void deleteById(Long id) throws NotFoundException, IOException {
        repository.deleteById(id);
    }

}
