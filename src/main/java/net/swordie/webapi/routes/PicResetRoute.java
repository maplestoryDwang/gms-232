package net.swordie.webapi.routes;

import com.sun.net.httpserver.HttpExchange;
import jakarta.ws.rs.BadRequestException;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.core.MediaType;
import net.swordie.ms.Server;
import net.swordie.ms.client.ResetType;
import net.swordie.ms.client.User;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.UserUtil;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;
import net.swordie.webapi.protocol.request.SetPasscodeRequest;

import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;

@Path("/reset-pic")
public class PicResetRoute {

    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);

    private static final String BAD_PIC_REQUEST = "There is no pic reset or the reset has expired.";

    @POST
    @Path("")
    @Consumes({MediaType.APPLICATION_JSON})
    public void setPic(SetPasscodeRequest request) {
        request.validate();

        var user = userDao.getByName(request.username);
        if (user == null) {
            return;
        }
        user = Server.getInstance().getActiveUserByIdOrDb(user.getId()); // So logged in players are

        // after a reset
        var resetKey = request.requestToken;
        var pic = request.newObj;
        var lastPasswordReset = user.getLastReset();

        // Maybe give different errors in the future, so put them in different if blocks
        if (user.getResetType() != ResetType.Pic) {
            throw new BadRequestException(BAD_PIC_REQUEST + " (Error 1)");
        }

        if (resetKey == null || user.getResetKey() == null || !resetKey.equals(user.getResetKey())) {
            throw new BadRequestException(BAD_PIC_REQUEST + " (Error 2)");
        }

        if (lastPasswordReset.toLocalDateTime()
                .plusMinutes(UserRoute.RESET_KEY_VALID_TIME_MINUTES)
                .isBefore(FileTime.currentTime().toLocalDateTime())) {
            throw new BadRequestException(BAD_PIC_REQUEST + " (Error 3)");
        }

        if (!UserUtil.isValidPic(pic)) {
            throw new BadRequestException("Pic is too short (should be at least 6 characters)");
        }

        user.setPicAndHash(pic);
        user.clearResetInfo();
        userDao.saveProperties(user);
    }
}
