package br.uema.mydelivery.util;

import java.io.IOException;
import java.util.List;
import org.apache.coyote.BadRequestException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 *
 * @author lccf
 */
public interface IBaseService<T> {

    T create(T request) throws IOException;

    T getById(Long id) throws NotFoundException;

    Page<T> listAllToPage(Pageable pageable) throws BadRequestException;
    
    List<T> listAllToList() throws BadRequestException;

    T update(T request) throws IOException;

    void deleteById(Long id) throws NotFoundException, IOException;
}
