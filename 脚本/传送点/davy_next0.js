function start() {
    if (cm.getzhizunvip() != 2) {
        cm.playerMessage(-1, "该菜单是至尊版专享。");
        return
    }
    if (cm.haveItem(4001260, 7) && cm.getPlayer().getParty() != null && cm.getMap().getNumMonsters() == 0) {
        cm.warpParty(925100100, 0)
    } else {
        cm.playerMessage(5, "消灭所有怪物并获得7把禁忌之枪。")
    }
};