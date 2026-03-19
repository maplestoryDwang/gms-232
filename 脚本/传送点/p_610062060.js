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
            cm.sendNormalTalk_Bottom("卢——卢坎！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.npc_ChangeController(9201536, "oid=2666293", 146, 97, 9, 96, 196, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=2666293", "summon", 0, 0);
                cm.npc_SetForceMove("oid=2666293", 1, 550, 200);
                cm.inGameDirectionEvent_AskAnswerTime(5200)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                    cm.effect_NormalSpeechBalloon("!!", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9201536, null, cm.getPlayer().getId())
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1200, 180)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.npc_SetForceMove("oid=2666293", 1, 200, 200);
                                cm.inGameDirectionEvent_AskAnswerTime(4200)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#……不。\r\n哦不！", 37, 9201536, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#这是封印……纳——纳瑞坎！", 37, 9201536, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("好吧，我乌鸦嘴了。该死。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_setForceFlip("oid=2666293", -1);
                                                cm.sendNormalTalk_Bottom("苏巴尼的封印几乎不见了。怎么会这样？", 37, 9201536, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("等下，幻日不是在一千年之前就被摧毁了吗？所以说，就算他逃出来，应该也翻不了浪……吧？", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("我不知道这东西是什么，但它让我觉得纳瑞坎“翻得了浪”。", 37, 9201536, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("我也不知道这是啥。", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("我担心的并不是这个装置，你看上面。", 37, 9201536, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("这就是那块丢失的幻日碎片。纳瑞坎拥有的那块。", 37, 9201536, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("到底是谁用这块碎片造出了这个……东西？有人在帮纳瑞坎吗？", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("我极度希望不是如此，但我有不祥的预感。很难想象会有人去帮助那个怪物……也很难想象他们会为此做出什么事来。", 37, 9201536, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("我们现在唯一的选择就是找到他，阻止他和纳瑞坎了。", 37, 9201536, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("或许，只有这样，绯红之心和我的兄弟们才能安息吧。", 37, 9201536, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("那就赶紧开始了！\r\n不过让我先看看这附近还有没有其他的线索。", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.eventSKill(0);
                                                                                            cm.warp(610062070, 0, true);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.npc_LeaveField("oid=2665343");
                                                                                            cm.npc_LeaveField("oid=2666293");
                                                                                            cm.npc_LeaveField("oid=2666293");
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
        }
    }
};