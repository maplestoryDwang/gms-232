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
            cm.sendNormalTalk_Bottom("#face0#据说在那浓雾之中出现了可疑的敌人。\r\n调查一下的话应该就能知道关于浓雾的事情了。", 36, 3003651, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0##b#ho##k，请你现在去甲板上调查敌人。\r\n你能做到吗？", 36, 3003651)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#好的，那就请你从#r极思之境#k甲板上出现的\r\n#b#o8644622##k和#b#o8644623##k那里找到#b50个#i4036446# #t4036446##k吧。", 36, 3003651, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(35612, "");
                        cm.OnStartNavigation(450009110, 0, "", 0);
                        cm.npc_LeaveField("oid=50580");
                        cm.npc_LeaveField("oid=50581");
                        cm.npc_LeaveField("oid=50586");
                        cm.npc_LeaveField("oid=50585");
                        cm.npc_LeaveField("oid=50590");
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
            cm.dispose();
            cm.removeAll(4036446);
            cm.warp(993060075, 0, false)
        }
    }
};