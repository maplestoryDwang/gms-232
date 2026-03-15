var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("#b#h0##k，你最近见过尤娜吗？", 37, 1531001, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("虽然她说没事，但可能是见不到你，她现在还是各种担心呢。", 37, 1531001, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("甚至整个人有点意志消沉，\r\n虽然尤娜总是看上去很能干，但我还是有些担心，特别是关于“凯内西斯”的事情就更加如此。", 37, 1531001, true, true)
                } else {
                    if (status === b++) {
                        cm.askYesNo_Bottom("她为了能见到你，来过据点好多次了，\r\n当然每次你都在那边的世界，你去让她看看你很健康行吗？", 36, 1531001)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("没错，你考虑得很对，现在尤娜她……估计……", 37, 1531001, false, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face3#知道知道，好学生尤娜这个点应该在学校自习呢。", 37, a, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#face2#既然你知道就赶紧去看看吧，来的时候要是有时间就给我带个巧克力糖果……算了，你还是赶紧去看看吧。", 37, 1531001, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#b(去学校见尤娜。)#k", 37, a, true, false);
                                        cm.forceStartQuest(22831, "");
                                        cm.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;coNight=1;kinePro=0;kinetuto=1;kinetuto2=1;E1=1;E2=1;blackCat=0;E3=1");
                                        cm.dispose()
                                    }
                                }
                            }
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22831.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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