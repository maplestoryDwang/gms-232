function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getNumberFromQuestInfo(64204, "LadderMob") == 1) {
        cm.setNumberForQuestInfo(64204, "LadderMob", 2)
    }
};