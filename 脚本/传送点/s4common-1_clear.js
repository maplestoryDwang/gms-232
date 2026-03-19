function start() {
    if (cm.haveMonster(9300093)) {
        var a = cm.getEventManager("ProtectTylus");
        if (a == null) {
            cm.warp(211000001, 0)
        } else {
            if (a.getInstance("ProtectTylus").getTimeLeft() < 180000) {
                cm.warp(921100301, 0)
            } else {
                cm.playerMessage("请解救人质！！");
                return false
            }
        }
    } else {
        cm.warp(211000001, 0);
        cm.playerMessage("哦不！他被绑架了！")
    }
    return true
};