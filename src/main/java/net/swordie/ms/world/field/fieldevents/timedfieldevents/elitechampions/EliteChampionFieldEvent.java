package net.swordie.ms.world.field.fieldevents.timedfieldevents.elitechampions;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.util.Rect;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.fieldevents.timedfieldevents.TimedFieldEvent;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

/**
 * Created on 08/02/2022.
 *
 * @author Asura
 */
public abstract class EliteChampionFieldEvent extends TimedFieldEvent {

    private static final int MINIMUM_DMG_RATIO_FOR_REWARD = 3;

    private static final int ELITE_CHAMPION_ORB_COUNT = 4;
    private static final int ELITE_CHAMPION_ORB_EXP_MULTIPLIER = 15;

    private long minExpPerMobOnField = 0L;
    private long minHpPerMobOnField = 0L;
    private Map<Char, Long> damageDone = new HashMap<>();

    public EliteChampionFieldEvent(Field field, int timeS) {
        super(field, timeS);
    }

    protected long getMinExpPerMobOnField() {
        return minExpPerMobOnField;
    }

    private void setMinExpPerMobOnField(long minExpPerMobOnField) {
        this.minExpPerMobOnField = minExpPerMobOnField;
    }

    protected long getMinHpPerMobOnField() {
        return minHpPerMobOnField;
    }

    private void setMinHpPerMobOnField(long minHpPerMobOnField) {
        this.minHpPerMobOnField = minHpPerMobOnField;
    }

    protected Map<Char, Long> getDamageDone() {
        return damageDone;
    }

    private void addDamageDone(Char chr, long damage) {
        var damageDone = getDamageDone().getOrDefault(chr, 0L);
        var newDmgDone = damageDone + damage;
        getDamageDone().put(chr, newDmgDone);
    }

    @Override
    public boolean setup() {
        if (!super.setup()) return false;

        var minExp = getField().getMobs().stream().filter(m -> !m.isBoss() && m.getEliteType() == 0).mapToLong(m -> m.getForcedMobStat().getExp()).min().orElse(0L);
        setMinExpPerMobOnField(minExp);
        var minHp = getField().getMobs().stream().filter(m -> !m.isBoss() && m.getEliteType() == 0).mapToLong(Mob::getMaxHp).min().orElse(0L);
        setMinHpPerMobOnField(minHp);

        return true;
    }

    @Override
    public void complete() {
        var totalDmgDone = getDamageDone().values().stream().mapToLong(s -> s).sum();
        var item = ItemData.getItemDeepCopy(GameConstants.ELITE_CHAMPION_ORB);
        var rect = new Rect(-300, -300, 300, 0);

        for (var entry : getDamageDone().entrySet()) {
            var chr = entry.getKey();
            var dmgDone = entry.getValue();

            var ratio = ((double) dmgDone / totalDmgDone) * 100;
            if (ratio > MINIMUM_DMG_RATIO_FOR_REWARD) {

                var chrRect = chr.getRectAround(rect);
                for (var i = 0; i < ELITE_CHAMPION_ORB_COUNT; i++) {
                    var drop = new Drop(-1, item, true);
                    drop.setMobExp((long) (ratio * ((double) (getMinExpPerMobOnField() * ELITE_CHAMPION_ORB_EXP_MULTIPLIER) / 100D)));
                    drop.setOwnerID(chr.getId());

                    getField().drop(drop, chrRect.getRandomPositionInside());
                }
            }
        }

        super.complete();
    }

    @Override
    public void destroy() {
        for (var mob : new HashSet<>(getField().getMobs())) {
            if (getTemplateList().contains(mob.getTemplateId())) {
                mob.die(false);
            }
        }

        super.destroy();
    }

    @Override
    public void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        if (getTemplateList().contains(mob.getTemplateId())) {
            addDamageDone(attacker, damage);
        }

        super.onMobDamaged(attacker, mob, damage, oldHp, newHp);
    }

    public abstract List<Integer> getTemplateList();
}
