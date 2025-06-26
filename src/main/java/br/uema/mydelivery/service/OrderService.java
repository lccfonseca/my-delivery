package br.uema.mydelivery.service;

import br.uema.mydelivery.entity.Order;
import br.uema.mydelivery.repository.OrderRepository;
import br.uema.mydelivery.util.IBaseService;
import br.uema.mydelivery.util.NotFoundException;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Optional;
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
public class OrderService implements IBaseService<Order> {

    @Autowired
    private OrderRepository repository;

    @Override
    public Order create(Order request) throws IOException {
        request.setCreated_at(new Date());
        return repository.save(request);
    }

    @Override
    public Order getById(Long id) throws NotFoundException {
        return repository.findById(id).orElseThrow(NotFoundException::new);
    }

    @Override
    public Page<Order> listAllToPage(Pageable pageable) throws BadRequestException {
        try {
            return repository.findAll(pageable);
        } catch (Exception e) {
            throw new BadRequestException("Erro ao fazer consulta no banco");
        }
    }

    @Override
    public List<Order> listAllToList() throws BadRequestException {
        try {
            return repository.findAll();
        } catch (Exception e) {
            throw new BadRequestException("Erro ao fazer consulta no banco");
        }
    }

    @Override
    public Order update(Order request) throws IOException {
        return this.create(request);
    }

    @Override
    public void deleteById(Long id) throws NotFoundException, IOException {
        repository.deleteById(id);
    }

}
