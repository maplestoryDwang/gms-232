function start() {
    if (cm.isLeader() && em.getProperty("stage925100300").equals("6") && cm.getMap().getNumMonsters() == 0 && em.getProperty("stage3a").equals("1")) {
        cm.warpParty(925100400, 0)
    } else {
        eim.getPlayers().forEach(function (a) {
            a.getAPI().getTopMsgFont("调查所有箱子并消灭暗舱里的敌人，由队长申请通过。", 3, 20, 6, 0)
        })
    }
};