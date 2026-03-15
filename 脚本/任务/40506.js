var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("#face2#……真是太感谢你们了……#p2400005#，#p2400006#……请原谅#p2400008#愚蠢的行为吧。", 33, 2400007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face2#以后我将……代替#p2400008#帮两位探路。", 33, 2400007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face2#现在……再哭一会儿……以后我再也不会哭了。一切都将恢复原样……", 33, 2400007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face2#…………", 33, 2400007, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(40506, "");
                            cm.forceStartQuest(40506, "");
                            cm.forceCompleteQuest(40506);
                            cm.forceCompleteQuest(40954);
                            cm.forceStartQuest(41912, "0");
                            cm.setInGameDirectionMode(false, true, false);
                            cm.teachSkill(100001283, 1, 0);
                            cm.gainExp(99805600);
                            cm.gainItem(4033921, -1);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40506.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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