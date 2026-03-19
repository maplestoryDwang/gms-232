function start() {
    cm.gainSkillBuff(80011641);
    if (cm.getInfoQuest(64201).contains("event3_camera")) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 390, 433)
    } else {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 1315, 517)
    }
    cm.addNumberForQuestInfo(64272, "25", 1)
};