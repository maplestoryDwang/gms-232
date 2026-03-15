var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.npc_LeaveField("manager");
            cm.inGameDirectionEvent_AskAnswerTime(300)
        } else {
            if (status === b++) {
                var d = cm.getNumberFromQuestInfo(500767, "type");
                var a = 2;
                if (d == 2 || d == 6) {
                    a = 4
                } else {
                    if (d == 3) {
                        a = 3
                    } else {
                        if (d == 8 || d == 9 || d == 10) {
                            a = 7
                        }
                    }
                }
                cm.npc_ChangeController(9400929, "oid=18488529", -50, 100, a, -200, 200, 1, false, true);
                cm.npc_SetSpecialAction("oid=18488529", "summon", 0, 0);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 0, 0);
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.sendNewEffects(17, [0, 1000, 2000, -100, 150])
            } else {
                if (status === b++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === b++) {
                        cm.effect_Text(["#fn黑体##fs20#悠闲的一天……"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0]);
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === b++) {
                            var d = cm.getNumberFromQuestInfo(500767, "type");
                            var a = 2;
                            if (d == 2 || d == 6) {
                                a = 4
                            } else {
                                if (d == 3) {
                                    a = 3
                                } else {
                                    if (d == 8 || d == 9 || d == 10) {
                                        a = 7
                                    }
                                }
                            }
                            cm.npc_ChangeController(9400928, "oid=18488576", -280, 100, a, -330, -230, 0, true, false);
                            cm.npc_SetSpecialAction("oid=18488576", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === b++) {
                                cm.npc_SetForceMove("oid=18488576", 1, 120, 100);
                                cm.sendNormalTalk_Bottom("#face4#埃尔宾！！！！！！！！埃尔宾！埃尔宾埃尔宾！", 37, 9400920, false, true)
                            } else {
                                if (status === b++) {
                                    cm.npc_setForceFlip("oid=18488529", -1);
                                    cm.sendNormalTalk_Bottom("#face0#怎么了，艾米？冷静点，我给你倒点水吧？", 37, 9400921, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face4#不，我没事，你看看这个！是妈妈寄来的明信片！", 37, 9400920, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("#face3#……妈妈？她说什么了？他们在哪里？！", 37, 9400921, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("#face4#……我不想念出来，你自己看吧。", 37, 9400920, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                } else {
                                                    if (status === b++) {
                                                        cm.inGameDirectionEvent_Monologue("埃尔宾，艾米。我的宝贝们", 0)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.inGameDirectionEvent_Monologue("你们一定不能饿肚子。", 0)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.inGameDirectionEvent_Monologue("我要告诉你们超简单的3分钟做出汤的方法，嫌做饭麻烦的时候可以做哦。", 0)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.inGameDirectionEvent_Monologue(" 1. 在锅里放牛奶煮开。", 0)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.inGameDirectionEvent_Monologue(" 2. 煮开后放入盐和芝士，煮到完全涨开的时候。", 0)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.inGameDirectionEvent_Monologue(" 3. 好好装盘后就能吃了。", 1)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.sendNormalTalk_Bottom("#face3#这就……没了？", 37, 9400921, false, true)
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.sendNormalTalk_Bottom("#face4#嗯！这就没了！这像话吗？隔了一年多寄的信内容就是这些！", 37, 9400920, true, true)
                                                                                        } else {
                                                                                            if (status === b++) {
                                                                                                cm.sendNormalTalk_Bottom("#face4#而且一看就不好吃啊！真是奇怪了！", 37, 9400920, true, true)
                                                                                            } else {
                                                                                                if (status === b++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#我，现在就要去找爸爸妈妈。", 37, 9400920, true, true)
                                                                                                } else {
                                                                                                    if (status === b++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face3#……你知道他们在哪儿吗……", 37, 9400921, true, true)
                                                                                                    } else {
                                                                                                        if (status === b++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#你看看这个，明信片背面的照片！这不就是在景点卖的明信片吗？", 37, 9400920, true, true)
                                                                                                        } else {
                                                                                                            if (status === b++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#……我不知道啊。", 37, 9400921, true, true)
                                                                                                            } else {
                                                                                                                if (status === b++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#b我能看看吗？", 57, 0, true, true)
                                                                                                                } else {
                                                                                                                    if (status === b++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#啊！#h0#去过冒险岛世界的很多地方，你应该知道吧！你能看看吗？", 37, 9400921, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === b++) {
                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("0", "Effect/DirectionWz2.img/effect/myHome/2", 0, 900, 0, -80, 12, 4, 0);
                                                                                                                            cm.askMenu_Bottom("#b嗯……我觉得这里应该是……\r\n#b#L0# 明珠港\r\n#L1# 金海滩度假村\r\n#L2# 凯梅尔兹港", 57, 0)
                                                                                                                        } else {
                                                                                                                            if (status === b++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#你确定吗？！现在就能找到妈妈了？", 37, 9400920, false, true)
                                                                                                                            } else {
                                                                                                                                if (status === b++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#b……我也不是很确定，还是都去看看吧？从离这里近的地方开始找就可以了。", 57, 0, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === b++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#真的吗？你会和我们……一起去的吧？", 37, 9400921, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === b++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#b当然了！", 57, 0, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === b++) {
                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 300, 0, 0, 0, 0, 0);
                                                                                                                                                cm.askAcceptDecline_Bottom("#face2#谢谢，#h0#！别耽搁了，我们现在就出发吧！\r\n#r※ 你要开始[EP2。寻找父母]吗？\r\n n该任务为可以获得我的小屋建筑图纸的剧情任务，世界内的每个账号只能进行1次。在进行时不能变更角色，请慎重决定！", 37, 9400920)
                                                                                                                                            } else {
                                                                                                                                                if (status === b++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#b那首先去明珠港吧！", 57, 0, false, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === b++) {
                                                                                                                                                        cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                                                                                                                                    } else {
                                                                                                                                                        if (status === b++) {
                                                                                                                                                            cm.sendNewEffects(19, [0])
                                                                                                                                                        } else {
                                                                                                                                                            if (status === b++) {
                                                                                                                                                                cm.eventSKill(0);
                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                cm.npc_LeaveField("oid=18488529");
                                                                                                                                                                cm.npc_LeaveField("oid=18488576");
                                                                                                                                                                cm.dispose();
                                                                                                                                                                cm.forceStartQuest(500765, "");
                                                                                                                                                                cm.updateInfoQuest(64627, "enter=1");
                                                                                                                                                                cm.warp(104000000, 0)
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
            cm.sendNormalTalk_Bottom("#face0#哇………", 37, 9400920, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这些房屋和凯尼斯的房屋好像啊？", 37, 9400921, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#真的！哇，看那棵树！和明信片上面的树长得很像！", 37, 9400920, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b这里就是明珠港！这里有很有名的情报商人，要不要先去那里看看？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.OnStartNavigation(104000000, 0, "in03", 0);
                            cm.forceCompleteQuest(500765);
                            cm.updateInfoQuest(64627, "start=1;enter=1");
                            cm.updateInfoQuest(500765, "name=" + cm.getPlayer().getName());
                            cm.forceStartQuest(64627, "");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};