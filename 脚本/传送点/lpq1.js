function start() {
    var a = cm.getEventManager("LudiPQ").getInstance("LudiPQ");
    if (a.getProperty("stage1status") == null) {
        cm.playerMessage(5, "现在还不能进入。")
    } else {
        cm.warp(cm.getMapId() + 300, "st00")
    }
};