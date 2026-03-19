function start() {
    cm.onTeleport(0, 3, cm.getPlayer().getId(), 1000, 16);
    cm.getMap().killAllMonsters(true);
    cm.removeAll(4000890);
    cm.playerMessage(-1, "兔子箱把小兔子玩偶道具全部带走了.");
    cm.playerMessage(5, "兔子箱把小兔子玩偶道具全部带走了.")
};