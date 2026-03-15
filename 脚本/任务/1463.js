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
            cm.sendNormalTalk("你来啦，陌生人。\r\n\r\n虽然你并不属于我们世界，但如果你愿意守护我们的世界，我肯定会尽全力帮助你的。", 4, 1540943, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("如果你想得到我的帮助，就向我证明你的力量和勇气。你能打败#r麦格纳斯#k吗？", 4, 1540943)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(1463, "");
                    cm.sendNormalTalk("相信你一定可以做到。\r\n\r\n#b（消灭任意难度的麦格纳斯1次，然后回来吧。）#k", 4, 1540943, false, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1462.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("你这么快就回来啦。你果然不是一般的强大。\r\n\r\n#b#i2435735:# #t2435735:# 1个", 4, 1540943, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(1463);
                cm.gainItem(2435735, 1);
                if (cm.haveItem(2435734) && cm.haveItem(2435735) && cm.haveItem(2435736)) {
                    cm.sendNormalTalk("见到了女神，集齐了3个神秘石。旁观者好像说他会重新联络我的…等等看他的消息吧。", 16, 0, true, false)
                } else {
                    var d = "通过了女神的考验，获得了神秘石。现在去找其他女神吧。\r\n";
                    if (!cm.haveItem(2435734)) {
                        d += "\r\n#b#p1540942##k : 射手村的#b#m100000201##k"
                    }
                    if (!cm.haveItem(2435735)) {
                        d += "\r\n#b#p1540943##k : 万神殿的#b#m400000001##k"
                    }
                    if (!cm.haveItem(2435736)) {
                        d += "\r\n#b#p1540943##k : 堕落世界树的#b#m105300000##k"
                    }
                    cm.sendNormalTalk(d, 16, 0, true, false)
                }
                cm.dispose()
            }
        }
    }
};