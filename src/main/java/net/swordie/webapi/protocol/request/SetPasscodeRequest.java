package net.swordie.webapi.protocol.request;

import jakarta.ws.rs.BadRequestException;
import net.swordie.ms.util.Util;

public class SetPasscodeRequest extends ValidatedApiRequest {

    public String requestToken;
    public String newObj;
    public String username;

    @Override
    public void validate() {
        if (Util.isNullOrEmpty(username)) {
            throw new BadRequestException("Missing username.");
        }

        if (Util.isNullOrEmpty(newObj)) {
            throw new BadRequestException("Missing new.");
        }

        if (Util.isNullOrEmpty(requestToken)) {
            throw new BadRequestException("Missing token.");
        }
    }
}
