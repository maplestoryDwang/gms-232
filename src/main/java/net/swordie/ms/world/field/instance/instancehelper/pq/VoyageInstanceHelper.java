package net.swordie.ms.world.field.instance.instancehelper.pq;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.commerce.voyage.Voyage;
import net.swordie.ms.client.character.commerce.voyage.VoyageConstants;
import net.swordie.ms.client.character.commerce.voyage.VoyageRouteType;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.constants.FieldConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.life.drop.DropInfo;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

import java.util.HashSet;
import java.util.Set;

/**
 * Created on 03/07/2021.
 *
 * @author Asura
 */
public class VoyageInstanceHelper extends InstanceHelper {

    @Override
    public void onAttack(Char chr, AttackInfo attackInfo) {

        // Voyage
        if (chr.getInstance() != null && FieldConstants.isVoyageField(chr.getFieldID())) {
            var mobsKilled = (int) attackInfo.mobAttackInfo.stream().filter(mai -> mai.mobDies).count();
            Voyage.incMobsEliminated(chr, mobsKilled);
        }
    }

    @Override
    public void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        var field = attacker.getField();
        var instance = attacker.getInstance();
        var templateId = mob.getTemplateId();
        var route = VoyageRouteType.getByVal((int) instance.getProperty("voyage"));

        if (newHp <= 0) {

            var dropPosition = new Position(65, 200);
            var denaro = ItemConstants.COMMERCI_DENARO;
            var denaroItem = ItemData.getItemDeepCopy(denaro);
            Set<DropInfo> diSet = new HashSet<>();

            switch (route) {
                case Dolce:

                    switch (templateId) {
                        case VoyageConstants.CAPTAIN_BLOOD_PIRATE:
                        case VoyageConstants.SIREN:
                            var di = new DropInfo(denaro, 50, 2, 5);
                            diSet.add(di);
                            break;
                        case VoyageConstants.CORAL_REEF_RUNNER:
                        case VoyageConstants.OCEAN_REEF_RUNNER:
                            di = new DropInfo(denaro, 1_000, 5, 10);
                            diSet.add(di);
                            break;
                    }

                    break;
                case Luna:

                    switch (templateId) {
                        case VoyageConstants.CAPTAIN_BLOOD_PIRATE:
                        case VoyageConstants.SIREN:
                            var di = new DropInfo(denaro, 50, 2, 5);
                            diSet.add(di);
                            break;
                        case VoyageConstants.CORAL_REEF_RUNNER:
                        case VoyageConstants.OCEAN_REEF_RUNNER:
                            di = new DropInfo(denaro, 1_000, 5, 10);
                            diSet.add(di);
                            break;
                    }

                    break;
                case Rosa:

                    switch (templateId) {
                        case VoyageConstants.CAPTAIN_BLOOD_PIRATE:
                        case VoyageConstants.SIREN:
                            var di = new DropInfo(denaro, 50, 2, 5);
                            diSet.add(di);
                            break;
                        case VoyageConstants.CORAL_REEF_RUNNER:
                        case VoyageConstants.OCEAN_REEF_RUNNER:
                            di = new DropInfo(denaro, 1_000, 5, 10);
                            diSet.add(di);
                            break;
                        case VoyageConstants.GROSSO_POLPO:
                            for (int i = 0; i < 3; i++) {
                                di = new DropInfo(denaro, 6_000, 5, 10);
                                diSet.add(di);
                            }
                            break;
                    }

                    break;
                case HerbTown:

                    switch (templateId) {
                        case VoyageConstants.CAPTAIN_BLOOD_PIRATE:
                        case VoyageConstants.SIREN:
                            var di = new DropInfo(denaro, 50, 2, 5);
                            diSet.add(di);
                            break;
                        case VoyageConstants.CORAL_REEF_RUNNER:
                        case VoyageConstants.OCEAN_REEF_RUNNER:

                            break;
                        case VoyageConstants.GROSSO_POLPO:
                            for (int i = 0; i < 3; i++) {
                                di = new DropInfo(denaro, 7_000, 5, 10);
                                diSet.add(di);
                            }
                            break;
                        case VoyageConstants.LIVYATAN:
                            for (int i = 0; i < 4; i++) {
                                di = new DropInfo(denaro, 7_000, 5, 10);
                                diSet.add(di);
                            }
                            break;
                    }

                    break;
                case Rien:

                    switch (templateId) {
                        case VoyageConstants.CAPTAIN_BLOOD_PIRATE:
                        case VoyageConstants.SIREN:
                            var di = new DropInfo(denaro, 50, 2, 5);
                            diSet.add(di);
                            break;
                        case VoyageConstants.CORAL_REEF_RUNNER:
                        case VoyageConstants.OCEAN_REEF_RUNNER:

                            break;
                        case VoyageConstants.GROSSO_POLPO:
                            for (int i = 0; i < 4; i++) {
                                di = new DropInfo(denaro, 8_000, 5, 10);
                                diSet.add(di);
                            }
                            break;
                        case VoyageConstants.LIVYATAN:
                            for (int i = 0; i < 6; i++) {
                                di = new DropInfo(denaro, 8_000, 5, 10);
                                diSet.add(di);
                            }
                            break;
                    }

                    break;
                case LithHarbor:

                    switch (templateId) {

                        case VoyageConstants.CAPTAIN_BLOOD_PIRATE:
                        case VoyageConstants.SIREN:
                            var di = new DropInfo(denaro, 50, 2, 5);
                            diSet.add(di);
                            break;
                        case VoyageConstants.CORAL_REEF_RUNNER:
                        case VoyageConstants.OCEAN_REEF_RUNNER:

                            break;
                        case VoyageConstants.GROSSO_POLPO:
                            for (int i = 0; i < 5; i++) {
                                di = new DropInfo(denaro, 9_000, 5, 15);
                                diSet.add(di);
                            }
                            break;
                        case VoyageConstants.LIVYATAN:
                            for (int i = 0; i < 8; i++) {
                                di = new DropInfo(denaro, 9_000, 5, 15);
                                diSet.add(di);
                            }
                            break;
                    }

                    break;
            }

            if (diSet.size() > 0) {
                field.drop(diSet, dropPosition, attacker.getId());
            }
        }
    }
}
