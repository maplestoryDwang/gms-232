package net.swordie.webapi.donation;

import net.swordie.ms.client.User;

import java.util.UUID;

public class Donation {

    private long id;
    private String uuid;
    private boolean claimed;
    private int claimedUserId;
    private int donationAmount;
    private int donationPoints;
    private int donationPointsBonus;

    public Donation(boolean createUuid) {
        if (createUuid) {
            uuid = UUID.randomUUID().toString();
        }
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public boolean isClaimed() {
        return claimed;
    }

    public void setClaimed(boolean claimed) {
        this.claimed = claimed;
    }

    public int getDonationAmount() {
        return donationAmount;
    }

    public void setDonationAmount(int donationAmount) {
        this.donationAmount = donationAmount;
    }

    public int getDonationPoints() {
        return donationPoints;
    }

    public void setDonationPoints(int donationPoints) {
        this.donationPoints = donationPoints;
    }

    public void setDonationPointsBonus(int donationPointsBonus) {
        this.donationPointsBonus = donationPointsBonus;
    }

    public int getDonationPointsBonus() {
        return donationPointsBonus;
    }

    public int getClaimedUserId() {
        return claimedUserId;
    }

    public void setClaimedUserId(int claimedUserId) {
        this.claimedUserId = claimedUserId;
    }

    public void claimBy(User user) {
        setClaimed(true);
        setClaimedUserId(user.getId());
    }
}
