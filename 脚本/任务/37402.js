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
            cm.sendNormalTalk_Bottom("#face0#如果我们确实是渡过了东海，那这里应该就是格兰蒂斯吧？", 37, 3003675, false, true);
            cm.effect_Voice("Voice5.img/CH2/Checky/1", 128)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#原来如此。我也是第一次来到大陆。", 37, 3004431, true, true);
                cm.effect_Voice("Voice5.img/CH2/Idea/1", 128)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#大陆吗？", 37, 3003675, true, true);
                    cm.effect_Voice("Voice5.img/CH2/Checky/2", 128)
                } else {
                    if (status === a++) {
                        cm.curNodeEventEnd(true);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(true, false, true);
                        cm.setStandAloneMode(true);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction23.img/illust2/10", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                cm.fieldEffect_ProcessOnOffLayer("03", "Effect/Direction23.img/illust2/11", 0, 1000, 0, 0, 3, 4, 0, -1, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#人们通常会将黑海上空的所有星球统称为格兰蒂斯。", 37, 3004431, false, true);
                                    cm.effect_Voice("Voice5.img/CH2/Idea/2", 128)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#不过，严格来说，格兰蒂斯这个名字的含义其实是位于黑海正中央的#b中心星辰#k。", 37, 3004431, true, true);
                                        cm.effect_Voice("Voice5.img/CH2/Idea/3", 128)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_ProcessOnOffLayer("02", "Effect/Direction23.img/illust2/12", 0, 700, 0, 0, 4, 4, 0, -1, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_ProcessOnOffLayer("02", "", 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("02", "Effect/Direction23.img/illust2/12", 0, 700, 0, 0, 4, 4, 0, -1, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_ProcessOnOffLayer("02", "", 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#因为这里和冒险岛世界一样，有很多的种族和国家根植于此，所以称这里为#b大陆#k。", 37, 3004431, false, true);
                                                            cm.effect_Voice("Voice5.img/CH2/Idea/4", 128)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#喔……我之前都还不知道这些事。", 37, 3003675, true, true);
                                                                cm.effect_Voice("Voice5.img/CH2/Checky/3", 128)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#像万神殿，赫里希安，荒蛮终点站，贝勒狄这样围绕在大陆周围的星星，都被称为格兰蒂斯之月。", 37, 3004431, true, true);
                                                                    cm.effect_Voice("Voice5.img/CH2/Idea/5", 128)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction23.img/illust2/13", 0, 700, 0, 0, 5, 4, 0, -1, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction23.img/illust2/13", 0, 700, 0, 0, 5, 4, 0, -1, 0, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#原来如此，我们头顶的星星被称为月亮，我们脚下的土地，则被称为格兰蒂斯大陆。", 37, 3003675, false, true);
                                                                                        cm.effect_Voice("Voice5.img/CH2/Checky/4", 128)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                cm.fieldEffect_ProcessOnOffLayer("03", "", 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
                                                                                                            cm.sendNormalTalk_Bottom("#face0#王子殿下。非常抱歉。我们好像有些偏离预定坐标。", 37, 3004437, false, true);
                                                                                                            cm.effect_Voice("Voice5.img/CH2/Knight/1", 128)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face1#嗯？这，这可不妙。敌人应该也注意到我们用了空间移动……", 37, 3004433, true, true);
                                                                                                                cm.effect_Voice("Voice5.img/CH2/Carlyle/1", 128)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face1#诸位，请尽快赶往会合地点。", 37, 3004433, true, true);
                                                                                                                    cm.effect_Voice("Voice5.img/CH2/Carlyle/2", 128)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                    cm.eventSKill(0);
                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                    cm.forceStartQuest(37402, "");
                                                                                                                                    cm.OnStartNavigation(993140010, 0, "east00", 37402);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37402.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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