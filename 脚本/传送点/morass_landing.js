function start() {
    if (cm.getMapId() == 940204001) {
        cm.dispelBuff(80002228);
        cm.warp(450006000, 0, true)
    } else {
        cm.playerMessage(-1, "等待添加方法")
    }
};