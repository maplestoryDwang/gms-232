package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.connection.packet.ReactorPool;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Reactor;
import net.swordie.ms.loaders.ReactorData;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.Field;

import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author  dwang
 * @date 2026/2/27
 * @description
 */
public interface PyReactorAPI extends DwangScriptBaseApi {

    
    default void removeReactor() {
        Field field = getField();
        Life life = field.getLifeByObjectID(getObjectIDByScriptType(ScriptType.Reactor));
        if (life instanceof Reactor) {
            field.removeLife(life.getObjectId(), false);
        }
    }

    
    default void spawnReactor(int reactorId, int x, int y) {
        Field field = getField();
        Reactor reactor = ReactorData.getReactorByID(reactorId);
        reactor.setPosition(new Position(x, y));
        field.spawnLife(reactor, null);
    }

    
    default boolean hasReactors() {
        Field field = getField();
        return field.getReactors().size() > 0;
    }

    
    default int getReactorQuantity() {
        Field field = getField();
        return field.getReactors().size();
    }


    default int getReactorState(int reactorId) {
        Field field = getField();
        Life life = field.getLifeByTemplateId(reactorId);
        if (life != null && life instanceof Reactor) {
            Reactor reactor = (Reactor) life;
            return reactor.getState();
        }
        return -1;
    }

    default void increaseReactorState(int reactorId, int stateLength) {
        getField().increaseReactorState(getChr(), reactorId, stateLength);
    }

    default void changeReactorStateByTemplateId(int templateId, byte state, short delay, byte stateLength) {
        Field field = getField();
        Set<Reactor> reactors = field.getReactors().stream()
                .filter(r -> r.getTemplateId() == templateId)
                .collect(Collectors.toSet());

        for (var reactor : reactors) {
            reactor.setState(state);
            getField().broadcastPacket(ReactorPool.reactorChangeState(reactor, delay, stateLength));
        }
    }
}
