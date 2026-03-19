function start() {
    var a = cm.getEventManager("组队任务_海盗船");
    if (a.getProperty("stage4").equals("4")) {
        if (cm.isLeader() && cm.haveItem(4001117, 20)) {
            cm.warpParty(925100500, 0)
        } else {
            eim.getPlayers().forEach(function (b) {
                b.getAPI().getTopMsgFont("必须关上所有的门，队长带来20把骷髅钥匙。", 3, 20, 4, 0, 0)
            })
        }
    } else {
        eim.getPlayers().forEach(function (b) {
            b.getAPI().getTopMsgFont("必须关上所有的门，队长带来20把骷髅钥匙。", 3, 20, 4, 0, 0)
        })
    }
};