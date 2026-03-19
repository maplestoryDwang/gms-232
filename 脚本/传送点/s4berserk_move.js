function start() {
    var a = cm.getMap(910500200).getSpawnedMonstersOnMap();
    if (a <= 0) {
        cm.warp(910500200, "pt00");
        return true
    }
    cm.playerMessage("已经关闭的传送口。");
    return true
};