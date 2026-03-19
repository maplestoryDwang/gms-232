function start() {
    var a = parseInt(cm.getInfoQuest(105200000));
    if (isNaN(a) || a < 1) {
        a = 105000000
    }
    cm.warp(a, 0);
    cm.playerMessage("从鲁塔比斯回到原来所在的地方。");
    return true
};