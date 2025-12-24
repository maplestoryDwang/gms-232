package net.swordie.ms.client.social.minigamerecord;

import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.db.TrackedObject;

import java.util.Objects;

/**
 * Created on 04/02/2022.
 *
 * @author Asura
 */
public class MiniGameRecord extends TrackedObject implements Encodable {
    private static final int BASE_SCORE = 2000;

    private int id;
    private int miniRoomType;
    private int winCount, tieCount, lossCount;

    public int getMiniRoomType() {
        return miniRoomType;
    }

    public void setMiniRoomType(int miniRoomType) {
        this.miniRoomType = miniRoomType;
    }

    public int getWinCount() {
        return winCount;
    }

    public void setWinCount(int winCount) {
        this.winCount = winCount;
    }

    public void incWinCount() {
        setWinCount(getWinCount() + 1);
    }

    public int getTieCount() {
        return tieCount;
    }

    public void setTieCount(int tieCount) {
        this.tieCount = tieCount;
    }

    public void incTieCount() {
        setTieCount(getTieCount() + 1);
    }

    public int getLossCount() {
        return lossCount;
    }

    public void setLossCount(int lossCount) {
        this.lossCount = lossCount;
    }

    public void incLossCount() {
        setLossCount(getLossCount() + 1);
    }

    private int getPoint() {
        var total = getTotalGamesPlayed();

        if (total <= 0) {
            return BASE_SCORE;
        }

        var winRate = ((double) getWinCount() / total);
        var lossRate = ((double) getLossCount() / total);

        var base = 6.5D;

        var function = (total > 4503 ? 6798 : (base * total) - (1 + (0.4D * Math.pow(total, 1.3D))));

        var winBonus = winRate * function;
        var lossBonus = lossRate * function;

        return (int) (BASE_SCORE + winBonus - lossBonus);
    }

    private int getTotalGamesPlayed() {
        return getWinCount() + getTieCount() + getLossCount();
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof MiniGameRecord)) {
            return false;
        }

        var other = (MiniGameRecord) obj;
        return getMiniRoomType() == other.getMiniRoomType();
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(getMiniRoomType());
        outPacket.encodeInt(getWinCount());
        outPacket.encodeInt(getTieCount());
        outPacket.encodeInt(getLossCount());
        outPacket.encodeInt(getPoint());
    }

    @Override
    public long getId() {
        return id;
    }

    @Override
    public void setId(long id) {
        this.id = (int) id;
    }

    @Override
    public int getTransactionalHash() {
        return Objects.hash(getMiniRoomType(), getWinCount(), getTieCount(), getLossCount());
    }
}
