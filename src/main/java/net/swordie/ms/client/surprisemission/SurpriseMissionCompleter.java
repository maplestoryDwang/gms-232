package net.swordie.ms.client.surprisemission;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.enums.QuestStatus;

/**
 * Created on 31/01/2022.
 *
 * @author Asura
 */
public class SurpriseMissionCompleter {
    public static void completeFindBurningField(Char chr) {
        if (chr == null || chr.getSurpriseMission() == null) {
            return;
        }
        var qm = chr.getQuestManager();
        var q = qm.getQuestById(49011); // Find a Burning Field!
        if (q != null && !q.getStatus().equals(QuestStatus.Completed)) {
            SurpriseMissionModule.completeSurpriseMission(chr);
        }
    }

    public static void completeVisitInfernoWolfDen(Char chr) {
        if (chr == null || chr.getSurpriseMission() == null) {
            return;
        }
        var qm = chr.getQuestManager();
        var q = qm.getQuestById(49016); // Visit the Inferno Wolf's Den once!
        if (q != null && !q.getStatus().equals(QuestStatus.Completed)) {
            SurpriseMissionModule.completeSurpriseMission(chr);
        }
    }

    public static void completeHelpPolloAndFritto(Char chr) {
        if (chr == null || chr.getSurpriseMission() == null) {
            return;
        }
        var qm = chr.getQuestManager();
        var q = qm.getQuestById(49017); // Help Pollo and Fritto once!
        if (q != null && !q.getStatus().equals(QuestStatus.Completed)) {
            SurpriseMissionModule.completeSurpriseMission(chr);
        }
    }

    public static void completeUseHiddenPortal(Char chr) {
        if (chr == null || chr.getSurpriseMission() == null) {
            return;
        }
        var qm = chr.getQuestManager();
        var q = qm.getQuestById(49018); // Use the Field's Hidden Portal!
        if (q != null && !q.getStatus().equals(QuestStatus.Completed)) {
            SurpriseMissionModule.completeSurpriseMission(chr);
        }
    }
}
