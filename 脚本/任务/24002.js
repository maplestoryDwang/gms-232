var status = -1;

function start(c, b, a) {
    status++;
    if (status == 0) {
        cm.sendNext("因为黑魔法师的诅咒，不仅是双弩精灵本人，整个#m101050000#都正在被冰冻起来。在所有一切被冰冻起来之前，最好把村子封印起来。去见见#b魔法长老#p1033100##k，询问封印的方法吧。")
    } else {
        if (status == 1) {
            cm.forceStartQuest(24002);
            cm.dispose()
        }
    }
}

function end(c, b, a) {
    status++;
    if (status == 0) {
        cm.sendOk("启动了魔法阵。现在外面的人应该无法感觉到#m101050000#的存在了。");
        cm.forceCompleteQuest(24002);
        cm.dispose()
    } else {
        if (status == 1) {
            cm.dispose()
        }
    }
};