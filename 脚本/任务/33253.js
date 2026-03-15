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
            cm.sendNormalTalk_Bottom("……这研究文件记录的是对斯乌的研究。\r\n你要看看吗？", 37, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("斯乌拥有黑魔法师赐予的肉身. \r\n他比我所搜集到的所有肉身更加美丽, 坚韧. ", 1)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("……（中略）……\r\n这肉身是属于我的. ", 1)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("我需要双重作战. \r\n我答应奥尔卡要把斯乌的身体还给她. \r\n还有, 我向其他军团长保证会制作出用来盛装黑魔法师的器皿. ", 1)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("当然, 这些都是谎言. \r\n这珍贵的肉身我是不可能交给其他人的. \r\n我要把它用在我远大的计划上. ", 1)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_ProcessOnOffLayer("4", "Map/Effect2.img/blackHeaven/photo4", 0, 1500, 200, 100, 16, 4, 0);
                                    cm.inGameDirectionEvent_Monologue("……（中略）……\r\n为了建造黑色天堂, 我要开采镥矿山. \r\n我得尽可能地搜集资源. ", 1)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_ProcessOnOffLayer("4", "", 2, 1500, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("5", "Map/Effect2.img/blackHeaven/photo5", 0, 1500, 200, 100, 16, 4, 0);
                                        cm.inGameDirectionEvent_Monologue("……（中略）……\r\n由于冷却剂不足, 决定到里恩搜集. \r\n我需要一个听话的负责人. ", 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("没有比好朋友更合适的人选了. \r\n\r\n即将死去的老朋友, \r\n那就更加合适了. ", 1)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_ProcessOnOffLayer("5", "", 2, 1500, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("6", "Map/Effect2.img/blackHeaven/photo6", 0, 1500, 200, 100, 16, 4, 0);
                                                cm.inGameDirectionEvent_Monologue("……（中略）……\r\n时机已到. \r\n斯乌重新诞生了. ", 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("6", "", 2, 1500, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_ProcessOnOffLayer("7", "Map/Effect2.img/blackHeaven/photo7", 0, 1500, 200, 100, 16, 4, 0);
                                                    cm.inGameDirectionEvent_Monologue("翼魔之力被一分为二. ", 0)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_Monologue("我让斯乌完全夺取了奥尔卡的力量. \r\n如果拥有翼魔的完整力量, 黑色天堂就能漂浮在空中了. ", 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_ProcessOnOffLayer("7", "", 2, 1500, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("8", "Map/Effect2.img/blackHeaven/photo8", 0, 1500, 200, 100, 16, 4, 0);
                                                            cm.inGameDirectionEvent_Monologue("我决定只为变成一张白纸的斯乌输入战斗数据. ", 0)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_Monologue("我设计了利用进化系统进行的自我进化. \r\n通过自动搜集的战斗资料, 斯乌将会变得越来越强大. ", 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer("8", "", 2, 1500, 0, 0, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_Monologue("斯乌的进化是为了所有人类的进化. \r\n这进化在逻辑上是没有弱点的. ", 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.forceCompleteQuest(33253);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33253.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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