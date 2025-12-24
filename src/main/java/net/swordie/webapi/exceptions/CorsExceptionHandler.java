package net.swordie.webapi.exceptions;

import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import org.jboss.resteasy.spi.DefaultOptionsMethodException;

public class CorsExceptionHandler implements ExceptionMapper<DefaultOptionsMethodException> {
    @Override
    public Response toResponse(DefaultOptionsMethodException e) {
        // Hacky, but meh
        return Response.status(200)
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Methods", "*")
                .header("Access-Control-Allow-Headers", "*").build();
    }
}
