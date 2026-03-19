function start() {
    cm.莫奈德_特效(null, [0, 3]);
    cm.莫奈德_特效(null, [7, 5]);
    cm.setNumberForQuestInfo(64006, "Ec", 1);
    cm.useItem(2210207, false);
    cm.monadForceMove("0", 1, 3000);
    cm.onSetBackEffect("0", 1, 1, 0, 0);
    cm.monadForceMove("1", 0, 3000);
    cm.onSetBackEffect("1", 1, 0, 0, 0);
    cm.monadForceMove("2", 0, 3000);
    cm.onSetBackEffect("2", 1, 0, 0, 0);
    cm.monadForceMove("3", 0, 3000);
    cm.onSetBackEffect("3", 1, 0, 0, 0);
    cm.莫奈德_特效("太好了，暴风雪的速度减慢了许多。", [1, 0, 3000]);
    cm.莫奈德_特效("有什么可庆幸的？减慢又不是消失！", [1, 1, 3000], 3);
    cm.莫奈德_特效(null, [6, 0, 0, 0, 0, 0]);
    cm.莫奈德_特效(null, [8, 0, 0, 0, 0]);
    cm.莫奈德_特效(null, [0, 2])
};