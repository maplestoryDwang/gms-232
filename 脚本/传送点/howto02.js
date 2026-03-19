function enter() {
    var a = 2;
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
                cm.sendNormalTalk_Bottom("啊，那上面还有一个。", 37, 1540500, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你要怎么上去呢？\r\n奥尔卡会飞。\r\n你会吗？", 37, 1540500, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你跳一跳吧。\r\n连这些小亮光都能漂浮在空中，你肯定也能飞起来的。", 37, 1540500, true, true)
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
    }
};