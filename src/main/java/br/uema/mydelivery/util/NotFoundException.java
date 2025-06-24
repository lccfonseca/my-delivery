package br.uema.mydelivery.util;

/**
 *
 * @author lccf
 */
public class NotFoundException extends Exception {

    public NotFoundException(String message) {
        super(message);
    }

    public NotFoundException() {
        super("Not found");
    }

}
