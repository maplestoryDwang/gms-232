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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32734.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            1530547;
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_ForcedFlip10(2, 16);
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我得赶快把……这里的灰尘清理干净才行。", 57, 1530547, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("等等，等等！", 37, 1530300, true, true)
                    } else {
                        if (status === a++) {
                            cm.npc_ChangeController(1530300, "oid=20709573", 750, -2015, 43, 700, 800, 0, true, false);
                            cm.npc_SetSpecialAction("oid=20709573", "summon", 0, 0);
                            cm.npc_ChangeController(1530310, "oid=20709574", 1100, -2015, 42, 1050, 1150, 1, true, false);
                            cm.npc_SetSpecialAction("oid=20709574", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("哎呀，你！干嘛要把自己身上弄脏呢？这点活让我们来干就行了！", 37, 1530300, false, true)
                            } else {
                                if (status === a++) {
                                    cm.npc_SetForceMove("oid=20709573", 1, 100, 100);
                                    cm.npc_SetForceMove("oid=20709574", -1, 50, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(2500)
                                } else {
                                    if (status === a++) {
                                        cm.npc_SetSpecialAction("oid=20709573", "cleaning", -1, 1);
                                        cm.npc_SetSpecialAction("oid=20709574", "cleaning", -1, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === a++) {
                                            cm.setNpcSpecialActionReset("oid=20709573");
                                            cm.setNpcSpecialActionReset("oid=20709574");
                                            cm.sendNormalTalk_Bottom("我听说了。你就是那个传说中的命运之转学生吧？以后请多多关照啊~！哈哈哈。", 37, 1530310, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_LeaveField("oid=20709573");
                                                cm.npc_LeaveField("oid=20709573");
                                                cm.npc_LeaveField("oid=20709574");
                                                cm.npc_LeaveField("oid=20709574");
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam")
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("我本想尽量低调行事的……这样下去可不行啊。所有人都在关注我呢！", 57, 1530547, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_ForcedFlip(0);
                                                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.forceCompleteQuest(32734);
                                                        cm.setNumberForQuestInfo(32759, "4f", 1);
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
            }
        }
    }
};