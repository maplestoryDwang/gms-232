package net.swordie.webapi.protocol.request;

import jakarta.ws.rs.BadRequestException;
import net.swordie.ms.client.User;
import net.swordie.ms.util.UserUtil;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;
import net.swordie.webapi.modules.UserModule;

public class CreateAccountRequest extends ValidatedApiRequest {

    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);

    public String username;
    public String password;
    public String email;
    public String robotkey;

    @Override
    public void validate() {
        if (!UserUtil.isValidUsername(username)) {
            throw new BadRequestException("Username must be at least 4 characters.");
        }

        if (userDao.getByName(username) != null) {
            throw new BadRequestException("Username already taken.");
        }

        if (!UserUtil.isValidPassword(password)) {
            throw new BadRequestException("Password must be at least 6 characters.");
        }

        if (!UserUtil.isValidEmail(email)) {
            throw new BadRequestException("That is an invalid email.");
        }

        if (userDao.getByEmail(email) != null) {
            throw new BadRequestException("This email is already in use.");
        }

        if (robotkey != null && !UserModule.isValidRobotKey(robotkey)) {
            throw new BadRequestException("Invalid or expired robot test.");
        }
    }
}
