package net.swordie.webapi.protocol.request;

import jakarta.ws.rs.BadRequestException;

public class LoginRequest extends ValidatedApiRequest {

    public String username;
    public String password;

    public void validate() {
        if (username == null || password == null) {
            throw new BadRequestException("Missing username/password");
        }
    }

}
