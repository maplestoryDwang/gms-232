package net.swordie.orm.connection;

import net.swordie.ms.client.User;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.orm.dao.CharDao;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UserDao;

public class SqlSpeedTest {
    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);
    private static final CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);

    public static void main(String[] args) throws InterruptedException {
        long start = System.currentTimeMillis();
        DatabaseManager.init();
        System.out.println(String.format("DB init in %d ms", System.currentTimeMillis() - start));

        User user = null;
        Char chr = null;

        // Sjonnie
//        int userId = 1;
//        int charId = 17710;
        // Wolf
        int userId = 29;
        int charId = 46;

        for (int i = 0; i < 10; i++) {
            start = System.currentTimeMillis();
            user = userDao.getById(userId);
            System.out.println(String.format("GET USER in %d ms", System.currentTimeMillis() - start));
            start = System.currentTimeMillis();
            chr = user.getCharById(charId);
            System.out.println(String.format("GET CHAR in %d ms", System.currentTimeMillis() - start));
        }

        for (int i = 0; i < 100; i++) {
            start = System.currentTimeMillis();
            userDao.saveOrUpdate(user, chr);
            System.out.println(String.format("Saved in %d ms", System.currentTimeMillis() - start));
        }
    }
}
