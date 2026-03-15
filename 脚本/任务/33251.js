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
            cm.sendNormalTalk_Bottom("是你们这些家伙啊，咳咳，咳咳……", 37, 1540724, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.sendNormalTalk_Bottom("他中毒了，快给他防毒面罩……！", 37, 1540453, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("咳咳，算了。反正不管是因为不治之症，还是毒气，\r\n我迟早都是要死的，现在只不过是死期提前了而已。", 37, 1540724, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("这是格里梅尔干的吗？", 37, 1540451, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("那家伙已经疯了。必须阻止他。\r\n因为我们是老战友……所以我之前选择站在他那一边，但我现在发现自己错了。", 37, 1540724, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("夺走人类有限的生命让我觉得后悔不已……\r\n那家伙说能让人类永生，我就相信了他的鬼话……", 37, 1540724, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("永恒……天国……\r\n奥斌是对的。那……不是生者的永恒……", 37, 1540724, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("请告诉我们重点！\r\n这些炸弹是用来做什么的？\r\n格里梅尔的目的究竟是什么？", 37, 1540451, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("咳咳……你是说不需要我这个临死的老人的遗言吗？\r\n你也这么冷血啊？", 37, 1540724, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("……", 37, 1540451, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("……人生真是短暂……", 37, 1540724, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_SetSpecialAction("oid=285911931", "dying", 0, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_SetSpecialAction("oid=285911931", "dead", -1, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("……已经太晚了。", 37, 1540453, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("居然对自己的老战友也如此无情……\r\n格里梅尔，这家伙真是残忍至极。", 37, 1540452, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("请查找一下四周吧。说不定会有与格里梅尔的目的相关的线索。", 37, 1540451, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceCompleteQuest(33251);
                                                                            cm.setInGameDirectionMode(false, true, false);
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33251.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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