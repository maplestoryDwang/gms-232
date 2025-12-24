package net.swordie.orm.dao;

import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.webapi.donation.Donation;

import java.sql.ResultSet;
import java.sql.SQLException;

public class DonationDao implements SworDao<Donation> {

    public Donation getByUuid(String uuid) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM donations d WHERE d.id = ?", "d", uuid);
        if (objs.size() > 0) {
            return (Donation) objs.get(0);
        }
        return null;
    }

    @Override
    public Donation fromResultSet(ResultSet resultSet, String alias) {
        Donation donation = null;

        try {
            donation = new Donation(false);
            donation.setId(resultSet.getLong(alias + ".id"));
            donation.setUuid(resultSet.getString(alias + ".uuid"));
            donation.setClaimed(resultSet.getBoolean(alias + ".claimed"));
            donation.setClaimedUserId(resultSet.getInt(alias + ".claimeduserid"));
            donation.setDonationAmount(resultSet.getInt(alias + ".donationamount"));
            donation.setDonationPoints(resultSet.getInt(alias + ".donationpoints"));
            donation.setDonationPointsBonus(resultSet.getInt(alias + ".donationpointsbonus"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return donation;
    }

    public void saveOrUpdate(Donation donation) {
        if (donation == null) {
            return;
        }
        var needsId = donation.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO donations(" +
                    "claimed, " +
                    "claimeduserid, " +
                    "donationamount, " +
                    "donationpoints, " +
                    "donationpointsbonus, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE donations SET " +
                    "claimed = ?," +
                    "claimeduserid = ?," +
                    "donationamount = ?," +
                    "donationpoints = ?," +
                    "donationpointsbonus = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                donation.getUuid(),
                donation.isClaimed(),
                donation.getClaimedUserId(),
                donation.getDonationAmount(),
                donation.getDonationPoints(),
                donation.getDonationPointsBonus(),
                donation.getId()
        );
        if (needsId) {
            donation.setId(id);
        }
    }
}
