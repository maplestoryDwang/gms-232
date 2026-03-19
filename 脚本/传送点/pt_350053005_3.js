function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("你在说谎吧？", 37, 1540490, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("又搞什么啊？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你在说谎。你肯定看到了什么。\r\n在我的记忆里。", 37, 1540490, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("…………", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(33236, "start=0;done=1");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};