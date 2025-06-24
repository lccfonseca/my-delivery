package br.uema.mydelivery.util;

import java.io.IOException;
import org.apache.coyote.BadRequestException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 *
 * @author lccf
 */
public interface IBaseService<T> {

    T create(T request) throws IOException;

    T getById(String id) throws NotFoundException;

    Page<T> listAll(Pageable pageable) throws BadRequestException;

    T update(T request) throws IOException;

    void deleteById(String id) throws NotFoundException, IOException;

    String test();
}
