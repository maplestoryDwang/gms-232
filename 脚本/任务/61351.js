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
            cm.sendNormalTalk_Bottom("所以说！\r\n你们这是新老战士组合？", 37, 9201537, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("如果求救的人就是你的话，\r\n那我还真有可能有法子帮你。", 37, 9201537, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你确定？我们才刚——", 57, 9201537, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我当然确定！\r\n我可是狐智教授！", 37, 9201537, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("新叶城的天才科学家！\r\n#b艾斯拜德·斯利姆市长#k最信赖的顾问！", 37, 9201537, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("请告诉我，你是如何听到我的声音的？\r\n我的讯息应该只会被拥有强大精神力的战士听到才对。", 37, 9201536, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("难道你也是和#h0#一般强大的战士吗？", 37, 9201536, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("恐怕并不是，来自古代的朋友！", 37, 9201537, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("我是一名教授。\r\n不像你们，我既不会战斗技巧也不会魔法，\r\n但我拥有超乎常人的智力。", 37, 9201537, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("我能听到你的声音是因为我用了某种\r\n高科技道具。", 37, 9201537, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("我一直监听着克拉齐亚所有波段的信息。", 37, 9201537, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("之前超自然波段出现异常，\r\n于是我调整了一番，就收到了你的讯息。", 37, 9201537, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("这种求救讯号我可不能放着不管，\r\n于是就来到了这里，为你效劳！", 37, 9201537, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("但……你这样的人该如何帮助我呢？\r\n科技又是什么东西？", 37, 9201536, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("能够与利刃和魔咒相提并论的存在？", 37, 9201536, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("……你是怎么知道科技是什么的？\r\n你到底是从哪来的，卢坎？", 57, 9201537, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("听上去像是失忆症。", 37, 9201537, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("你运气不错，我正好有能够让你\r\n找回记忆的道具。", 37, 9201537, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.userSetFieldFloating(610061210, 0, 5, 10);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("这里太危险了。\r\n我们先到我建在这附近的秘密实验室再谈吧。", 37, 9201537, false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_PushMoveInfo(0, 800, -1300, 150)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2348)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1350, 150)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.forceCompleteQuest(61351);
                                                                                                                            cm.eventSKill(0);
                                                                                                                            cm.warp(610061220, 0, false);
                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                            cm.npc_LeaveField("oid=2824420");
                                                                                                                            cm.npc_LeaveField("oid=2824420");
                                                                                                                            cm.dispose();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/61351.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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