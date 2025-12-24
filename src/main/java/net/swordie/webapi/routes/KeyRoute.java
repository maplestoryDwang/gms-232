package net.swordie.webapi.routes;

import com.sun.net.httpserver.HttpExchange;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import net.swordie.ms.Server;
import net.swordie.ms.ServerConstants;
import net.swordie.ms.util.Util;
import net.swordie.webapi.ApiConstants;
import net.swordie.webapi.protocol.request.CheckWzRequest;
import net.swordie.webapi.protocol.result.GetWzKeyResult;

import java.util.Arrays;
import java.util.Base64;

@Path("/key")
public class KeyRoute {

    @GET
    @Path("")
    @Produces({MediaType.APPLICATION_JSON})
    public GetWzKeyResult getKey(@Context HttpExchange exchange) {
        var token = exchange.getRequestHeaders().getFirst(ApiConstants.TOKEN_HEADER);
        if (token == null) {
            throw new ForbiddenException("Your session has expired. Please relog and try again.");
        }

        var authInfo = Server.getInstance().getAuthInfo(token);
        if (authInfo == null) {
            throw new ForbiddenException("Your session has expired. Please relog and try again.");
        }

        if (authInfo.getKey() == null) {
            var key = new byte[16];
            for (int i = 0; i < key.length; i++) {
                key[i] = (byte) Util.getRandom(Byte.MAX_VALUE);
            }
            authInfo.setKey(key);
        }

        return new GetWzKeyResult(Base64.getEncoder().encodeToString(authInfo.getKey()));
    }

    @POST
    @Path("")
    @Consumes({MediaType.APPLICATION_JSON})
    public void checkKey(@Context HttpExchange exchange, CheckWzRequest request) {
        var token = exchange.getRequestHeaders().getFirst(ApiConstants.TOKEN_HEADER);

        var authInfo = Server.getInstance().getAuthInfo(token);
        if (authInfo == null) {
            throw new ForbiddenException("Your session has expired. Please relog and try again.");
        }

        var key = authInfo.getKey();
        var crc = ServerConstants.WZ_HASH;

        var keyCopy = Arrays.copyOf(key, key.length);
        Util.xor(keyCopy, crc);

//        printKey(request.key);
        if (!Arrays.equals(keyCopy, request.key)) {
            throw new BadRequestException("Your wz seems to be corrupted. Make sure you are on the right version and try again.");
        }

        authInfo.setWzVerified(true);
    }

    private void printKey(byte[] key) {
        for (var k : key) {
            System.out.printf("(byte) 0x%X, %n", (int)k & 0xFF);
        }
    }

}
