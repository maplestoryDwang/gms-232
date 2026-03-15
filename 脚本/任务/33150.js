var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("队长，你做好准备了吗？能和你一起战斗我很荣幸。\r\n我已经从希纳斯女皇那里听说了，你的实力十分出众。", 37, 1540503, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我来介绍一下自己吧。我叫德皮。\r\n刚刚跳下去的是我的大哥古皮，还有我的小妹莉皮。", 37, 1540503, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b布吉#k肯定会平安无事的。\r\n为此，我们来到了这个地方，而且还有队长率领着我们。", 37, 1540503, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("好了，我们先热热身吧？\r\n我会先跳下去，队长你准备好之后，就跳下来吧！", 37, 1540503, true, true)
                    } else {
                        if (status === a++) {
                            cm.npc_setForceFlip("oid=12962417", 1);
                            cm.inGameDirectionEvent_AskAnswerTime(100)
                        } else {
                            if (status === a++) {
                                cm.npc_SetForceMove("oid=12962417", 1, 350, 300);
                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                            } else {
                                if (status === a++) {
                                    cm.npc_SetSpecialAction("oid=12962417", "spin", -1, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    cm.effect_Voice("Weapon.img/spear/Attack", 100)
                                } else {
                                    if (status === a++) {
                                        cm.npc_LeaveField("oid=12962417");
                                        cm.npc_LeaveField("oid=12962417");
                                        cm.forceCompleteQuest(33150);
                                        cm.setInGameDirectionMode(false, true, false);
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
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {} else {
            cm.dispose()
        }
    }
};