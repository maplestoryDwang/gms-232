function start() {
    if (cm.getzhizunvip() != 2) {
        cm.playerMessage(-1, "该菜单是至尊版专享。");
        return
    }
    if (cm.isLeader() && em.getProperty("stage925100200").equals("6") && cm.getMap().getNumMonsters() == 0 && em.getProperty("stage2a").equals("1")) {
        cm.warpParty(925100300, 0)
    } else {
        eim.getPlayers().forEach(function (a) {
            a.getAPI().getTopMsgFont("调查所有箱子并消灭暗舱里的敌人，由队长申请通过。", 3, 20, 6, 0)
        })
    }
};