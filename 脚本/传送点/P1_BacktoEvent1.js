function start() {
    if (cm.getPlayer().getPosition().y < 489) {
        cm.addNumberForQuestInfo(64272, "25", 1);
        cm.gainSkillBuff(80011641);
        if (cm.getInfoQuest(64202).contains("event2_camera")) {
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 800, 436)
        } else {
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 200, 433)
        }
    }
};