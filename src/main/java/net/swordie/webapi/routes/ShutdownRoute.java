package net.swordie.webapi.routes;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import net.swordie.ms.Server;
import net.swordie.ms.enums.AccountType;
import net.swordie.webapi.ApiConstants;
import net.swordie.webapi.protocol.request.ShutdownRequest;
import net.swordie.webapi.protocol.result.ShutdownResult;

@Path("/shutdown")
public class ShutdownRoute extends BaseResource {

    @POST
    @Path("")
    @Produces({MediaType.APPLICATION_JSON})
    public ShutdownResult getStatus(@HeaderParam(ApiConstants.TOKEN_HEADER) String token, ShutdownRequest content) {
        var reqUser = authorize(token);
        if (reqUser == null || reqUser.getAccountType() != AccountType.Admin) {
            throw new ForbiddenException();
        }

        var server = Server.getInstance();
        var isInShutdown = server.isInShutdown();
        if (isInShutdown) {
            return new ShutdownResult(false);
        }

        server.shutdown(content.minutes);

        return new ShutdownResult(true);
    }

    @DELETE
    @Path("")
    @Produces({MediaType.APPLICATION_JSON})
    public ShutdownResult getStatus(@HeaderParam(ApiConstants.TOKEN_HEADER) String token) {
        var reqUser = authorize(token);
        if (reqUser == null || reqUser.getAccountType() != AccountType.Admin) {
            throw new ForbiddenException();
        }

        var server = Server.getInstance();
        var isInShutdown = server.isInShutdown();
        if (!isInShutdown) {
            return new ShutdownResult(false);
        }

        server.cancelShutdown();

        return new ShutdownResult(true);
    }
}
