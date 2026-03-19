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
            cm.addPopupSay(9201537, 2000, "我哪都没去啊！\r\n离开的人是你……", "", 0);
            cm.inGameDirectionEvent_AskAnswerTime(5200)
        } else {
            if (status === a++) {
                cm.addPopupSay(9201537, 2000, "我老天爷，你穿越到了1000年前！", "", 0);
                cm.inGameDirectionEvent_AskAnswerTime(5200)
            } else {
                if (status === a++) {
                    cm.addPopupSay(9201537, 2000, "我校准下显示器，好让我能看到你。", "", 0);
                    cm.inGameDirectionEvent_AskAnswerTime(5200)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("啥？1000年前？\r\n这到底怎么回事？", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.eventSKill(0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};