function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。")
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.setPartner(0, 9400580, 0, 0);
            cm.setPartner(0, 9400595, 0, 0);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.npc_ChangeController(9400580, "oid=7605797", -372, 440, 1, -422, -322, 1, true, false);
            cm.npc_SetSpecialAction("oid=7605797", "summon", 0, 0);
            cm.npc_ChangeController(9400595, "oid=7605798", -245, 440, 1, -295, -195, 1, true, false);
            cm.npc_SetSpecialAction("oid=7605798", "summon", 0, 0);
            cm.Hidden_background("ribbon02", 1);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.npc_SetSpecialAction("oid=7605797", "ribbon", -1, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b艾丽卡？你在干什么？在太阳落山前得快点走啊。", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#等下，在森林里很容易迷路。在我们经过的路上做下标记会很有帮助的。", 37, 9400580, true, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.setNpcSpecialActionReset("oid=7605797");
                                cm.Hidden_background("ribbon03", 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#好了！现在可以出发了！", 37, 9400580, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.warp(867201340, 0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.npc_LeaveField("oid=7605797");
                                        cm.npc_LeaveField("oid=7605797");
                                        cm.npc_LeaveField("oid=7605798");
                                        cm.npc_LeaveField("oid=7605798");
                                        cm.dispose()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};