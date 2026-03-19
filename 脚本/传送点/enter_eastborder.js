function start() {
    if (cm.isQuestActive(25749)) {
        var a = cm.getEventManager("狂龙战士_战斗4");
        a.startInstance(cm.getPlayer(), cm.getMap())
    } else {
        cm.warp(400010200, "west00")
    }
};