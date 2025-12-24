package net.swordie.webapi.dto;

import net.swordie.webapi.donation.Donation;

public class DonationDto {

    private String uuid;

    public DonationDto(Donation donation) {
        uuid = donation.getUuid();
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }
}
