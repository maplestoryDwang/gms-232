var status = -1;
var selectionLog = [];
var npcs = [9400920, 9400921, 9401160];

function start(g, f, e) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = e;
    var d = -1;
    var c = cm.getNumberFromQuestInfo(500773, "manager");
    var b = npcs[c];
    if (status <= d++) {
        cm.dispose()
    } else {
        if (status == d++) {
            if (cm.getMapId() < 871200001 || cm.getMapId() > 871200150) {
                cm.sendOkS("得先回到我的小屋里才行。\r\n#b#r※ 在小屋里才能开启故事。");
                cm.dispose();
                return
            }
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
            cm.inGameDirectionEvent_AskAnswerTime(900)
        } else {
            if (status === d++) {
                var f = cm.getNumberFromQuestInfo(500767, "type");
                var a = 2;
                if (f == 2 || f == 6) {
                    a = 4
                } else {
                    if (f == 3) {
                        a = 3
                    } else {
                        if (f == 8 || f == 9 || f == 10) {
                            a = 7
                        }
                    }
                }
                cm.npc_LeaveField("manager");
                cm.npc_ChangeController(9400930, "oid=746598", -100, 140, a, -80, 20, 1, true, true);
                cm.npc_SetSpecialAction("oid=746598", "summon", 0, 0);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -300, 100);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.inGameDirectionEvent_MoveAction(2);
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === d++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.sendNewEffects(17, [0, 1000, 2000, -100, 150])
                } else {
                    if (status === d++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === d++) {
                            cm.effect_Text(["#fn黑体##fs20##e正值收获季节的某个秋日……"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0]);
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === d++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === d++) {
                                    cm.inGameDirectionEvent_ForcedFlip10(2, 50);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === d++) {
                                        cm.sendNormalTalk_Bottom("#face1##h0#，你回来了？今天秋高气爽，秋天真的到了啊。你看，南瓜都成熟了。", 37, b, false, true)
                                    } else {
                                        if (status === d++) {
                                            cm.sendNormalTalk_Bottom("#b这些南瓜黄澄澄的，一看就好吃。\r\n啊！对了，马上就到万圣节了！", 57, 0, true, true)
                                        } else {
                                            if (status === d++) {
                                                cm.sendNormalTalk_Bottom("#face1#万圣节？万圣节是什么？", 37, b, true, true)
                                            } else {
                                                if (status === d++) {
                                                    cm.sendNormalTalk_Bottom("#b……你们不是为了准备万圣节才买的南瓜吗……？", 57, 0, true, true)
                                                } else {
                                                    if (status === d++) {
                                                        cm.sendNormalTalk_Bottom("#face2#嗯……我去了趟市场，看见南瓜又大又便宜，就买了回来，打算晚上熬南瓜粥喝……你也想来一碗吗？", 37, b, true, true)
                                                    } else {
                                                        if (status === d++) {
                                                            cm.sendNormalTalk_Bottom("#b…(#b 你们该不会不知道万圣节吧？) ", 57, 0, true, true)
                                                        } else {
                                                            if (status === d++) {
                                                                cm.sendNormalTalk_Bottom("#b好呀，我喜欢南瓜粥。不过埃尔宾……你真的不知道万圣节吗？就是10月31日！", 57, 0, true, true)
                                                            } else {
                                                                if (status === d++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#嗯，我还是第一次听说。10月31日是很重要的日子吗？", 37, b, true, true)
                                                                } else {
                                                                    if (status === d++) {
                                                                        cm.sendNormalTalk_Bottom("#b那凯兰西亚也没有举办过万圣节派对吗？", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === d++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#没、没有吧？", 37, b, true, true)
                                                                        } else {
                                                                            if (status === d++) {
                                                                                cm.sendNormalTalk_Bottom("#b这可不行，我们要立刻召开居民大会！", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === d++) {
                                                                                    cm.askAcceptDecline_Bottom("#face3#现在就开？！\r\n#e#r※ 要开启[小屋万圣节趣事]吗？\r\n#n万圣节趣事的开放时间为2019年10月23日10点00分至2019年11月5日23点59分。\r\n该任务每个世界每个角色只能执行1次，剧情持续期间无法更换角色。在管理员菜单中初始化后，可以重新开启任务。", 37, b)
                                                                                } else {
                                                                                    if (status === d++) {
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.npc_LeaveField("oid=746471");
                                                                                        cm.npc_LeaveField("oid=746598");
                                                                                        cm.dispose();
                                                                                        cm.warp(871000022, 0)
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