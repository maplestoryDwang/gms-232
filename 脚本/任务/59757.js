var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    if ("chk=1".equals(cm.getInfoQuest(59758))) {
        cm.dispose();
        cm.openUI(370);
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("[代号BT的观察日志]", 37, 9400031, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("APORD的宇宙船上有很多由那些家伙设置的各种陷阱和鬼把戏！还有正在不断生成的克隆体！", 37, 9400031, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("通过对宇宙船进行反复探险和利用多种方法进行调查后，我发现了各种由APORD藏匿的宝物！", 37, 9400031, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我把这些信息全都记录在这里。并且在把那些家伙的宝物全部弄到手之前，我需要继续调查！", 37, 9400031, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("[观察日志结束]", 37, 9400031, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(59758, "chk=1");
                                cm.openUI(370);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};