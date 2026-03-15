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
            cm.npc_LeaveField("oid=201366");
            cm.npc_LeaveField("oid=201367");
            cm.npc_LeaveField("oid=4214299");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
            cm.effect_NormalSpeechBalloon("……我当然想所有人都救……可万一这样让大家都陷入危险……", 1, 0, 0, 2000, 9400587, cm.getPlayer().getId())
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(2500);
                cm.effect_NormalSpeechBalloon("你这是身为村长说的话吗？！得想办法啊！", 1, 0, 0, 2000, 9400589, cm.getPlayer().getId())
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                    cm.effect_NormalSpeechBalloon("……", 0, 0, 0, 2000, 9400587, cm.getPlayer().getId())
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                        cm.effect_NormalSpeechBalloon("在其他人面前你可千万别这么说。", 1, 0, 0, 2000, 9400589, cm.getPlayer().getId())
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#啊，#h0#。", 37, 9400589, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#……", 37, 9400587, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b怎么回事？有什么问题吗？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#啊……我们在讨论怎么带负伤者上路。", 37, 9400589, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#相信你也看到了，村里使用的大篷车全都被火烧毁，用不了了。", 37, 9400589, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b嗯……", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……把丢弃在村外的大篷车修理一下怎么样？时间来得及吗？", 37, 9400587, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#你说阿尔西拿来运皮革的那辆吗？那辆大篷车太小了，装行李都够呛……", 37, 9400589, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#b在修理的同时做些改造怎么样？至少首先让它能搭载负伤者。", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#虽不知能否来得及收集木材进行改造……但这的确是最佳的方法。", 37, 9400589, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#b我去收集木材。", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#噢！你愿意帮忙吗？", 37, 9400589, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#b是的。", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#刚才去过的后山，记得吧？", 37, 9400589, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#你去那里再收集50个木材，很抱歉老是给你添麻烦，#h0#。", 37, 9400589, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#b没事，我很快就回来。", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_ForcedFlip10(1, 100);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0##h0#！", 37, 9400587, false, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#……谢谢你。", 37, 9400587, false, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#b你太客气了。", 57, 0, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_ForcedFlip10(1, 300);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.warp(867200440, 0);
                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                    cm.forceStartQuest(64025, "");
                                                                                                                                    cm.npc_LeaveField("oid=4214298");
                                                                                                                                    cm.npc_LeaveField("oid=4214299");
                                                                                                                                    cm.npc_LeaveField("oid=4214300");
                                                                                                                                    cm.npc_LeaveField("oid=4214301");
                                                                                                                                    cm.npc_LeaveField("oid=4214301");
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
            cm.npc_ChangeController(9400588, "oid=3660659", 2530, 400, 41, 2480, 2580, 1, true, false);
            cm.npc_SetSpecialAction("oid=3660659", "summon", 0, 0);
            cm.npc_ChangeController(9400587, "oid=3660660", 390, 75, 55, 340, 440, 0, true, false);
            cm.npc_SetSpecialAction("oid=3660660", "summon", 0, 0);
            cm.npc_ChangeController(9400616, "oid=3660661", 525, 70, 27, 475, 575, 1, true, false);
            cm.npc_SetSpecialAction("oid=3660661", "summon", 0, 0);
            cm.sendNormalTalk_Bottom("#face0#你回来得正是时候，辛苦了！", 37, 9400589, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我把车上的雪清掉后，看着还不错，现在开始修理吧……", 37, 9400589, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#啊~~你在卡夫塔佩没有要带的行李吧？比如地契或者金器啥的。", 37, 9400589, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b……？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#……开玩笑的。我是想问你，要是现在不忙，能不能去巡视一下看村民们准备得怎么样。", 37, 9400589, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b啊……好的。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#多谢，那待会儿见。", 37, 9400589, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(64025);
                                        cm.forceStartQuest(64160, "down");
                                        cm.forceStartQuest(64166, "happy");
                                        cm.removeAll(4036395);
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
};