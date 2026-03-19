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
            if (!cm.haveItem(4034868, 5)) {
                cm.sendNormalTalk_Bottom("#face0#(……还没摘够5根黄瓜，不能就这样离开……)", 37, 9111035, false, true);
                cm.dispose();
                return
            }
            cm.forceCompleteQuest(58777);
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.npc_ChangeController(9111037, "oid=3900320", 1055, -60, 80, 1005, 1105, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=3900320", "summon", 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
            cm.gainItem(4034868, -5)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                        cm.sendNormalTalk_Bottom("#face0#……求求你，救救我……", 37, 9111037, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#你怎么了？", 37, 9111035, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#……我已经四天半没吃过任何东西了……\r\n森林里的食物都被人类挖走了，我没有东西吃……", 37, 9111037, true, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak")
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#(……这黄瓜是要用来祭祀的，可生命比一切都更珍贵……！)", 37, 9111035, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_ForcedFlip10(1, 50);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#河童，这个给你吃吧。", 37, 9111035, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_LeaveField("oid=3900320");
                                                        cm.npc_LeaveField("oid=3900320");
                                                        cm.warp(800024004, 0, true);
                                                        cm.eventSKill(0);
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
            }
        }
    }
};