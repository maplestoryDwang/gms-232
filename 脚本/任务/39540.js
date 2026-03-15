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
            cm.sendNormalTalk_Bottom("#face0#唧唧唧……唧……", 36, 3001666, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#倒是挺会强取豪夺的啊！？这美丽的容颜……\r\n唧……唧唧……", 36, 3001666, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#不是被夺走了，那就是你的样子，\r\n现在就选择承认你自己吧，这样才能有所进步吧！？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#（法师说得没错，自从脸被夺走之后力量就开始急速衰弱了，\r\n伺机回收那家伙身上的跳蚤怪吧。）", 36, 3001674 + cm.getPlayer().getGender())
                    } else {
                        if (status === a++) {
                            cm.playerMessage(5, "必须打败现出原形的鼠精。");
                            cm.dispose();
                            cm.openNpc("虎影_激战鼠精二")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39540.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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