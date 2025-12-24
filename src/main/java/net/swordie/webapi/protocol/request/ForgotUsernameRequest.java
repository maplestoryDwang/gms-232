package net.swordie.webapi.protocol.request;

import jakarta.ws.rs.BadRequestException;
import net.swordie.ms.util.Util;

public class ForgotUsernameRequest extends ValidatedApiRequest {

    public String email;

    @Override
    public void validate() {
        if (email == null || Util.isNullOrEmpty(email)) {
            throw new BadRequestException("Missing email.");
        }
    }

}
