package net.swordie.webapi.routes;

import jakarta.ws.rs.BadRequestException;
import jakarta.ws.rs.ForbiddenException;
import net.swordie.ms.Server;
import net.swordie.ms.client.User;

public abstract class BaseResource {

    public User authorize(String token, int userId) {
        if (token == null) {
            throw new BadRequestException("Your session has expired. Please relog in order to continue.");
        }

        var user = Server.getInstance().getUserFromAuthToken(token);
        if (user == null || userId != user.getId()) {
            throw new ForbiddenException("Invalid token");
        }

        return user;
    }

    public User authorize(String token) {
        if (token == null) {
            throw new BadRequestException("Your session has expired. Please relog in order to continue.");
        }

        var user = Server.getInstance().getUserFromAuthToken(token);
        if (user == null) {
            throw new ForbiddenException("Invalid token");
        }

        return user;
    }

}
