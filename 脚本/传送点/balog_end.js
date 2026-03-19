function start() {
    cm.gainExpR(cm.getPlayer().getMapId() == 105100301 ? 130000 : 260000);
    cm.getPlayer().modifyCSPoints(1, cm.getPlayer().getMapId() == 105100301 ? 2000 : 3000);
    cm.playerMessage(5, "在地上捡到了蝙蝠怪掉落的皮毛碎片。");
    cm.gainItem(4001261, 1);
    cm.warp(105100100, 0)
};