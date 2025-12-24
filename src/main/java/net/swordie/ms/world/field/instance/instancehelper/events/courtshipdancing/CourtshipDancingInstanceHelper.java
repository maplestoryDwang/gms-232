package net.swordie.ms.world.field.instance.instancehelper.events.courtshipdancing;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.quicktimeevent.QuickTimeEvent;
import net.swordie.ms.connection.packet.CourtshipDancingPacket;
import net.swordie.ms.connection.packet.InGameDirectionEvent;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

import java.util.ArrayList;

/**
 * Created on 02/02/2022.
 *
 * @author Asura
 */
public class CourtshipDancingInstanceHelper extends InstanceHelper {

    private static final int[] QTE_COUNT = new int[] {
            4,
            6,
            7,
            7,
            7,
            8,
            8,
            8,
            10,
            10,
    };

    @Override
    protected boolean finishedInstance() {
        return getCurrentStage() > QTE_COUNT.length;
    }

    @Override
    public void setup(Instance instance) {
        instance.broadcast(UserLocal.setInGameDirectionMode(true, false, false));
        instance.broadcast(UserLocal.inGameDirectionEvent(InGameDirectionEvent.vansheeMode(true)));

        var qteList = new ArrayList<QuickTimeEvent>();
        for (var qteLength : QTE_COUNT) {
            qteList.add(QuickTimeEvent.generateRandom(qteLength));
        }

        instance.addProperty("qteList", qteList);
        instance.broadcast(CourtshipDancingPacket.courtshipDancingQuickTimeEvent(qteList));
        instance.broadcast(CourtshipDancingPacket.courtshipDancingStage(2));

        super.setup(instance);
    }

    @Override
    protected void completeInstance() {
        getInstance().broadcast(CourtshipDancingPacket.courtshipDancingStage(3));
        super.completeInstance();
    }

    @Override
    public void onInstanceCleared(Instance instance) {
        instance.broadcast(UserLocal.setInGameDirectionMode(false, false, false));
        instance.broadcast(UserLocal.inGameDirectionEvent(InGameDirectionEvent.vansheeMode(false)));
        super.onInstanceCleared(instance);
    }

    @Override
    public void onQuickTimeEventSuccess(Char chr) {
        completeStage();
        super.onQuickTimeEventSuccess(chr);
    }
}
