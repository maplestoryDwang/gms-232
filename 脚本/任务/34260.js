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
            cm.sendNormalTalk_Bottom("你不难受吗？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#好难受。", 36, 3003400, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你不恨他们吗？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#憎恶……如果需要……", 36, 3003400, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("难道憎恨也要看需不需要吗。", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.warp(940204005, 0, true)
                            }
                        }
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