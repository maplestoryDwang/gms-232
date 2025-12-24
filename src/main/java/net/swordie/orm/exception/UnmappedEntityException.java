package net.swordie.orm.exception;

public class UnmappedEntityException extends RuntimeException {

    public UnmappedEntityException(String message) {
        super(message);
    }
}
