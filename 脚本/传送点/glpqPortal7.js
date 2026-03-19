function start() {
    cm.warp(610030800, 0);
    if (cm.getPlayer().getEventInstance() != null && cm.getPlayer().getEventInstance().getName().startsWith("CWKPQ")) {
        cm.getPlayer().modifyCSPoints(1, 4000);
        cm.finishAchievement(37)
    }
};