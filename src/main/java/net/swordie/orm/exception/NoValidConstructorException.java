package net.swordie.orm.exception;

public class NoValidConstructorException extends RuntimeException {

    public NoValidConstructorException(String message) {
        super(message);
    }
}
