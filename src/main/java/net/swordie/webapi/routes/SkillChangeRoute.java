package net.swordie.webapi.routes;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.webapi.protocol.result.SkillChangeResult;

/**
 * Created on 28/05/2021.
 *
 * @author Asura
 */
@Path("/skillchange")
public class SkillChangeRoute {

    @GET
    @Path("")
    @Produces({MediaType.APPLICATION_JSON})
    public SkillChangeResult getStatus(@QueryParam("jobid") int jobId) {
        return new SkillChangeResult(SkillChangeConstants.getSkillChangeStringByJob(jobId));
    }
}
