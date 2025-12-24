package net.swordie.webapi.modules;

import net.swordie.ms.client.User;
import net.swordie.webapi.http.HttpUtil;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class UserModule {

    private static final String EMAIL = "examplemail@gmail.com";
    private static final String EMAIL_PASSWORD = "example_password"; // App password

    private static final String PASSWORD_RESET_EMAIL_SUBJECT = "Swordie password reset";
    private static final String PASSWORD_RESET_EMAIL_CONTENT = "Hello %s, <br /><br />" +
            "Your password has been reset, you can create a new password by going to <a href=\"https://www.swordie.net/reset-password?username=%s&token=%s\">this link</a>.<br /><br />" +
            "If you did not perform this action, please make sure that no one else but you has access to your account.<br /><br />" +
            "Please do not reply to this email, as this is a generated email. Any responses will be ignored.<br /><br />" +
            "Kind regards," +
            "<br /><br />" +
            "The Swordie team";

    private static final String USERNAME_EMAIL_SUBJECT = "Swordie username";
    private static final String USERNAME_EMAIL_CONTENT = "Hello Swordie player,<br /><br />" +
            "Your username is as follows:<br /><br />" +
            "<b>%s</b> <br /><br />" +
            "If you did not perform this action, please make sure that no one else but you has access to your account.<br /><br />" +
            "Please do not reply to this email, as this is a generated email. Any responses will be ignored.<br /><br />" +
            "Kind regards," +
            "<br /><br />" +
            "The Swordie team";

    /**
     <site key> | Use this site key in the HTML code your site serves to users.
     <secret key> | Use this secret key for communication between your site and reCAPTCHA.n
     */

    private static final String CAPTCHA_VERIFICATION_URL = "https://www.google.com/recaptcha/api/siteverify";
    private static final String CAPTCHA_SECRET_KEY = "<secret key here>";
    private static final String CAPTCHA_SECRET_TEST_KEY = "<secret key for test here>";

    private static final Authenticator auth = new javax.mail.Authenticator() {
        protected PasswordAuthentication getPasswordAuthentication() {
            return new PasswordAuthentication(EMAIL, EMAIL_PASSWORD);
        }
    };

    public static void sendPasswordResetEmail(User user) {
        sendEmail(user, PASSWORD_RESET_EMAIL_SUBJECT, String.format(PASSWORD_RESET_EMAIL_CONTENT, user.getName(), user.getName(), user.getResetKey()));
    }

    public static void sendUsernameEmail(User user) {
        sendEmail(user, USERNAME_EMAIL_SUBJECT, String.format(USERNAME_EMAIL_CONTENT, user.getName()));
    }

    private static void sendEmail(User user, String subject, String content) {
        var userEmail = user.getEmail();

        var properties = System.getProperties();
        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", "465");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.auth", "true");

        var session = Session.getDefaultInstance(properties, auth);

        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(EMAIL));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(userEmail));
            message.setSubject(subject);
            message.setContent(content, "text/html; charset=utf-8");

            Transport.send(message);
        } catch (MessagingException mex) {
            mex.printStackTrace();
        }
    }

    public static boolean isValidRobotKey(String response) {
        var data = String.format("secret=%s&response=%s", CAPTCHA_SECRET_KEY, response);
        var robotResponse = HttpUtil.doPost(CAPTCHA_VERIFICATION_URL, data);
        return robotResponse != null && robotResponse.getBoolean("success");
    }

    public static void main(String[] args) {
        var user = new User();
        user.setName("Testname");
        user.setEmail("example@gmail.com");

        sendPasswordResetEmail(user);
    }

}
