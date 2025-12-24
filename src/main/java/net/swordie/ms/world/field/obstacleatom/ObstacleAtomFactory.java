package net.swordie.ms.world.field.obstacleatom;

import net.swordie.ms.enums.ObstacleAtomEnum;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Foothold;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created on 08/07/2021.
 *
 * @author Asura
 */
public class ObstacleAtomFactory {

    public static Set<ObstacleAtomInfo> createObstacleAtoms(ObstacleAtomEnum e, List<Foothold> allowedFootholds, int fieldTop, int damage, int velocity, int angle, int chance, int amount) {
        Set<ObstacleAtomInfo> atomInfos = new HashSet<>();

        if (allowedFootholds.size() <= 0) {
            return atomInfos;
        }

        for (int i = 0; i < amount; i++) {
            if (Util.succeedProp(chance)) {

                var fh = Util.getRandomFromCollection(allowedFootholds);
                if (fh == null) {
                    continue;
                }
                atomInfos.add(createObstacleAtom(e, fh, fieldTop, damage, velocity, angle));

            }
        }

        return atomInfos;
    }

    public static ObstacleAtomInfo createObstacleAtom(ObstacleAtomEnum e, Foothold fh, int fieldTop, int damage, int velocity, int angle) {
        var randPosOnFh = fh.getRandomPosition();
        var adj = Math.abs(randPosOnFh.getY() - fieldTop);
        double length = adj; // hypothenuse = adjacent if angle = 0
        if (angle > 0) {
            length = Util.getHypothenuseViaCAH(angle, adj);
        }
        var startingPos = Util.getPositionTranslation(randPosOnFh, angle, length);

        ObstacleAtomInfo oai = new ObstacleAtomInfo(e.getType(), 1, startingPos, randPosOnFh, e.getHitBox(),
                damage, 0, 0, 0, 0, velocity + Util.getRandom(0, 3), (int) length,
                Util.convertDegreeToDumbFuckingNexonsWayOfDoingDegreesForObstacleAtoms(angle));

        return oai;
    }

}
