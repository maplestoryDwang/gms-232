var status = -1;

function start(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            if (status == 0) {
                cm.dispose();
                return
            } else {
                if (status == 1) {
                    cm.sendOk("真的没人来救我了吗？呜呜……");
                    cm.dispose()
                }
            }
            status--
        }
        if (status == 0) {
            cm.sendNext("呜呜……有没有人来救我啊？我是从埃德尔斯坦到新叶城来旅行的，可是突然有一扇奇怪的大门被打开，有很多怪物从那扇门冲出来，抓走了新叶城的市民，占领了新叶城！")
        } else {
            if (status == 1) {
                cm.askYesNo("冒险家，你可不可以来新叶城救我啊？")
            } else {
                if (status == 2) {
                    cm.forceCompleteQuest();
                    cm.forceCompleteQuest(56201);
                    cm.forceCompleteQuest(56202);
                    cm.forceCompleteQuest(56203);
                    cm.warp(703000000, 0);
                    cm.dispose()
                }
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};