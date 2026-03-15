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
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face0#唉，幸好金库里还剩些钱。交易金额是多少来着……一、二、三、四……", 37, 3001256, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#喏，你把交易金带去吧。真是太巧了，金库的钱正好全用光了。", 37, 3001256, 1)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -1676, -16);
                    cm.inGameDirectionEvent_ForcedFlip10(2, 10);
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
                                cm.sendNormalTalk_Bottom("#face1#这事说起来还有点复杂，总之东西收到了。那我先走了。", 37, 3001270, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_ForcedFlip10(2, 400);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                } else {
                                    if (status === a++) {
                                        cm.npc_ChangeController(3001257, "oid=682355", -1700, -38, 246, -1750, -1650, 0, true, 0, false);
                                        cm.npc_SetSpecialAction("oid=682355", "summon", 0, 0);
                                        cm.npc_SetSpecialAction("oid=682355", "soulless", -1, 0);
                                        cm.sendNormalTalk_Bottom("#face2#金、金库……爷爷，到底出了什么事？", 37, 3001257, false, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#……安、安兹！", 37, 3001256, false, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_ForcedFlip10(1, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
                                                        cm.sendNormalTalk_Bottom("#face0##b(呃，那家伙来这干什么？还有爷爷？ 难道安兹是安图因的孙子？)#k", 37, 3001270, false, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1#……我急需用钱就打开了。抱歉，我没能遵守约定。", 37, 3001256, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face2#不是说好不碰父亲的金库嘛！无论发生任何事都绝不打金库的主意……明明已经说好了……", 37, 3001257, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#骗子……呃啊，骗子！", 37, 3001257, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#混蛋……你这家伙……竟然把我心爱的金库毁掉了………我绝对饶不了你！", 37, 3001257, true, true, 1)
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
                                                                                    cm.npc_LeaveField("oid=682355");
                                                                                    cm.sendNormalTalk_Bottom("#face5#切，你小子就关心自己那点东西。", 37, 3001270, false, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.forceStartQuest(34620, "");
                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.setStandAloneMode(false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34620.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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