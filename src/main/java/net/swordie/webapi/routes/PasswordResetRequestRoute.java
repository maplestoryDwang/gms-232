package net.swordie.webapi.routes;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.ResetType;
import net.swordie.ms.client.User;
import net.swordie.ms.util.FileTime;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;
import net.swordie.webapi.modules.UserModule;
import net.swordie.webapi.protocol.request.ResetRequest;
import org.mindrot.jbcrypt.BCrypt;

@Path("/reset-password-request")
public class PasswordResetRequestRoute {

    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);

    @POST
    @Path("")
    @Consumes({MediaType.APPLICATION_JSON})
    public void resetPassword(ResetRequest request) {
        request.validate();

        var user = userDao.getByName(request.username);
        if (user == null) {
            return; // So people can't find account names using this method
        }

        var lastPasswordReset = user.getLastReset();
        var curTime = FileTime.currentTime();

        if (lastPasswordReset != null && lastPasswordReset.toLocalDateTime()
                .plusMinutes(UserRoute.RESET_COOLDOWN_MINUTES)
                .isAfter(curTime.toLocalDateTime())) {
            throw new BadRequestException("There has already been a password reset recently.");
        }

        user.setResetKey();
        user.setLastReset(curTime);
        user.setResetType(ResetType.Password);
        UserModule.sendPasswordResetEmail(user); // Key is mailed here, hash afterwards
        user.setResetKey(BCrypt.hashpw(user.getResetKey(), BCrypt.gensalt(ServerConstants.BCRYPT_ITERATIONS)));
        userDao.saveProperties(user);
    }

}
