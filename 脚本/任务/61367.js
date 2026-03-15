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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.inGameDirectionEvent_AskAnswerTime(1200)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你真的没印象？", 37, 9201577, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("没印象，肯定是巧合。\r\n毕竟我的名字可烂大街了。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你……认真的？\r\n我怎么从没见过叫#h0#的人……", 37, 9201540, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("嘿！放尊重点。", 37, 9201577, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("抱——抱歉……！", 37, 9201540, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("没事。我已经习惯了！", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("抱歉打扰你。\r\n但……你要是想起了什么事……请务必来新叶都市找我。", 37, 9201577, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(61367);
                                                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                        cm.updateInfoQuest(61371, "10=1;11=1;12=1;1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                        cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.eventSKill(0);
                                                            cm.warp(610064530, 0, true);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.npc_LeaveField("oid=2761980");
                                                            cm.npc_LeaveField("oid=2761980");
                                                            cm.npc_LeaveField("oid=2761981");
                                                            cm.npc_LeaveField("oid=2761981");
                                                            cm.npc_LeaveField("oid=2761982");
                                                            cm.npc_LeaveField("oid=2761982");
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

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/61367.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};