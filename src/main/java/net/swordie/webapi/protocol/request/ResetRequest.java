package net.swordie.webapi.protocol.request;

import jakarta.ws.rs.BadRequestException;

public class ResetRequest extends ValidatedApiRequest {

    public String username;

    @Override
    public void validate() {
        if (username == null || username.equals("")) {
            throw new BadRequestException("Missing username.");
        }
    }

}
