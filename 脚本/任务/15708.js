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
            cm.sendNormalTalk("如果你能在一周内#b净化世界树5次以上#k，我就认可你的能力，把#i4001868:# #b#t4001868##k送给你作为#r报答#k。", 4, 1540895, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("你能帮我制止部下们的暴行，阻止世界树变得堕落吗？", 4, 1540895)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(15708, "");
                    cm.sendNormalTalk("那就拜托你了。", 5, 1540895, false, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
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
            cm.sendNormalTalk("你完成得比我预计的还要出色。", 4, 1540895, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("为了表示感谢，我想再送你一些礼物作为#r报答#k。", 4, 1540895, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(15708);
                    cm.sendNormalTalk("来，收下这个#i4001868:# #b#t4001868##k。感谢你把我的部下们从邪恶手中解救了出来。真的非常感谢……", 5, 1540895, true, false);
                    cm.gainItem(4001868, 2)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};