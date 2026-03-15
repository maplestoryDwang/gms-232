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
            cm.forceStartQuest(32339, "");
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32339.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("这座桥好像非常适合。要把布告设置在这里吗？", 2, 1520045)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("该写点什么呢？先写上名字 幻影……然后呢……？", 3, 1520045, false, true)
            } else {
                if (status === a++) {
                    cm.askMenu("写什么呢？\r\n#b#L0# 出来吧。#l\r\n#b#L1# 出来。#l", 1, 1520045)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32373, "A");
                        cm.sendNormalTalk("很好，“幻影,出来吧。”写好了。现在挂上布告，等待幻影到来吧。", 3, 1520045, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("圣地的女皇为什么带着这种东西呢？神秘……。", 3, 1520045, true, false)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(32339);
                                cm.gainExp(150000);
                                cm.gainItem(4033900, -1);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};