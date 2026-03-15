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
            if (!cm.isInMyHome()) {
                cm.playerMessage(5, "我的小屋任务只能在自己房子里进行。先回家吧。");
                cm.dispose();
                return
            }
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.npc_ChangeController(9401165, "oid=7238633", -10, 120, 35, -60, 40, 0, false, 0, false);
                cm.npc_SetSpecialAction("oid=7238633", "summon", 0, 0);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 100, 120);
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.sendNewEffects(17, [0, 1000, 2000, -10, 150])
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/dingdong", 128);
                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/dingdong", 128);
                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#嗯？竟然按了门铃。应该不是艾米。今天是谁来了呢？", 37, 9401160, false, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#surprise！#h0#，我来了！", 37, 9401165, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_SetSpecialAction("oid=7238633", "action", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b卡珊德拉，欢迎光临。", 57, 0, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNewEffects(17, [3000, 2000, 900, 150, -50])
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(5000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#哇~！真的很帅气呢？蓝白相间的装修！很适合夏天呢。我仿佛听到海浪的声音了呢。", 37, 9401165, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNewEffects(17, [0, 1000, 2000, -10, 150])
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#让我尝尝饮料的味道吧？", 37, 9401165, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#啊……我的天，太幸福了。这就是微小而确实的幸福吧？", 37, 9401165, true, true);
                                                                            cm.setAccountQuestInfo(226, "count=15541;T=20200613113200")
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#谢谢你的款待。一想到能在朋友家玩耍，我就心痒痒呢？", 37, 9401165, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#莫名觉得我对你而言，变得更特别了。这种感觉很幸福呢。以后我可以经常来玩吗？", 37, 9401165, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#b当然了！", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#让我们一起度过愉快的时间吧！", 37, 9401165, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.npc_LeaveField("oid=7238633");
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(900)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNewEffects(19, [0])
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 600, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(600)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                cm.eventSKill(0);
                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                cm.forceCompleteQuest(65447);
                                                                                                                cm.updateInfoQuest(501025, "dir=2;cnt=10");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65447.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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