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
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.addPopupSay(9201537, 2000, "小心！\r\n有个记忆尘埃朝你过来了！", "", 0);
                cm.inGameDirectionEvent_AskAnswerTime(4200)
            } else {
                if (status === a++) {
                    cm.npc_ChangeController(9201557, "oid=2839344", -1030, 200, 11, -1080, -980, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2839344", "summon", 0, 0);
                    cm.npc_ChangeController(9201557, "oid=2839345", -1130, 200, 13, -1180, -1080, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2839345", "summon", 0, 0);
                    cm.npc_ChangeController(9201557, "oid=2839346", -1230, 200, 14, -1280, -1180, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2839346", "summon", 0, 0);
                    cm.npc_ChangeController(9201557, "oid=2839347", -980, 200, 11, -1030, -930, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2839347", "summon", 0, 0);
                    cm.npc_ChangeController(9201557, "oid=2839348", -800, 200, 9, -850, -750, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2839348", "summon", 0, 0);
                    cm.inGameDirectionEvent_PushMoveInfo(0, 200, -1123, 200)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(447)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushMoveInfo(0, 1800, 544, 118)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(928)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("记——记忆什么？", 57, 0, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.addPopupSay(9201537, 2000, "记忆尘埃，呃，这可以说是潜意识阅读装置的副作用吧。", "", 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(7200)
                                            } else {
                                                if (status === a++) {
                                                    cm.addPopupSay(9201537, 2000, "潜意识是非常敏感的……按理说不能像这样粗暴地直接阅读。", "", 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(7200)
                                                } else {
                                                    if (status === a++) {
                                                        cm.addPopupSay(9201537, 2000, "那些东西，就是大脑所自带的防御系统。", "", 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(7200)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.addPopupSay(9201537, 2000, "你想继续前进的话，恐怕得先击败它们了。", "", 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(7200)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("你为什么不早说？！", 57, 0, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.playerMessage(5, "你必须消灭所有怪兽才能前往下一区域。");
                                                                        cm.eventSKill(0);
                                                                        cm.dispose();
                                                                        cm.openNpc("克拉齐亚_第一幕_战斗3");
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.npc_LeaveField("oid=2839344");
                                                                        cm.npc_LeaveField("oid=2839345");
                                                                        cm.npc_LeaveField("oid=2839346");
                                                                        cm.npc_LeaveField("oid=2839347");
                                                                        cm.npc_LeaveField("oid=2839347");
                                                                        cm.npc_LeaveField("oid=2839348");
                                                                        cm.npc_LeaveField("oid=2839348")
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