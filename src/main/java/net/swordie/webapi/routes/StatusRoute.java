package net.swordie.webapi.routes;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.HeaderParam;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import net.swordie.ms.Server;
import net.swordie.ms.ServerConstants;
import net.swordie.webapi.ApiConstants;
import net.swordie.webapi.protocol.result.StatusResult;

@Path("/status")
public class StatusRoute {

    @GET
    @Path("")
    @Produces({MediaType.APPLICATION_JSON})
    public StatusResult getStatus() {
        var result = new StatusResult();
        // Player Count
        result.playerCount = Server.getInstance().getPlayerCount();

        // Server Started Time
        result.startTime = Server.getInstance().getStartedTime().toString();

        // Server Version
        result.version = String.format("%s.%s", ServerConstants.VERSION, ServerConstants.MINOR_VERSION);

        // Shutdown
        result.isShutdown = Server.getInstance().isInShutdown();
        result.remainingMin = Server.getInstance().getMinutesRemaining();
        result.shutdownMin = Server.getInstance().getShutdownScheduledMinutes();

        return result;
    }

}
