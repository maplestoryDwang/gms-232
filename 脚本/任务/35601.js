var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.askMenu_Bottom("叽叽！现在神秘河气流很混乱！\r\n#h0#。要不要前往埃斯佩拉？\r\n#b#L0#是的#l    #L1#不是#l#k\r\n#r确认后立即前往任务地图#k。", 37, 1540446)
        } else {
            if (status == a++) {
                if (b == 0) {
                    cm.updateInfoQuest(35157, "");
                    cm.updateInfoQuest(35150, "");
                    cm.updateInfoQuest(35162, "");
                    cm.updateInfoQuest(35157, "return=450006130");
                    cm.updateInfoQuest(35157, "save=993060000;return=450006130");
                    cm.dispose();
                    cm.warp(993060000, 0, false)
                } else {
                    if (b == 1) {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};