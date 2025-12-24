package net.swordie.ms.util;

import java.util.regex.Pattern;

public class UserUtil {

    private static final Pattern emailRegex = Pattern.compile("^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$");

    public static boolean isValidUsername(String username) {
        return username != null && username.length() >= 4;
    }

    public static boolean isValidPassword(String password) {
        return password != null && password.length() >= 6;
    }

    public static boolean isValidEmail(String email) {
        return email != null && emailRegex.matcher(email).matches();
    }

    public static boolean isValidPic(String newPic) {
        return newPic != null && newPic.length() >= 6;
    }


}
