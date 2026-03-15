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
            cm.askAcceptDecline_Bottom("你好。你愿意到万神殿大神殿内部跟我聊聊吗？", 36, 3000003, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#克里昂？这名字我还是头一次听说，现在你没得选择，快去万神殿大神殿吧。", 37, 3001354, false, true, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34821, "");
                    cm.OnStartNavigation(400000001, 0, "", 34821);
                    cm.npc_LeaveField("oid=46478");
                    cm.npc_LeaveField("oid=46479");
                    cm.npc_LeaveField("oid=46487");
                    cm.npc_LeaveField("oid=46489");
                    cm.npc_LeaveField("oid=46508");
                    cm.npc_LeaveField("oid=46510");
                    cm.npc_LeaveField("oid=46520");
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
            cm.forceCompleteQuest(34821);
            cm.updateInfoQuest(34821, "exp=1");
            cm.updateInfoQuest(15710, "lasttime=19/12/09/09/18");
            cm.sendNormalTalk_Bottom("你，你来了啊。", 37, 3000003, false, true);
            cm.dispose();
            cm.getPlayer().levelUp()
        }
    }
};