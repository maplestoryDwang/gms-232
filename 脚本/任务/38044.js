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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.sendNormalTalk("(从水源盛来了清澈的水。)", 0, 1033220, false, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.updateInfoQuest(38044, "NpcSpeech=10332201");
                cm.gainItem(4034075, 1)
            }
        }
    }
}

function stage1(d, c, b) {
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
            cm.sendNormalTalk("(将#r#t4034075##k撒向了缪奈。)", 0, 2159476, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(38044, "NpcSpeech=10332201/21594763");
                cm.forceStartQuest(38904, "2");
                cm.sendNormalTalk("迪特！洛雅！克雷斯老师！呃呃？为什么又都变回了冰块？就在刚刚还和我一起玩呢…………", 0, 2159476, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.sendNormalTalk("是梦吗？真的都是梦吗？那么我又只能一个人玩了？", 0, 2159476, true, false)
                }
            }
        }
    }
}

function stage2(d, c, b) {
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
            cm.sendNormalTalk("(将#r#t4034075##k撒向了阿斯迪拉。)", 0, 2159472, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(38044, "NpcSpeech=10332201/21594763/21594724");
                cm.forceStartQuest(38904, "3");
                cm.sendNormalTalk("啊啊…………什么都不用担心。双弩精灵，我…………不，大家应该是去什么地方了？", 0, 2159472, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("梦？好吧…………我就知道会这样。不过能在梦里见到大家也是很幸福的。", 0, 2159472, true, false);
                    cm.dispos()
                }
            }
        }
    }
}

function stage3(d, c, b) {
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
            cm.sendNormalTalk("(将#r#t4034075##k撒向迪纳卡。)", 0, 2159471, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(38044, "NpcSpeech=10332201/21594763/21594724/21594715");
                cm.forceStartQuest(38904, "4");
                cm.sendNormalTalk("赫尔梅斯！别光顾着唱歌，来帮帮我吧。阿蒂、伊托斯你们也过来…………呃，呃？都去哪儿了？", 0, 2159471, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("什么？这一切都是梦？啊…………真是太可惜了…………", 0, 2159471, true, false);
                    cm.dispose()
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