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

function action(c, b, a) {
    if (cm.getNumberFromQuestInfo(33226, "check1450") > 0) {
        action2(c, b, a)
    } else {
        action1(c, b, a)
    }
}

function action1(d, c, b) {
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
            cm.sendNormalTalk_Bottom("果然还是打不开。", 37, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我需要没有受损的安全芯片。我们去寻找其他路线吧。", 37, 1540451, true, true)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
}

function action2(d, c, b) {
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
            cm.inGameDirectionEvent_AskAnswerTime(1500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这出入证好像可以用。", 37, 1540451, false, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                } else {
                    if (status === a++) {
                        cm.npc_SetSpecialAction("oid=37137", "open", 3000, 1);
                        cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/elevator_open", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                    } else {
                        if (status === a++) {
                            cm.playerMessage(5, "开启升降机所使用的出入证已经完成自己的作用, 现在已报废. ");
                            cm.inGameDirectionEvent_AskAnswerTime(900);
                            cm.removeAll(4009324)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.warp(350051500, 0, true)
                            }
                        }
                    }
                }
            }
        }
    }
};