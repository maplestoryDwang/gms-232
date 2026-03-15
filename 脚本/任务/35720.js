var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face0#你还是回去吧。再继续走也不会有什么收获的。", 37, 3003770, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face2#唉……再拖下去可能还会出现其他问题……", 37, 3003770, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face1#抓紧时间吧。", 37, 3003770, true, true)
                } else {
                    if (status === b++) {
                        cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h1;03=h1;22=h0;04=h0;23=h0;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                        cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h1;03=h1;22=h1;04=h0;23=h0;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                        cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h1;03=h1;22=h1;04=h0;23=h1;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                        cm.inGameDirectionEvent_AskAnswerTime(200)
                    } else {
                        if (status === b++) {
                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644706/Regen", 100);
                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644707/Regen", 100);
                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644708/Regen", 100);
                            cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                            cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                            cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                            cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                            cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                            cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                            cm.inGameDirectionEvent_AskAnswerTime(700)
                        } else {
                            if (status === b++) {
                                cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h1;04=h0;23=h1;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                                cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h2;04=h0;23=h1;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                                cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h2;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#face2#还是不行，似乎没法让他们体面地上路。", 37, 3003770, false, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face1#可是也不能……伤害他们啊……", 37, 3003770, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                        } else {
                                            if (status === b++) {
                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                            } else {
                                                if (status === b++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                } else {
                                                    if (status === b++) {
                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.setStandAloneMode(false);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.askAcceptDecline_Bottom("#face0#那现在立刻突破吗？", 37, 3003770)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.playerMessage(5, "在区域内减少一定数量的怪物才能前往下一关卡。");
                                                                var a = cm.getEventManager("痛苦迷宫_战斗5");
                                                                a.startInstance(cm.getPlayer(), cm.getMap());
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35720.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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