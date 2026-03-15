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
            cm.forceStartQuest(58764, "");
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("#face0##h0#，我很高兴看见狐妖们这么勤快修炼，\r\n可是也有些狐妖脚板受了伤，正嗷嗷叫疼呢。", 37, 9111007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("唔……这是个问题。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#这附近有个地方长着对狐妖很有疗效的药草。", 37, 9111007, true, true)
                } else {
                    if (status === a++) {
                        cm.cameraSwitch_PushSwitchMoveInfo("pt_herbfox", 3000);
                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你的意思是……", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#嗯呢，拜托你咯。", 37, 9111007, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("……知道了，我这就去。", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#对了！我听说那边会有来挖药草的人类出没，你多小心！", 37, 9111007, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("唔……我有不好的预感。", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58764.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(58764);
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
            cm.forceCompleteQuest(58764);
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.npc_ChangeController(9111060, "oid=3867533", 820, -40, 5, 770, 870, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=3867533", "summon", 0, 0);
            cm.npc_ChangeController(9111061, "oid=3867534", 330, -40, 15, 280, 380, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=3867534", "summon", 0, 0);
            cm.npc_ChangeController(9111060, "oid=3867535", 240, -40, 16, 190, 290, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=3867535", "summon", 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
            cm.gainItem(4034874, -1);
            cm.gainItem(3700359, 1)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗬！被治好的感觉好棒！脚板舒服得好像要飞起来啦！", 37, 9111060, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#疼痛消失得一干二净呢！！", 37, 9111061, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#呜呜呜！太感动啦！！！！！！", 37, 9111060, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#噢噢！真不愧是守护者！你是我们真正的领袖！", 37, 9111061, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#呜呜，守护者你居然还亲自为我们找来了药草……我太崇拜你啦！", 37, 9111060, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#守护者，我可以叫你老大吗？", 37, 9111061, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("哈哈，好！以后你们就叫我狐狸领袖！", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#哇啊！狐狸领袖最棒~！！", 37, 9111060, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_LeaveField("oid=3867533");
                                                    cm.npc_LeaveField("oid=3867533");
                                                    cm.npc_LeaveField("oid=3867534");
                                                    cm.npc_LeaveField("oid=3867534");
                                                    cm.npc_LeaveField("oid=3867535");
                                                    cm.npc_LeaveField("oid=3867535");
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
};