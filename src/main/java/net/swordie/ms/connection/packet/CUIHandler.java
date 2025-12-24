package net.swordie.ms.connection.packet;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.union.UnionBoard;
import net.swordie.ms.client.character.union.UnionMember;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.mob.Mob;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Sjonnie
 * Created on 10/10/2018.
 */
public class CUIHandler {

    public static OutPacket unionResult(int coin, int rank, List<Char> eligibleChars, UnionBoard activeBoard,
                                        UnionMember mobileMember, UnionMember labMember, UnionMember labEnhancedMember) {
        OutPacket outPacket = new OutPacket(OutHeader.UNION_RESULT);
        
        outPacket.encodeInt(coin);
        outPacket.encodeInt(rank);

        outPacket.encodeInt(eligibleChars.size());
        for (Char chr : eligibleChars) {
            chr.createUnionMember().encode(outPacket, true);
        }

        outPacket.encodeInt(activeBoard.getActiveMembers().size());
        for (UnionMember unionMember : activeBoard.getActiveMembers()) {
            unionMember.encode(outPacket);
        }
        outPacket.encodeByte(mobileMember != null);
        if (mobileMember != null) {
            mobileMember.encode(outPacket);
        }
        outPacket.encodeByte(labMember != null);
        if (labMember != null) {
            labMember.encode(outPacket);
        }
        outPacket.encodeByte(labEnhancedMember != null);
        if (labEnhancedMember != null) {
            labEnhancedMember.encode(outPacket);
        }
        return outPacket;
    }
    
    public static OutPacket unionAssignResult(int rank, List<Char> eligibleChars, UnionBoard activeBoard,
                                              UnionMember mobileMember, UnionMember labMember, UnionMember labEnhancedMember) {
        OutPacket outPacket = new OutPacket(OutHeader.UNION_ASSIGN_RESULT);

        outPacket.encodeInt(rank);

        outPacket.encodeInt(eligibleChars.size());
        for (Char chr : eligibleChars) {
            chr.createUnionMember().encode(outPacket, true);
        }

        var activeMembers = activeBoard.getActiveMembers().stream()
                .filter(UnionMember::hasChr)
                .collect(Collectors.toSet());
        outPacket.encodeInt(activeMembers.size());
        for (UnionMember unionMember : activeMembers) {
            unionMember.encode(outPacket, false);
        }
        outPacket.encodeByte(mobileMember != null);
        if (mobileMember != null) {
            mobileMember.encode(outPacket, false);
        }
        outPacket.encodeByte(labMember != null);
        if (labMember != null) {
            labMember.encode(outPacket, false);
        }
        outPacket.encodeByte(labEnhancedMember != null);
        if (labEnhancedMember != null) {
            labEnhancedMember.encode(outPacket, false);
        }
        return outPacket;
    }
    
    public static OutPacket unionCoin(int coin) {
        OutPacket outPacket = new OutPacket(OutHeader.UNION_COIN);

        outPacket.encodeInt(0); // Display 'max coins reached message'
        outPacket.encodeInt(coin);

        return outPacket;
    }
    
    public static OutPacket unionRaidDamage(long damage) {
        OutPacket outPacket = new OutPacket(OutHeader.UNION_RAID_DAMAGE);

        outPacket.encodeLong(damage);

        return outPacket;
    }
    
    public static OutPacket unionRaidCoin(int coin, boolean noCoinAnimation) {
        OutPacket outPacket = new OutPacket(OutHeader.UNION_RAID_COIN);

        outPacket.encodeInt(coin);
        outPacket.encodeByte(noCoinAnimation); // No Coin Animation

        return outPacket;
    }

    public static OutPacket unionRaidBossUpdate(Mob shield, Mob boss) {
        return unionRaidBossUpdate(shield.getTemplateId(), boss.getTemplateId(), shield.getHp(), shield.getMaxHp(), boss.getHp(), boss.getMaxHp());
    }
    
    public static OutPacket unionRaidBossUpdate(int template, int template2, long curHP, long maxHP, long curHP2, long maxHP2) {
        OutPacket outPacket = new OutPacket(OutHeader.UNION_RAID_BOSS_UPDATE);

        outPacket.encodeInt(template);
        outPacket.encodeLong(curHP);
        outPacket.encodeLong(maxHP);
        outPacket.encodeInt(template2);
        outPacket.encodeLong(curHP2);
        outPacket.encodeLong(maxHP2);

        return outPacket;
    }

    public static OutPacket towerOfOzUpdate(boolean pause, int remainingTimeMS, int maxTimeMS) {
        OutPacket outPacket = new OutPacket(OutHeader.TOWER_OF_OZ_TIMER_INFO);

        var type = 1;
        outPacket.encodeInt(type);
        outPacket.encodeInt(pause ? 1 : 2); // 2 = Countdown | 1 = Pause
        outPacket.encodeInt(remainingTimeMS); // remainingTime MS
        outPacket.encodeInt(0);
        outPacket.encodeInt(maxTimeMS); // maxTime MS
        outPacket.encodeInt(42011); // OzTimer Quest Id

        return outPacket;
    }
}
