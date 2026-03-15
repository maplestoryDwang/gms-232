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
            cm.sendNormalTalk_Bottom("你有必要读读这个。", 37, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("我终于发明出了. \r\n用来实现我远大计划的化学炸弹——莱蒂奥森!", 1)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("实验第1天", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("实验体全部显示出了临时性的麻痹症状. \r\n十分钟后大部分实验体症状消失, 但部分实验体的麻痹症状没有消失, 反而加重了. 麻痹症状未解除的实验体逐渐变得无力. 麻痹症状未解除的实验体最终在12小时后死亡. ", 1)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("实验第2天", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("幸存的实验体现在开始可以慢慢行动了. 目前他们还无法表达自己的想法, 也不知道应该做什么. ", 1)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("实验第3天", 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("现在还活着的实验体全都丧失了意识。他们好像没有了感情，也失去了生存的目的。与其说是人类，他们更像是某种机器。", 0)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_Monologue("我能达到我想要的目的了. 问题是用于散播毒物的炸弹的制作. ", 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("9", "Map/Effect2.img/blackHeaven/photo9", 0, 1500, 200, 100, 16, 4, 0);
                                                    cm.inGameDirectionEvent_Monologue("……这耗费了我很长时间. ", 0)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_Monologue("这炸弹的范围足以覆盖整个冒险岛世界. 如果毒素暴露在空气中, 它就会和大地上的乙醚相结合, 很容易通过呼吸系统进入人体内. 这么一来, 所有的人类都将变为我的玩偶. ", 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_ProcessOnOffLayer("9", "", 2, 1500, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_Monologue("结论. ", 0)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_Monologue("无论是多么野蛮的人类, 只要大脑功能正常, 就能用作有用的部件. ", 0)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_Monologue("把所有丧失自我控制能力的大脑并联在一起, 实现集体智慧. 斯乌的肉身应该足以起到枢纽的作用了. ", 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_Monologue("这不是一场灾难. ", 0)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_Monologue("而是一场革命. ", 0)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_Monologue("这是人类的进化. ", 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer("10", "Map/Effect2.img/blackHeaven/photo10", 0, 1500, 200, 100, 16, 4, 0);
                                                                                    cm.inGameDirectionEvent_Monologue("他们会以成为我远大计划的附属品而自豪. \r\n如果那一天到来, 我漫长的实验终将结束. ", 0)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_ProcessOnOffLayer("10", "", 2, 1500, 0, 0, 0, 0, 0);
                                                                                        cm.inGameDirectionEvent_Monologue("在此之前, 我需要除掉一些不安因素. ", 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_Monologue("那不安因素-", 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_Monologue("#fs25#就是正阅读这份文件的你们. ", 1);
                                                                                                    cm.effect_Voice("Voice3.img/BlackHeaven/gel/0/1", 100)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                        cm.effect_Voice("Voice3.img/BlackHeaven/gel/0/2", 100)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.sendNormalTalk_Bottom("……#h0#，你能把这房间的灯关掉吗？", 37, 1540451, false, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("墙上好像涂了些什么东西。\r\n有些涂料在光亮时反而看不清。", 37, 1540451, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.forceCompleteQuest(33254);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33254.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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