var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNewEffects(17, [0, 1000, 2000, -250, 330])
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -350, 310);
                cm.forceStartQuest(64036, "");
                cm.npc_SetForceMove("oid=4245467", -1, 50, 50);
                cm.sendNormalTalk_Bottom("#face0##h0#……", 37, 9400581, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b好。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我承认，你是位有能力，又胆识过人的勇士，但你太缺乏经验了。", 37, 9400581, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#正如可汗村长身边有佩图尔那么优秀的顾问兼人生前辈，我觉得你也很需要一个可以毫不吝啬地给你忠告的建议者。", 37, 9400581, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#……你真觉得休息一下再走是明智的选择吗？", 37, 9400581, true, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b身后有暴风雪在追赶，四面八方还不知何时会有怪物来袭……我很明白这是个有风险的选择。", 57, 0, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b但正如艾丽卡所说，如果强行前进，将会有些太疲倦的人掉队。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#不，你错了。现在就应该强行前进。", 37, 9400581, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#在疲惫的情况下让他们有时间思考只会令他们更加绝望。", 37, 9400581, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face1#根本不要给他们时间和余裕去思考！你得让他们脑海中只想着“我得去下个村庄！”这一目标。", 37, 9400581, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#b这个方法或许对骑士们有效，可这些人大部分只是普通的村民啊。", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#我在成为骑士之前，也曾做过很长时间的佣兵，就像你一样。", 37, 9400581, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#换句话说，我跟这种普通百姓相处的时间比跟那些训练有素的骑士多得多。你不要忽视我的经验之谈。", 37, 9400581, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#很快你就会发现目前的选择是错误的，到时再后悔可就晚了。", 37, 9400581, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#b……谢谢你的忠告。", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#你要记住，谁才是给你提供所需建议和忠告的人。", 37, 9400581, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_setForceFlip("oid=4245467", 1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(250)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.npc_SetForceMove("oid=4245467", 1, 70, 100);
                                                                                                cm.sendNewEffects(14, [1000, 2000, 1000, 0, 0])
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.npc_setForceFlip("oid=4245467", -1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#啊-，还有一件事。你要是觉得担不起这个需要负责任的位置，随时可以让给我。", 37, 9400581, false, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.npc_setForceFlip("oid=4245467", 1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNewEffects(19, [1000])
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                    cm.forceCompleteQuest(64036);
                                                                                                                                    cm.updateInfoQuest(867200800, "2");
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