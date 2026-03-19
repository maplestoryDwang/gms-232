function start() {
    var a = cm.getJob();
    if (cm.isQuestActive(57436) || cm.isQuestActive(57140)) {
        cm.warp(807050200, 0)
    } else {
        if ((a == 4002 || a == 4200 || a == 4210 || a == 4211 || a == 4212) && !cm.isQuestFinished(57451)) {
            cm.warp(807050400, 0)
        } else {
            if (cm.isQuestActive(57157) || cm.isQuestActive(57453) || !cm.isQuestFinished(57460)) {
                if (cm.isQuestActive(57153)) {
                    cm.forceCompleteQuest(57153);
                    cm.forceCompleteQuest(57154);
                    cm.forceCompleteQuest(57155);
                    cm.warp(807000000, 0)
                } else {
                    cm.warp(807050500, 0)
                }
            } else {
                cm.playerMessage(5, "这里现在还不需要你去.")
            }
        }
    }
};