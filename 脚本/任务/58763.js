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
            cm.sendNormalTalk_Bottom("泉奈，这附近有没有地方可以弄到岩石？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#狐狸崖周围全是石头啊……？", 37, 9111007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不不，我需要的是可以用于训练的岩石，表面要平坦，大小适中。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#嗯……我想到个地方，不知道合不合#h0#你心意。\r\n你从这里右转走下去，能看到一些石堆。", 37, 9111007, true, true)
                    } else {
                        if (status === a++) {
                            cm.curNodeEventEnd(true);
                            cm.eventSKill(0);
                            cm.setInGameDirectionMode(true, false, true);
                            cm.cameraSwitch_PushSwitchMoveInfo("pt_rockfox", 3000);
                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                            } else {
                                if (status === a++) {
                                    cm.eventSKill(0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.sendNormalTalk_Bottom("知道了！我去去就回！", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(58763, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58763.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("呼，岩石都收集来了。\r\n你快帮我把狐妖都召集过来。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#是！", 37, 9111007, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(58763);
                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
                    cm.curNodeEventEnd(true);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.npc_ChangeController(9111060, "oid=3865634", 820, -40, 5, 770, 870, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=3865634", "summon", 0, 0);
                    cm.npc_ChangeController(9111061, "oid=3865635", 330, -40, 15, 280, 380, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=3865635", "summon", 0, 0);
                    cm.npc_ChangeController(9111060, "oid=3865636", 240, -40, 16, 190, 290, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=3865636", "summon", 0, 0);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                    cm.gainItem(4034873, -30);
                    cm.gainItem(3700358, 1)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我办到了！！", 37, 9111060, false, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                cm.sendNormalTalk_Bottom("#face0#守护者！多亏了你，我变得好厉害！", 37, 9111060, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯，干得好！真聪明！", 57, 0, true, true);
                                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3")
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#喔噢噢！守护者表扬我啦！", 37, 9111060, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#哇啊啊……好羡慕……", 37, 9111061, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#我也要用心训练，变成像守护者一样了不起的狐妖！", 37, 9111060, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#守护者你看我跳得好吗！这水平的话，可以当你的左膀右臂了吧？", 37, 9111060, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我跳得才叫好！我跳得更漂亮！！！！", 37, 9111061, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#对了，守护者，这技能的名称叫什么？", 37, 9111060, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                cm.askMenu_Bottom("哦？嗯……啊……（叫什么来着……？)\r\n#b#L0#翻身亮相狐步舞#l\r\n#L1#真·狐狸奥义狐步舞#l", 37, 9111060)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#噢噢！狐步舞！！！！", 37, 9111061, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#噢噢噢！！好帅！", 37, 9111060, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#咔……这名字酷毙了！", 37, 9111061, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                cm.npc_LeaveField("oid=3865634");
                                                                                cm.npc_LeaveField("oid=3865634");
                                                                                cm.npc_LeaveField("oid=3865635");
                                                                                cm.npc_LeaveField("oid=3865635");
                                                                                cm.npc_LeaveField("oid=3865636");
                                                                                cm.npc_LeaveField("oid=3865636");
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
                        }
                    }
                }
            }
        }
    }
};