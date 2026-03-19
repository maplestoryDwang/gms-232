function start() {
    if ("NpcSpeech=94009551;enter=1;give=1".equals(cm.getInfoQuest(64696))) {
        cm.warp(871000023, 1)
    } else {
        if (cm.isQuestActive(64697)) {
            cm.warp(871000024, 1)
        } else {
            if (cm.getQuestStatus(64902) > 0 && !cm.isQuestFinished(67906)) {
                cm.warp(871000054, 0, true)
            } else {
                cm.warp(871000002, 0)
            }
        }
    }
};