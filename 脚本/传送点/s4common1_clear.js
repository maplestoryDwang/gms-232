function start() {
    if (cm.haveMonster(9300093)) {
        var a = cm.getEventManager("ProtectTylus");
        if (a == null) {
            cm.warp(211000001, 0)
        } else {
            if (a.getInstance("ProtectTylus").getTimeLeft() < 180000) {
                cm.warpParty(921100301, 0)
            } else {
                cm.playerMessage("请保卫泰勒斯到3分钟时间!");
                return false
            }
        }
    } else {
        cm.warp(211000001, 0);
        cm.playerMessage("哦 不！保卫泰勒斯 失败了!")
    }
    return true
};