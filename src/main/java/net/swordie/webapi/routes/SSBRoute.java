package net.swordie.webapi.routes;

import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import net.swordie.ms.constants.SSBConstants;
import net.swordie.webapi.protocol.result.SsbResult;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

/**
 * Created on 16/05/2021.
 *
 * @author Asura
 */
@Path("/ssbinfo")
public class SSBRoute {

    @GET
    @Path("")
    @Produces({MediaType.APPLICATION_JSON})
    public SsbResult getStatus() {
        return new SsbResult(SSBConstants.CURRENT_SSB);
    }
}
