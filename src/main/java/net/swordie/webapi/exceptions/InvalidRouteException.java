package net.swordie.webapi.exceptions;

public class InvalidRouteException extends RuntimeException {

    public InvalidRouteException(String message) {
        super(message);
    }
}
