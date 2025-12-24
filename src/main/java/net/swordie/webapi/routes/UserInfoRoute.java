package net.swordie.webapi.routes;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import net.swordie.ms.client.User;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.constants.JobConstants;
import net.swordie.orm.dao.UserDao;
import net.swordie.webapi.ApiConstants;
import net.swordie.webapi.protocol.result.CharInfoRecord;
import net.swordie.webapi.protocol.result.UserInfoResult;

import java.util.ArrayList;

@Path("/userinfo")
public class UserInfoRoute extends BaseResource {

    private static final UserDao dao = new UserDao();

    @GET
    @Path("/{name}")
    @Produces({MediaType.APPLICATION_JSON})
    public UserInfoResult getUserInfo(
            @PathParam("name") String name,
            @QueryParam("byCharname") boolean byCharname,
            @HeaderParam(ApiConstants.TOKEN_HEADER) String token
    ) {
        var reqUser = authorize(token);
        if (reqUser == null || !reqUser.getAccountType().isGmOrAdmin()) {
            return null;
        }

        var user = byCharname ? dao.getByCharname(name) : dao.getByName(name);
        if (user == null) {
            throw new NotFoundException("No user found with that name/with that character.");
        }

        return map(user);
    }

    private UserInfoResult map(User user) {
        var charNames = new ArrayList<CharInfoRecord>();
        for (var account : user.getAccounts()) {
            charNames.addAll(account.getCharacters().stream().map(this::map).toList());
        }
        return new UserInfoResult(user.getName(), charNames);
    }

    private CharInfoRecord map(Char chr) {
        return new CharInfoRecord(chr.getId(), chr.getName(), chr.getLevel(), JobConstants.JobEnum.getJobById(chr.getJob()).toPrettyString());
    }

}
