function start() {
    if (cm.getNumberFromQuestInfo(64204, "LadderMob") == 1) {
        cm.onTeleport(4, cm.getPlayer().getId(), -86, 351);
        cm.addNumberForQuestInfo(64204, "P2_fall", 1);
        cm.addNumberForQuestInfo(64272, "25", 1)
    }
};