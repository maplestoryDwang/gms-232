function enter() {
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.addPopupSay(9201537, 2000, "这当然是意味着你的这位朋友是1000年前的人啦。", "", 0);
            cm.inGameDirectionEvent_AskAnswerTime(7200)
        } else {
            if (status === a++) {
                cm.addPopupSay(9201537, 2000, "这我还真猜不到！", "", 0);
                cm.inGameDirectionEvent_AskAnswerTime(5200)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那……我现在在哪？", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.addPopupSay(9201537, 2000, "不知道。\r\n看着像是个森林。", "", 0);
                        cm.inGameDirectionEvent_AskAnswerTime(5200)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("是啊，这我看得出来，教授。", 57, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.eventSKill(0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.updateInfoQuest(27038, "itemid=0");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};