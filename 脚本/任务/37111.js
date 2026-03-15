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
            cm.sendNormalTalk_Bottom("#face0#绝对不行！！", 36, 3001258, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#之前用的铁板都被#b危险的河狸#k偷走了，\r\n这些也得立刻找回来才是。", 36, 3001258, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那……从河狸那里找回了铁板呢？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#嗯……这没什么……但是必须得赶紧找回来。20个……不对，50个，怎么样？\r\n\r\n#b（领取时，立刻前往区域。）", 36, 3001258)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#好的，我立刻把你送去#b危险的黑市小巷3#k。", 36, 3001258, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(37111, "");
                                cm.dispose();
                                cm.warp(402000224, 0)
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#这是什么呀，弄得佩隆那个样子？看着和普通铁板没两样嘛……。", 36, 3001258, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#不管怎么样都答应别人了。", 36, 3001258, true, true)
            } else {
                if (status === a++) {
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.setStandAloneMode(true);
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 594, -36);
                    cm.npc_ChangeController(3004000, "oid=7121431", 689, -30, 70, 639, 739, 1, true, false);
                    cm.npc_SetSpecialAction("oid=7121431", "summon", 0, 0);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                    cm.npc_LeaveField("oid=62109");
                    cm.npc_LeaveField("oid=62110")
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#组合起来会花点时间的。", 37, 3004006, false, true)
                        } else {
                            if (status === a++) {
                                cm.npc_setForceFlip("oid=7121431", -1);
                                cm.sendNormalTalk_Bottom("#face0#那么，我们先去别的地方看看吧！", 37, 3004000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("哪里？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#（叽叽咕咕）我们得制定个计划，偷偷地把豪华观光团的少女给救出来才是。", 37, 3004000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#图鲁和佩隆是绝对不会把东西交出来的。", 37, 3004000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("（你为什么这么帮我？）", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#必须悄悄把「黑鸦侦探的案件日志第2季」拿出来。", 37, 3004000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("哈哈……。", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.updateInfoQuest(37117, "dir=on");
                                                            cm.gainExp(28462236);
                                                            cm.dispose();
                                                            cm.warp(402000003, 0)
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