var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
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
        if (status === a++) {
            if (cm.isQuestActive(58779)) {
                cm.dispose();
                return
            }
            cm.forceStartQuest(58779, "");
            cm.updateInfoQuest(58779, "firstEnter=0");
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.npc_ChangeController(9111017, "oid=3905531", 675, -35, 66, 625, 725, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=3905531", "summon", 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#p9111008#！", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#……很好。不过还有最后的试炼。", 37, 9111017, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("天狗！不要再让我做什么试炼了！我着急要把五行带给竹野子！", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#我知道。", 37, 9111017, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("知道的话就快把五行给我！\r\n我已经通过了执着试炼和烦恼试炼，我具备你所说的资格。", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#……五行……带有极其强大的力量。因此有许多觊觎者想得到它。\r\n不管是木野子也好，你也好，区区人类的躯体，是无法守护五行的。", 37, 9111017, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#这是最后的试炼了。", 37, 9111017, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#……我要亲自确认你是否真的可以守护五行！", 37, 9111017, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3")
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.npc_SetSpecialAction("oid=3905531", "morph", 0, 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3720)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.npc_LeaveField("oid=3905531");
                                                                                    cm.npc_LeaveField("oid=3905531");
                                                                                    cm.eventSKill(0);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.spawnMobLimit(9400080, 1, 580, 58, 100);
                                                                                    cm.addPopupSay(9111018, 2500, "#face0#天狗殿下是绝对无敌的存在,普通攻击对他是没用的！当他靠近地面时找到弱点后攻击!", "", 0);
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
                            }
                        }
                    }
                }
            }
        }
    }
};