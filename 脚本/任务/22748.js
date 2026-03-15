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
            cm.sendNormalTalk_Bottom("#face0#来，这是最后一次！这次是#b冰独眼兽#k！\r\n捕猎#b50只冰独眼兽#k，收集#b10个#k尾巴！", 36, 1531003, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face2#看样子#b冰独眼兽#k的尾巴很好吃吧。", 36, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face0#没有啦，#b冰独眼兽#k的尾巴很凉爽，比起口味，那凉爽的感觉真是一绝啊！", 36, 1531003, true, true)
                } else {
                    if (status === b++) {
                        cm.askYesNo_Bottom("#face0#总之，你就去捕猎#b50只#k#b冰独眼兽#k吧。", 36, 1531003)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#face0#你去#b天悦之地#k就能看到很多冰独眼兽了。", 36, 1531003, false, true)
                        } else {
                            if (status === b++) {
                                cm.dispose();
                                cm.forceStartQuest(22748, "")
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22748.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
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
            cm.sendNormalTalk_Bottom("#face1#你都收集齐了吗？给我吧。", 36, 1531003, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face1#哦！冰独眼兽的尾巴，给我吧。\r\n我给你换成亚乌的料理。\r\n\r\n#b#i2010045#  #t2010045#", 36, 1531003, true, true)
            } else {
                if (status === b++) {
                    cm.forceCompleteQuest(22748);
                    cm.gainExp(12500);
                    cm.gainItem(2010045, 10);
                    cm.gainItem(4000023, -10);
                    cm.sendNormalTalk_Bottom("#face0#现在超能力者好像成长了一些呢，\r\n不过得到#b30级#k才行。", 36, 1531003, true, false);
                    cm.dispose()
                }
            }
        }
    }
};