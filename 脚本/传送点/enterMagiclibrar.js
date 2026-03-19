function start() {
    if (cm.isQuestActive(25535) || cm.isQuestActive(25536) || cm.isQuestActive(25537) || cm.isQuestActive(25538) || cm.isQuestActive(25539) || cm.isQuestActive(25540)) {
        cm.warp(101000010, 9, false)
    } else {
        if (cm.isQuestActive(25541) || cm.isQuestActive(25564) || cm.isQuestActive(25565) || cm.isQuestActive(25566) || cm.isQuestActive(25567) || cm.isQuestActive(25568) || cm.isQuestActive(25569) || cm.isQuestActive(25570) || (cm.isQuestFinished(25541) && cm.isQuestFinished(25543) && cm.getQuestStatus(25548) == 0)) {
            cm.warp(910142040, 9, false)
        } else {
            cm.warp(101000003, 8, false)
        }
    }
};