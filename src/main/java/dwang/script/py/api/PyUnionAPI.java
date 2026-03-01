package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.union.Union;
import net.swordie.ms.client.character.union.UnionMember;
import net.swordie.ms.client.character.union.UnionRaid;
import net.swordie.ms.constants.FieldConstants;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

/**
 * @author  dwang
 * @date 2026/2/27
 * @description
 */
public interface PyUnionAPI extends DwangScriptBaseApi {
    default int getUnionCoin() {
        return getChr().getUnion().getUnionCoin();
    }

    default void addUnionCoin(int amount, boolean fromRaid) {
        if (fromRaid) {
            if ( getInitData(). getChr().getUnionRaid() != null) {
                getInitData(). getChr().getUnionRaid().addUnclaimedCoins( getInitData(). getChr(), -amount);
            } else {
                return;
            }
        }
        Union union = getChr().getUnion();
        union.addUnionCoin(amount);
    }

    default int getUnionRank() {
        return getChr().getUnion().getUnionRank();
    }

    private int getUnionRankIndex() {
        int high = getUnionRank() / 100;
        int low = getUnionRank() % 100;
        return (low - 1) + (high - 1) * 5;
    }

    private boolean isMaxUnionRank() {
        return getUnionRank() == 405;
    }

    default String getUnionRankName() {
        return UnionMember.ranks[getUnionRankIndex()];
    }

    default String getUnionNextRankName() {
        return UnionMember.ranks[isMaxUnionRank() ? getUnionRankIndex() : getUnionRankIndex() + 1];
    }

    default int getUnionCoinReq() {
        return UnionMember.reqCoin[getUnionRankIndex()];
    }

    default int getUnionLevelReq() {
        return UnionMember.reqLev[getUnionRankIndex()];
    }

    default int getUnionLevel() {
        int total = 0;
        for (Char chr : getChr().getUnion().getEligibleUnionChars()) {
            total += chr.getLevel();
        }
        return total;
    }

    default int getUnionCharacterCount() {
        return getChr().getUnion().getEligibleUnionChars().size();
    }

    default int getUnionAssignedCharacterCount() {
        return getChr().getUnion().getActiveUnionChars(getChr().getActiveUnionPreset()).size();
    }

    default int getUnionAssignedMaxCharacterCount() {
        return UnionMember.attackerCount[getUnionRankIndex()];
    }

    default int getUnionAssignedNextMaxCharacterCount() {
        return UnionMember.attackerCount[isMaxUnionRank() ? getUnionRankIndex() : getUnionRankIndex() + 1];
    }

    default void incrementUnionRank() {
        getChr().incrementUnionRank();
    }

    default void spawnDragonWhelps() {
        if (FieldConstants.isUnionRaidField(getFieldID()) && getChr().getInstance() != null) {
            Field field = getField();

            for (int i = 0; i < 10; i++) {
                if (field.getMobs().size() > 15) {
                    continue;
                }

                int dragon = Util.getRandomFromCollection(UnionRaid.mobs);
                Position position = Util.getRandomFromCollection(UnionRaid.positions);

                if (Util.succeedProp(5) && i == 5) {
                    dragon = 9833111; // Golden Whelp
                }
                Mob mob = field.spawnMob(dragon, position.getX(), position.getY(), false, 50_000_000L);
                if (getChr() != null) {
                    mob.setLevel(getChr().getLevel());
                }
            }
        }
    }
}
