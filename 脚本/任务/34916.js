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
            cm.sendNormalTalk_Bottom("#face2#谢谢你救了马尔。很想拿什么报答你……但是你也看到了避难处的情况很困难……", 36, 3001508, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊，对了，我想问你点事。有几个问题……你能回答我吗？", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#嗯……那个随时都可以。虽然不知道我能否回答你……但我会尽力的。", 36, 3001508, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#（讲述了目前所处的情况。说为了找回记忆，必须先离开这片荒地。）", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#离开这里的方法……我也不知道。", 36, 3001508, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#什么！？", 36, 3001500 + cm.getPlayer().getGender(), 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3#因为我，还有我们商队的人，不是在这里土生土长的人。也不是自愿来到这里的。", 36, 3001508, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.askAcceptDecline_Bottom("#face0#嗯……关于这个地方，我没有太多的可以告诉你。如果你想知道，我就说给你听。关于我们的故事……", 36, 3001508)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#哈，等我整理一下思绪，然后再跟你讲。虽然可能不是你想知道的事……", 36, 3001508, 0, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(34916, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34916.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face0#我，我们是为了寻找乐园而流浪的旅行者……就像……嘿嘿，没有尽头的单相思一样……", 37, 3001508, 0, 1)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_ProcessOnOffLayer("d0", "Effect/Direction17.img/effect/ark/illust/13/0", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                        cm.sendNormalTalk_Bottom("#face0#嗯，不知道我们是从什么时候开始旅行的……也许在我出生之前就开始了……", 37, 3001508, 0, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#因为在我的记忆之中，浮现的第一个画面就是夜空下的船上。我们商队坐着船，在很多地方流浪。", 37, 3001508, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#要是有时间，我真的很想跟你好好说说！啊，但是现在没什么时间，就长话短说了。", 37, 3001508, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_ProcessOnOffLayer("d0", "", 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                    cm.fieldEffect_ProcessOnOffLayer("d1", "Effect/Direction17.img/effect/ark/illust/13/1", 0, 300, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_ProcessOnOffLayer("d1", "", 1, 300, -30, -30, 0, 0, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_ProcessOnOffLayer("d1", "", 1, 300, 30, -30, 0, 0, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_ProcessOnOffLayer("d1", "", 1, 300, -30, 30, 0, 0, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("d1", "", 1, 300, 30, 30, 0, 0, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face3#我，我们坠毁了……在这里。", 37, 3001508, 0, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face2#呃，回想起来，那真的非常奇怪。这里的周边被漩涡包围着，我们的船被吸了进去。", 37, 3001508, 1, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face3#到最后……都没能挣脱出来。", 37, 3001508, 1, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer("d1", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#等我睁开眼睛的时候，发现自己在这片干燥荒地的正中央。船已经不见了踪影……", 37, 3001508, 0, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#流浪了很长时间我们才知道，这周围什么都没有。没有人会来救我们，也没有其他任何东西……", 37, 3001508, 1, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#但是我们必须活下去。因此我们搜集周围的杂物，建造了这个避难处，并从周围搜集吃的，一直坚持到现在。", 37, 3001508, 1, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2#……也就是说，对我们来说首要任务是活下去。那么，也许有一天可以离开这里……", 37, 3001508, 1, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#我们也许又能重新开始旅行！……维依一直在寻找船的电波……", 37, 3001508, 1, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#我们商队的故事就是这些。啊，我得去帮忙重建避难处了。", 37, 3001508, 1, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#（现在暂时没办法离开这里吗……在这种情况下，我能做的事情是……）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
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
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.forceCompleteQuest(34916);
                                                                                                                    cm.gainExp(339);
                                                                                                                    cm.updateInfoQuest(34916, "exp=1");
                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                    cm.eventSKill(0);
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
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};