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
            cm.sendNormalTalk_Bottom("#face0#东西进入#b黑市#k了。", 37, 3004000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那么去黑市吗？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#不去，在这之前我还有一个人要见。去#b垃圾山#k吧！", 36, 3004000)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(37100, "31=h0;50=h1;32=h0;33=h1;dir=off;35=h1;36=h1;37=h1");
                        cm.forceStartQuest(37107, "");
                        cm.updateInfoQuest(37107, "");
                        cm.OnStartNavigation(402000100, 0, "", 0);
                        cm.dispose()
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.npc_ChangeController(3004000, "oid=7105484", 235, 775, 30, 185, 285, 1, true, false);
            cm.npc_SetSpecialAction("oid=7105484", "summon", 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 350, 775);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 250, 780)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#终于开始了啊！", 37, 3001259, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#算是吧！好久没碰到这么有意思的事情了。", 37, 3004000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#你这次又打算去招惹哪位恶人？\r\n你应该知道吧？只要听到你的名字就气得牙痒痒的人可不是一个两个。", 37, 3001259, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#呼，侦探解决问题肯定会和恶人结怨。", 37, 3004000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#所以让你别当侦探了。", 37, 3001259, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#哈哈，还有件更重要的事要拜托你……", 37, 3004000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#拜托？应该是委托吧！赔本的买卖我可是不会做的。", 37, 3001259, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#那么就委托吧！", 37, 3004000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#必须找出是谁欺骗了这位朋友，让他发射了导弹。\r\n帮我追踪#b改造无证局面的拉宝拉托利安#k。", 37, 3004000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#无证？……这里是荒蛮终点站。\r\n有证的物品肯定是寥寥无几。", 37, 3001259, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#应该是的。", 37, 3004000, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#我要疯了，真的……", 37, 3001259, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#那么，麻烦你了。", 37, 3004000, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#等一下，听说你找的是公司的东西？……真的吗？", 37, 3001259, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#可能是，也可能不是。", 37, 3004000, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3001259, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#只希望这不是真的。", 37, 3001259, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.npc_setForceFlip("oid=7105484", 1);
                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.setStandAloneMode(false);
                                                                                                            cm.sendNormalTalk_Bottom("#face0#走吧！现在得去见见黑市的#b佩隆#k了。", 37, 3004000, false, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.npc_LeaveField("oid=7105484");
                                                                                                                cm.npc_LeaveField("oid=7105484");
                                                                                                                cm.updateInfoQuest(37107, "dir=on;NpcSpeech=30012191");
                                                                                                                cm.OnStartNavigation(402000200, 0, "", 0);
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
            cm.sendNormalTalk_Bottom("#face0#喂，佩隆，忙吗？", 36, 3004000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#黑鸦？切，碍眼的家伙又增加了一个。", 36, 3004006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#来了什么不错的东西吗？", 36, 3004000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#你以为我才被你骗了一次两次吗？你以为我不知道你想从我这儿套走什么消息吗？", 36, 3004006, true, true)
                    } else {
                        if (status === a++) {
                            cm.gainExp(9487412);
                            cm.forceCompleteQuest(37107);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};