function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getNumberFromQuestInfo(64204, "LadderMob") == 0) {
        cm.setNumberForQuestInfo(64204, "LadderMob", 1);
        cm.killMob(9402273);
        cm.spawnMobLimit(9402274, 1, -99, 800, 1)
    }
};