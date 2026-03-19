function enter() {
    var a = 7;
    if (cm.getNumberFromQuestInfo(33142, "howto") < a) {
        cm.setNumberForQuestInfo(33142, "howto", a);
        cm.openScriptNpc()
    }
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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(600)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哎呀，这个是！我知道。你要按照顺序进行攻击。", 37, 1540500, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这个共有7个颜色。或许是彩虹。\r\n必须按照彩虹的顺序进行攻击。", 37, 1540500, true, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(600)
                    } else {
                        if (status === a++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};