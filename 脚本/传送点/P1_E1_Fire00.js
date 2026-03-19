function start() {
    cm.gainSkillBuff(80011641);
    if (cm.getInfoQuest(64202).contains("event2_camera")) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 800, 436)
    } else {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 200, 433)
    }
    cm.addNumberForQuestInfo(64272, "25", 1)
};