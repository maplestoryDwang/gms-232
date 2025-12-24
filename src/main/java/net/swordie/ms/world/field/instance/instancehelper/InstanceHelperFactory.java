package net.swordie.ms.world.field.instance.instancehelper;

import net.swordie.ms.constants.FieldConstants;
import net.swordie.ms.constants.MobConstants;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.ms.world.field.instance.instancehelper.boss.*;
import net.swordie.ms.world.field.instance.instancehelper.events.InfernoWolfInstanceHelper;
import net.swordie.ms.world.field.instance.instancehelper.events.courtshipdancing.CourtshipDancingInstanceHelper;
import net.swordie.ms.world.field.instance.instancehelper.events.monsterdefense.BountyHuntInstanceHelper;
import net.swordie.ms.world.field.instance.instancehelper.events.monsterdefense.GuardTheCastleGatesInstanceHelper;
import net.swordie.ms.world.field.instance.instancehelper.events.monsterdefense.NewPyramidInstanceHelper;
import net.swordie.ms.world.field.instance.instancehelper.pq.*;
import net.swordie.ms.world.field.instance.instancehelper.quests.ClosedLabInstanceHelper;

/**
 * Created on 02/02/2022.
 *
 * @author Asura
 */
public class InstanceHelperFactory {

    // So far.. Only used for InfernoWolf
    public static InstanceHelper getHelperByMob(Mob mob) {
        if (MobConstants.isInfernoWolf(mob.getTemplateId())) {
            return new InfernoWolfInstanceHelper();
        }

        return null;
    }

    public static InstanceHelper getHelperByInstance(Instance instance) {

        if (instance == null) {
            return null;
        }

        if (instance.getInstanceHelper() != null) {
            return instance.getInstanceHelper();
        }

        // Build
        var fieldId = instance.getEnterFieldId();

        // Moon Bunny
        if (FieldConstants.isMoonBunnyField(fieldId)) {
            instance.setInstanceHelper(new MoonBunnyInstanceHelper());
        }

        // Courtship Dancing
        if (FieldConstants.isCourtshipDancingField(fieldId)) {
            instance.setInstanceHelper(new CourtshipDancingInstanceHelper());
        }

        // Nett's Pyramid
        if (FieldConstants.isNettPyramidField(fieldId)) {
            instance.setInstanceHelper(new NewPyramidInstanceHelper());
        }

        if (FieldConstants.isGuardTheCastleGatesField(fieldId)) {
            instance.setInstanceHelper(new GuardTheCastleGatesInstanceHelper());
        }

        // Bounty Hunt
        if (FieldConstants.isBountyHuntField(fieldId)) {
            instance.setInstanceHelper(new BountyHuntInstanceHelper());
        }

        // Commerci Voyage
        if (FieldConstants.isVoyageField(fieldId)) {
            instance.setInstanceHelper(new VoyageInstanceHelper());
        }

        // Oz
        if (FieldConstants.isTowerOfOzField(fieldId)) {
            instance.setInstanceHelper(new TowerOfOzInstanceHelper());
        }

        // Magnus
        if (FieldConstants.isBossMagnusField(fieldId)) {
            instance.setInstanceHelper(new MagnusInstanceHelper());
        }

        // Hilla
        if (FieldConstants.isHardHillaField(fieldId)) {
            instance.setInstanceHelper(new HardHillaInstanceHelper());
        }

        if (FieldConstants.isVonLeonField(fieldId)) {
            instance.setInstanceHelper(new VonLeonInstanceHelper());
        }

        if (FieldConstants.isRanmaruField(fieldId)){
            instance.setInstanceHelper(new RanmaruInstanceHelper());
        }


        if (FieldConstants.isVonBonInstanceField(fieldId)){
            instance.setInstanceHelper(new VonBonInstanceHelper());
        }

        if (FieldConstants.isVellumField(fieldId)) {
            instance.setInstanceHelper(new VellumInstanceHelper());
        }

        if(FieldConstants.isPierreField(fieldId)){
            instance.setInstanceHelper(new PierreInstanceHelper());
        }

        if (FieldConstants.isCygnusField(fieldId)){
            instance.setInstanceHelper(new CygnusInstanceHelper());
        }

        // Zakum
        if (FieldConstants.isBossZakumField(fieldId)) {
            instance.setInstanceHelper(new ZakumInstanceHelper());
        }

        // Will
        if (FieldConstants.isBossWillField(fieldId)) {
            instance.setInstanceHelper(new WillInstanceHelper());
        }

        // Gloom
        if (FieldConstants.isGloomField(fieldId)) {
            instance.setInstanceHelper(new GloomInstanceHelper());
        }

        // Inferno Wolf Den
        if (FieldConstants.isInfernoWolfDenField(fieldId)) {
            instance.setInstanceHelper(new InfernoWolfInstanceHelper());
        }

        //Goo Island Exploration
        if (FieldConstants.isGooExplorationField(fieldId)){
            instance.setInstanceHelper(new GooExplorationInstanceHelper());
        }

        //Closed Lab (Used for Quest: [Magatia's Secret] Zenumist and the Missing Alchemist)
        if (fieldId == 926120100) {
            instance.setInstanceHelper(new ClosedLabInstanceHelper());
        }


        return instance.getInstanceHelper();
    }

}
