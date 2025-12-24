package net.swordie.webapi.exceptions;

import jakarta.ws.rs.BadRequestException;
import jakarta.ws.rs.ForbiddenException;
import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;
import net.swordie.webapi.protocol.result.ErrorResult;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@Provider
public class ExceptionHandler implements ExceptionMapper<Exception> {

    private static final Logger log = LogManager.getLogger();

    @Override
    public Response toResponse(Exception e) {
        var status = getStatusByExceptionType(e);
        String message;
        if (status == Response.Status.INTERNAL_SERVER_ERROR) {
            e.printStackTrace();
            message = "Server error.";
        } else {
            log.warn("[ExceptionHandler]: Non-500 error: " + e.getMessage());
            message = e.getMessage();
        }
        return Response
                .status(status)
                .entity(new ErrorResult(message))
                .type(MediaType.APPLICATION_JSON)
                .build();
    }

    private Response.Status getStatusByExceptionType(Exception e) {
        if (e instanceof BadRequestException) {
            return Response.Status.BAD_REQUEST;
        }

        if (e instanceof ForbiddenException) {
            return Response.Status.FORBIDDEN;
        }

        if (e instanceof NotFoundException) {
            return Response.Status.NOT_FOUND;
        }

        return Response.Status.INTERNAL_SERVER_ERROR;
    }
}
