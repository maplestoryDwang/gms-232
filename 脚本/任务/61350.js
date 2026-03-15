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
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.inGameDirectionEvent_AskAnswerTime(1200)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 400, -1150, 250)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1553)
                    } else {
                        if (status === a++) {
                            cm.npc_ChangeController(9201556, "oid=2813520", -1345, 160, 13, -1395, -1295, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2813520", "summon", 0, 0);
                            cm.npc_ChangeController(9201556, "oid=2813521", -1255, -160, 27, -1305, -1205, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2813521", "summon", 0, 0);
                            cm.npc_ChangeController(9201556, "oid=2813522", -1100, -339, 35, -1150, -1050, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2813522", "summon", 0, 0);
                            cm.npc_ChangeController(9201556, "oid=2813523", -1050, -339, 49, -1100, -1000, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2813523", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                    cm.sendNormalTalk_Bottom("有怪物！他有危险！", 57, 9201536, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                    } else {
                                        if (status === a++) {
                                            cm.warp(610061110, 0, false);
                                            cm.forceStartQuest(61350, "");
                                            cm.playerMessage(5, "时间结束前抵挡住怪物的攻击。");
                                            cm.eventSKill(0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.npc_LeaveField("oid=2812784");
                                            cm.npc_LeaveField("oid=2812784");
                                            cm.npc_LeaveField("oid=2813520");
                                            cm.npc_LeaveField("oid=2813520");
                                            cm.npc_LeaveField("oid=2813521");
                                            cm.npc_LeaveField("oid=2813521");
                                            cm.npc_LeaveField("oid=2813522");
                                            cm.npc_LeaveField("oid=2813522");
                                            cm.npc_LeaveField("oid=2813523");
                                            cm.npc_LeaveField("oid=2813523");
                                            cm.dispose();
                                            cm.getPlayer().scheduleWarpTask(3 * 60, 610061100, 0)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/61350.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你没事吧？\r\n你就是联系我的那个人吗？", 57, 9201536, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#看来……你就是那个终于回应了我得呼唤的战士。\r\n多谢你的救命之恩。", 37, 9201536, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("这说法……有点儿古怪，不过没错。", 57, 9201536, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("出什么事了？\r\n你是怎么受伤的？", 57, 9201536, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("战士啊，不必为我的小伤操心。", 37, 9201536, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("先告诉我，我现在在哪？", 37, 9201536, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("这里是#b克拉齐亚#k。\r\n算不上什么度假胜地。", 57, 9201536, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("克拉齐亚？我怎么从来没听说过。\r\n醒来的时候就发现自己在这儿了，怎么来的都不记得。", 37, 9201536, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("你从来没听说过？\r\n这儿挺有名的其实……在海底呆了1000多年，最近才被某种神秘的力量升到海面上来……", 57, 9201536, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("我脑子快糊涂了……\r\n我都不记得是从哪到这儿来的。", 37, 9201536, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("是新叶都市吗？还是幽影森林？\r\n你对这两个地方有印象吗？", 57, 9201536, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("不……完全没有。\r\n我真的是完全没有头绪，莫名其妙就到这里了。", 37, 9201536, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("我的同僚还需要我……我的将军肯定用得上我！", 37, 9201536, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#我必须回去才行。请你告诉我该怎么回去吧！", 37, 9201536, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("这个嘛……首先傻站在这儿肯定是回不去的。", 57, 9201536, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("我们先回新叶都市好了，顺便在那儿看看有没有人能治疗你的失忆。", 57, 9201536, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#听你的。\r\n带路吧，战士。*咳嗽*", 37, 9201536, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("通往新叶都市的路上可全是怪物。\r\n你能行吗？毕竟受着伤。", 57, 9201536, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#我的身体依旧强韧，我的灵魂依旧不屈。", 37, 9201536, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("帅。别太勉强自己就行。", 57, 9201536, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("慢着！\r\n你是我的救命恩人，我却连你的名字都不知道……", 37, 9201536, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("噢，对！我叫#h0#。", 57, 9201536, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("而且说实话，这儿的人都愿意帮助你的。\r\n他们都是好人。好了，出发去新叶都市吧。", 57, 9201536, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.forceCompleteQuest(61350);
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                                cm.updateInfoQuest(61368, "1=1;2=1");
                                                                                                                cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                                cm.eventSKill(0);
                                                                                                                cm.warp(610061130, 0, true);
                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                cm.npc_LeaveField("oid=2818890");
                                                                                                                cm.npc_LeaveField("oid=2818890");
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
};