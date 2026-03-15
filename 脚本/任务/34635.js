var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status >= 0 && d == 0) {
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
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 505, -32);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.inGameDirectionEvent_AskAnswerTime(1000)
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
                        cm.sendNormalTalk_Bottom("#face1#报、报告书X-9记录了制造名为紫色死神的生物武器的相关情况。", 37, 3001251, false, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#应该说是一种注入生物能量的炸弹……跟活体实验也有关系。", 37, 3001251, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#哈，原来如此。贩卖武器，挑唆战争正是那些家伙的拿手好戏。", 37, 3001250, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#呃啊，我这有一个好消息，一个坏消息，你先听哪一个？", 37, 3001251, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#喂，卡德娜。你来挑吧。", 37, 3001250, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.askMenu_Bottom("#face0#啊，这事太复杂，我没太认真听。抱歉，总之我感觉……\r\n#L0# #b选择1：先听好消息。#l\r\n#L1# #b选择2：先听坏消息。#l", 37, 3001270, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#我想听好消息。这样心里能好受点。", 37, 3001270, false, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#好、好消息是终于知道Mr.哈扎尔为什么偏偏选中这个行星了。", 37, 3001251, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#根据报告书X-9记载，行星各处分布着制造紫色死神所需的武器部件。甚至连位置都十分详细。", 37, 3001251, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#各种东西流入行星。", 37, 3001250, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#呵呵，如今报告书在我们手上，如果能比他们抢先找到武器部件，就能阻止紫色死神诞生……", 37, 3001251, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#为什么要我们出面？我看还是趁早离开这吧？", 37, 3001270, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#昂，我这有一个坏消息。那、那个……那个……", 37, 3001251, false, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction19.img/effect/cadena_dir/4", 0, 900, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                                                                                cm.sendNormalTalk_Bottom("#face1#……紫色死神一旦降生，那行星就会被毁灭。", 37, 3001251, true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face5#……", 37, 3001270, true, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2#……", 37, 3001250, true, true, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#紫色死神是一种生物武器……爆炸时会释放剧毒……", 37, 3001251, true, true, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#服用那些试剂的生物体吐出的毒气更加致命。万一这种气体扩散到整个行星……", 37, 3001251, true, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face2#……我们支部被完全弃置了。……现在没理由再逃避战斗了。", 37, 3001250, false, true, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face2#那些家伙再也不是同一商团的战友了。难道这个理由还不够嘛。", 37, 3001250, true, true, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face1#哦吼，说得没错。想必也正如他们所愿。", 37, 3001270, true, true, 1)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#科尼，你和我一起去据点。接下来全体支部成员……准备好突袭Mr.哈扎尔据点。", 37, 3001250, true, true, 1)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                        cm.askAcceptDecline_Bottom("#face0#……还有卡德娜，寻找紫色死神武器部件的任务就交给你了。怎么样，做得到吧？", 37, 3001250, 1)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.forceStartQuest(34635, "");
                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#呼，放心交给我吧。", 37, 3001270, false, true, 1)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#集齐全部武器部件后，立即前往总部……到时候会告诉你Mr.哈扎尔的种种恶行。我们会牢牢拖住那家伙。", 37, 3001250, true, true, 1)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#没错，出发之前，先从科尼那获知武器部件的位置吧。……那祝你成功。", 37, 3001250, true, true, 1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34635.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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