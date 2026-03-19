function start() {
    if (cm.getMapId() == 932200200) {
        var a = cm.getEventManager("活动_跑旗赛7点");
        var b = eim.getMapInstance(932200200);
        if (a == null) {
            cm.playerMessage(5, "副本出错，请联系管理员");
            return
        }
        if (a.getProperty("gate") == "2") {
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 200, 2458)
        } else {
            cm.playerMessage(5, "不要着急，还没开始哦！");
            cm.playerMessage(-1, "不要着急，还没开始哦！");
            return
        }
    } else {
        if (cm.getMapId() == 932200100) {
            var a = cm.getEventManager("活动_跑旗赛9点");
            if (a == null) {
                cm.playerMessage(5, "副本出错，请联系管理员");
                return
            }
            if (a.getProperty("gate") == "2") {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -1985, 2520)
            } else {
                cm.playerMessage(5, "不要着急，还没开始哦！");
                cm.playerMessage(-1, "不要着急，还没开始哦！");
                return
            }
        }
    }
};