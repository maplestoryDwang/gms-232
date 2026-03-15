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
            cm.sendNormalTalk_Bottom("噢……我的名字是扎洛~\r\n你是要去打猎吧~", 36, 1531027, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face0#行了，别再瞎动你那几根稻草脑袋了，\r\n反正不就是让去打猎嘛，就今天。", 36, 1531003, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("嗯……你一句话~\r\n就是我的天堂~\r\n感激不尽哦~\r\n\r\n#b#i1040020# #t1040020#", 36, 1531027, true, true)
                } else {
                    if (status === b++) {
                        cm.askYesNo_Bottom("#face2#你这根本就不押韵，别废话了！就只有#b50只风独眼兽#k啊！", 36, 1531003)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("我困了哟~我困了哟~", 36, 1531027, false, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face0#好吧，好好睡吧。\r\n#b(捕猎50只风独眼兽后，回到扎洛那里。)#k", 36, 1531003, true, true)
                            } else {
                                if (status === b++) {
                                    cm.forceStartQuest(22761, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22761.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("用什么来做感谢的礼物呢？\r\n就是这个咯！\r\n\r\n#b#i1040020# #t1040020#", 36, 1531027, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("好像莫名其妙地很有自信嘛。", 36, a, true, true)
            } else {
                if (status === b++) {
                    cm.forceCompleteQuest(22761);
                    cm.gainExp(9300);
                    cm.gainItem(1040020, 1);
                    cm.dispose()
                }
            }
        }
    }
};