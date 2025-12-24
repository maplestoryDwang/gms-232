package net.swordie.webapi.routes;

import com.sun.net.httpserver.HttpExchange;
import jakarta.ws.rs.BadRequestException;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.core.MediaType;
import net.swordie.ms.client.User;
import net.swordie.ms.util.FileTime;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;
import net.swordie.webapi.modules.UserModule;
import net.swordie.webapi.protocol.request.ForgotUsernameRequest;

import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;

@Path("/forgot-username")
public class ForgotUsernameRoute {
    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);

    @POST
    @Path("")
    @Consumes({MediaType.APPLICATION_JSON})
    public void forgotUsernameRequest(ForgotUsernameRequest request) {
        request.validate();

        var user = userDao.getByEmail(request.email);
        if (user == null) {
            return; // So people can't find account names using this method
        }

        var lastEmailSent = user.getLastReset();
        var curTime = FileTime.currentTime();

        if (lastEmailSent != null && lastEmailSent.toLocalDateTime()
                .plusMinutes(UserRoute.RESET_COOLDOWN_MINUTES)
                .isAfter(curTime.toLocalDateTime())) {
            throw new BadRequestException("There has already been an email sent recently.");
        }

        user.setLastReset(curTime);
        UserModule.sendUsernameEmail(user);
        userDao.saveProperties(user);
    }
}
