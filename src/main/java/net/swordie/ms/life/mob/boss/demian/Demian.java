package net.swordie.ms.life.mob.boss.demian;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.boss.demian.stigma.DemianStigma;
import net.swordie.ms.life.mob.boss.demian.stigma.DemianStigmaIncinerateObject;
import net.swordie.ms.world.field.Field;

import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

/**
 * Created on 17-8-2019.
 *
 * @author Asura
 */
public class Demian {

    public static ScheduledFuture stigmaIncinerateObjectTimer(Field field) {
        return EventManager.addFixedRateEvent(() ->
                field.spawnLifeForTime(
                        new DemianStigmaIncinerateObject(-1),
                        BossConstants.DEMIAN_STIGMA_INCINERATE_OBJECT_DURATION_TIME),
                        5000,
                        BossConstants.DEMIAN_STIGMA_INCINERATE_OBJECT_RESPAWN_TIME,
                        TimeUnit.MILLISECONDS
        );
    }

    public static ScheduledFuture increaseStigmaPassiveTimer(Char chr) {
        return EventManager.addFixedRateEvent(() -> increaseStigmaPassive(chr), 0, BossConstants.DEMIAN_PASSIVE_STIGMA_TIME, TimeUnit.MILLISECONDS);
    }

    public static void increaseStigmaPassive(Char chr) {
        DemianStigma.incStigma(chr);
        //chr.write(DemianFieldPacket.userDeadReviveTimer(BossConstants.DEMIAN_PASSIVE_STIGMA_TIME));
    }
}
