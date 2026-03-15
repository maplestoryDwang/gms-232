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
            cm.sendNormalTalk_Bottom("#b（……也许巴特勒副团长说的没错。）", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b（但我已经选择了歇会儿再走，我得努力让人们在这段时间得以恢复，而不是陷入绝望。）", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b（先去收集些生火的树枝，还有能吃的肉吧。）", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.warp(867200802, 0, true);
                        cm.npc_LeaveField("oid=4245467");
                        cm.npc_LeaveField("oid=4245467");
                        cm.npc_LeaveField("oid=4245468");
                        cm.npc_LeaveField("oid=4245468");
                        cm.npc_LeaveField("oid=4245469");
                        cm.npc_LeaveField("oid=4245469");
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
            cm.sendNormalTalk_Bottom("#face0#都收集齐了！咱们快回去吧。", 37, 9400590, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(64030);
                cm.removeAll(4036372);
                cm.dispose();
                cm.warp(867200407, 1)
            }
        }
    }
};