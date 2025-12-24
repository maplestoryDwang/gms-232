package net.swordie.webapi.routes;

import jakarta.ws.rs.BadRequestException;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.MediaType;
import net.swordie.ms.client.ResetType;
import net.swordie.ms.client.User;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.UserUtil;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;
import net.swordie.webapi.protocol.request.SetPasscodeRequest;
import org.mindrot.jbcrypt.BCrypt;

@Path("/reset-password")
public class PasswordResetRoute {

    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);

    private static final String INVALID_REQUEST = "There is no password reset, the reset key has expired, or the reset key is invalid.";

    @POST
    @Path("")
    @Consumes({MediaType.APPLICATION_JSON})
    public void setPassword(SetPasscodeRequest request) {
        request.validate();

        var user = userDao.getByName(request.username);
        if (user == null) {
            throw new BadRequestException(INVALID_REQUEST);
        }

        // after a reset
        var resetKey = request.requestToken;
        var password = request.newObj;
        var lastPasswordReset = user.getLastReset();

        // Maybe give different errors in the future, so put them in different if blocks
        if (user.getResetType() != ResetType.Password) {
            throw new BadRequestException(INVALID_REQUEST);
        }

        if (resetKey == null || user.getResetKey() == null || !BCrypt.checkpw(resetKey, user.getResetKey())) {
            throw new BadRequestException(INVALID_REQUEST);
        }

        if (lastPasswordReset.toLocalDateTime()
                .plusMinutes(UserRoute.RESET_KEY_VALID_TIME_MINUTES)
                .isBefore(FileTime.currentTime().toLocalDateTime())) {
            throw new BadRequestException(INVALID_REQUEST);
        }

        if (!UserUtil.isValidPassword(password)) {
            throw new BadRequestException("Password is too short (should be at least 6 characters)");
        }

        user.setPasswordAndHash(password);
        user.clearResetInfo();
        userDao.saveProperties(user);
    }
}
