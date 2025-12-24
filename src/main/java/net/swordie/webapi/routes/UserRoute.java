package net.swordie.webapi.routes;

import com.sun.net.httpserver.HttpExchange;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.User;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;
import net.swordie.webapi.ApiConstants;
import net.swordie.webapi.dto.UserDto;
import net.swordie.webapi.protocol.request.ChangePasswordRequest;
import net.swordie.webapi.protocol.request.CreateAccountRequest;
import net.swordie.webapi.protocol.result.GetUserResult;

@Path("/users")
public class UserRoute extends BaseResource {

    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);

    public static final long RESET_COOLDOWN_MINUTES = 10; // 10 minutes
    public static final long RESET_KEY_VALID_TIME_MINUTES = 24 * 60; // 24 hours

    @POST
    @Path("")
    @Consumes({MediaType.APPLICATION_JSON})
    public void createAccount(@Context HttpExchange exchange, CreateAccountRequest request) {
        request.validate();

        User user = new User(request.username);
        user.setPasswordAndHash(request.password);
        user.setEmail(request.email);
        user.setCharacterSlots(ServerConstants.MAX_CHARACTERS);

        var header = exchange.getRequestHeaders().getFirst("X-Forwarded-For");
        if (header != null) {
            var split = header.split(":");
            if (split[0].length() > 0) {
                user.setRegisterIp(split[0].substring(1));
            }
        }

        userDao.saveOrUpdate(user, null);
    }

    @GET
    @Path("/{userId}")
    @Produces({MediaType.APPLICATION_JSON})
    public GetUserResult createUserGet(@PathParam("userId") int userId, @HeaderParam(ApiConstants.TOKEN_HEADER) String token) {
        return new GetUserResult(UserDto.fromUser(authorize(token, userId)));
    }

    @PUT
    @Path("/{userId}/password")
    @Consumes({MediaType.APPLICATION_JSON})
    public void changePassword(ChangePasswordRequest request, @PathParam("userId") int userId, @HeaderParam(ApiConstants.TOKEN_HEADER) String token) {
        request.validate();

        var user = authorize(token, userId);
        var oldPassword = request.currentPassword;
        var newPassword = request.newPassword;

        if (oldPassword == null || !user.isCorrectPassword(oldPassword)) {
            throw new ForbiddenException("Incorrect current password");
        }

        user.setPasswordAndHash(newPassword);
        userDao.saveProperties(user);
    }

}
