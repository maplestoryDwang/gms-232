package net.swordie.webapi.protocol.request;

import jakarta.ws.rs.BadRequestException;
import net.swordie.ms.util.UserUtil;

public class ChangePasswordRequest extends ValidatedApiRequest {

    public String currentPassword;

    public String newPassword;

    @Override
    public void validate() {
        if (currentPassword == null || currentPassword.equals("")) {
            throw new BadRequestException("Missing current email.");
        }
        if (newPassword == null || newPassword.equals("")) {
            throw new BadRequestException("Missing current password.");
        }

        if (!UserUtil.isValidPassword(newPassword)) {
            throw new BadRequestException("Invalid new password (should be at least 6 characters)");
        }
    }
}
