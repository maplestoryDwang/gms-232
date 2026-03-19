function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askMenu("你一个人真的能够保护我吗？到处都是危险的怪物啊。\r\n#b#L0#出发。#l\r\n#L1#不出发。#l", 5, 2510001)
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.sendNormalTalk("等等，一起走！", 5, 2510001, false, true)
                } else {
                    if (b == 1) {
                        cm.sendNormalTalk("看，我说吧，一个人是不行的！", 4, 2510001, false, false);
                        cm.dispose()
                    }
                }
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.openNpc("次元图书馆_Ep1_白魔法师_沙漠护送")
                }
            }
        }
    }
};