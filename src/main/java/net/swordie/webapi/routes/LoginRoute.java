package net.swordie.webapi.routes;

import com.sun.net.httpserver.HttpExchange;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import net.swordie.ms.Server;
import net.swordie.ms.client.User;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;
import net.swordie.webapi.ApiConstants;
import net.swordie.webapi.protocol.request.LoginRequest;
import net.swordie.webapi.protocol.result.LoginResult;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.UUID;

@Path("/login")
public class LoginRoute {
    private static final Logger log = LogManager.getLogger();

    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);

    @POST
    @Path("")
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    public LoginResult login(LoginRequest content) {
        content.validate();

        var username = content.username;
        var password = content.password;

        User user = userDao.getByName(username);
        boolean success = false;
        if (user != null) {
            success = user.isCorrectPassword(password);
        }
        var token = new byte[]{};
        if (success) {
            // Generate token
            token = UUID.randomUUID().toString().getBytes();
            Server.getInstance().addAuthToken(token, user.getId(), user.isPlayer());
        } else {
            throw new ForbiddenException("Invalid username/password combination.");
        }

        return new LoginResult(token, user);
    }

    @DELETE
    @Path("")
    public void logout(@Context HttpExchange httpExhange) {
        var token = httpExhange.getRequestHeaders().getFirst(ApiConstants.TOKEN_HEADER);
        if (token != null) {
            Server.getInstance().removeUserFromAuthToken(token);
        }
    }

}
