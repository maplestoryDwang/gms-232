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
            cm.sendNormalTalk_Bottom("……这研究报告是对封印石的研究啊。\r\n你要看看吗？", 37, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("序论. \r\n黑色之翼发疯似地寻找名为封印石的石头. ", 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("所谓的封印石究竟是什么呢?\r\n出于个人的好奇心, 我决定对此进行研究. ", 1)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_ProcessOnOffLayer("1", "Map/Effect2.img/blackHeaven/photo1", 0, 1500, 200, 100, 16, 4, 0);
                            cm.inGameDirectionEvent_Monologue("正文. \r\n封印石具有下列特征. ", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("   a. 它具有宝石的形态. ", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("   b. 其中封印了难以估量的力量, 这力量超乎超越者之力. ", 0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("   c. 如果要使用封印石, 需要多种条件, \r\n       其中最重要的是搜集许多人的“迫切愿望”. ", 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("   d. 不过, 如果使用违背因果法则\r\n       的力量, 必然招致灭亡. ", 1)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_Monologue("也就是说, 所谓的封印石, 是能让大多数人的愿望变为现实的奇异石头. ", 0)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_Monologue("甚至如果所有人想要回到过去, 它也能让时间倒流. \r\n当然, 要实现个人的愿望是不可能的. ", 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_ProcessOnOffLayer("1", "", 2, 1500, 0, 0, 0, 0, 0);
                                                        cm.fieldEffect_ProcessOnOffLayer("2", "Map/Effect2.img/blackHeaven/photo2", 0, 1500, 200, 100, 16, 4, 0);
                                                        cm.inGameDirectionEvent_Monologue("世界上只要存在一个封印石, 黑魔法师就无法完全恢复自身的力量. ", 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_Monologue("许多人的愿望. ", 0)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_Monologue("只要有了那个, 就能通过封印石将黑魔法师的力量束缚在过去. ", 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer("2", "", 2, 1500, 0, 0, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_Monologue("……（中略）……\r\n这封印石能运用在我的实验中吗?", 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_Monologue("……（中略）……\r\n完全无法用科学的力量来启动它. ", 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer("3", "Map/Effect2.img/blackHeaven/photo3", 0, 1500, 200, 100, 16, 4, 0);
                                                                            cm.inGameDirectionEvent_Monologue("据说数百年前, 是一位少年魔法师制造出了这封印石. \r\n我无法认可. 人类的愿望居然能成为能量源, 真是荒唐. ", 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_ProcessOnOffLayer("3", "", 2, 1500, 0, 0, 0, 0, 0);
                                                                                cm.inGameDirectionEvent_Monologue("……（中略）……\r\n黑色之翼的爪牙们成功搜集到了所有的封印石, 除了一个之外. ", 0)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_Monologue("最后一块封印石在女皇之岛——圣地. ", 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_Monologue("结论. \r\n这是毫无意义的研究. ", 0)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_Monologue("至少由我来看, 封印石是根本无法作为能量源的. \r\n我决定继续进行之前的实验. ", 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.forceCompleteQuest(33252);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33252.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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