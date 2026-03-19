function start() {
    var c = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    var b = cm.getMapId();
    if (b == 867200810) {
        if (cm.haveItem(4036373, 20) && cm.haveItem(4036374, 20)) {
            cm.warp(867200850, 2)
        } else {
            cm.sendOkS_Bottom("#b（还没收集到足够的物资，先别急着回去了。）")
        }
    } else {
        if (b == 867200860) {
            cm.sendNormalTalk_Bottom("#b(这里的怪物还没有清理干净。) ", 57, 0, false, true)
        }
    }
};