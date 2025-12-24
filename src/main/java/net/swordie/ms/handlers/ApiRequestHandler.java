package net.swordie.ms.handlers;

import net.swordie.ms.Server;
import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.Client;
import net.swordie.ms.client.User;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.ApiResponse;
import net.swordie.ms.enums.AccountCreateResult;
import net.swordie.ms.enums.AccountType;
import net.swordie.ms.enums.ApiTokenResultType;
import net.swordie.ms.util.Util;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * @author Sjonnie
 * Created on 10/5/2018.
 */
public class ApiRequestHandler {

    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);

    private static final Logger log = LogManager.getLogger();
    private static final int TOKEN_LENGTH = 50;

    public static void handleTokenRequest(Client c, InPacket inPacket) {
        String name = inPacket.decodeString();
        String password = inPacket.decodeString();
        User user = userDao.getByName(name);
        ApiTokenResultType atrt;
        boolean success = false;
        if (user != null) {
            // only non-players can use this login method
            success = user.isCorrectPassword(password);
        }
        byte[] token = new byte[]{};
        if (success) {
            atrt = ApiTokenResultType.Success;
            // Generate token
            token = new byte[TOKEN_LENGTH];
            for (int i = 0; i < token.length; i++) {
                token[i] = (byte) Util.getRandom('0', '~');
            }
            Server.getInstance().addAuthToken(token, user.getId(), user.isPlayer());
        } else {
            atrt = ApiTokenResultType.InvalidUserPassCombination;
        }
        c.write(ApiResponse.tokenRequestResult(atrt, new String(token), user));
    }

    public static void handleCreateAccountRequest(Client c, InPacket inPacket) {
        String name = inPacket.decodeString();
        String pwd = inPacket.decodeString();
        String email = inPacket.decodeString();
        AccountCreateResult acr = AccountCreateResult.Success;
        if (userDao.getByName(name) != null) {
            acr = AccountCreateResult.NameInUse;
        } /*else if (Account.getFromDBByIp(c.getIP()) != null) {
            acr = AccountCreateResult.IpAlreadyHasAccount;
        } */ else if (name.length() < 4 || pwd.length() < 4) {
            acr = AccountCreateResult.Unknown;
        }
        if (acr == AccountCreateResult.Success) {
            User user = new User(name);
            user.setPasswordAndHash(pwd);
            user.setEmail(email);
            user.setRegisterIp(c.getIP());
            user.setCharacterSlots(ServerConstants.MAX_CHARACTERS);
            userDao.saveOrUpdate(user, null);
        }
        c.write(ApiResponse.createAccountResult(acr));
    }

    public static void handleShutdownServer(Client c, InPacket inPacket) {
        int minutes = inPacket.decodeInt();
        String token = inPacket.decodeString();

        var user = Server.getInstance().getUserFromAuthToken(token);

        if (user != null && user.getAccountType() == AccountType.Admin) {
            Server.getInstance().shutdown(minutes);
        }
    }

    public static void handleCancelShutdown(Client c, InPacket inPacket) {
        String token = inPacket.decodeString();

        var userId = Server.getInstance().getUserIdFromAuthToken(token, false);

        if (userId > 0) {
            var user = userDao.getById(userId);
            if (user != null && user.getAccountType() == AccountType.Admin) {
                Server.getInstance().cancelShutdown();
            }
        }
    }

    public static void handleLogoutRequest(Client c, InPacket inPacket) {
        String token = inPacket.decodeString();

        Server.getInstance().removeUserFromAuthToken(token);
    }
}
