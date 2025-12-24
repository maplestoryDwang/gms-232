package net.swordie.webapi.dto;

import net.swordie.ms.client.User;
import net.swordie.ms.enums.AccountType;

public class UserDto {
    private int id;
    private String username;
    private int donationPoints;
    private String email;
    private AccountType accountType;

    public static UserDto fromUser(User user) {
        var dto = new UserDto();

        dto.setId(user.getId());
        dto.setUsername(user.getName());
        dto.setDonationPoints(user.getDonationPoints());
        dto.setEmail(getHiddenEmail(user.getEmail()));
        dto.setAccountType(user.getAccountType());

        return dto;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getDonationPoints() {
        return donationPoints;
    }

    public void setDonationPoints(int donationPoints) {
        this.donationPoints = donationPoints;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public AccountType getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountType accountType) {
        this.accountType = accountType;
    }

    private static String getHiddenEmail(String email) {
        if (email == null) {
            return null;
        }

        var split = email.split("@", 2);
        var firstPart = split[0];
        var secondPart = split[1];

        var len = firstPart.length();
        if (len > 2) {
            firstPart = firstPart.substring(0, 2);
            for (int i = 0; i < len; i++) {
               firstPart += '*';
            }
        }

        return firstPart + '@' + secondPart;
    }

}
