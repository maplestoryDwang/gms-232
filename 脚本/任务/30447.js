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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("好久不见了呢？\r\n好吧，这次你们找到了怠惰宝玉吗？\r\n哎哟……所以才花费了这么长的时间啊。", 37, 2074105, false, true)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === a++) {
                    cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/downtown2015/box/0", 0, 300, 0, 0, 7, 4, 1);
                    cm.fieldEffect_ProcessOnOffLayer("ok1", "Map/Effect2.img/downtown2015/box/1", 0, 300, 0, 0, 8, 4, 1);
                    if (cm.isQuestFinished(30428)) {
                        cm.fieldEffect_ProcessOnOffLayer("ok2", "Map/Effect2.img/downtown2015/box/2", 0, 300, 0, 0, 8, 4, 1)
                    }
                    if (cm.isQuestFinished(30420)) {
                        cm.fieldEffect_ProcessOnOffLayer("ok3", "Map/Effect2.img/downtown2015/box/3", 0, 300, 0, 0, 10, 4, 1)
                    }
                    if (cm.isQuestFinished(30447)) {
                        cm.fieldEffect_ProcessOnOffLayer("ok4", "Map/Effect2.img/downtown2015/box/4", 0, 300, 0, 0, 8, 4, 1)
                    }
                    if (cm.isQuestFinished(30436)) {
                        cm.fieldEffect_ProcessOnOffLayer("ok5", "Map/Effect2.img/downtown2015/box/5", 0, 300, 0, 0, 8, 4, 1)
                    }
                    if (cm.isQuestFinished(30413)) {
                        cm.fieldEffect_ProcessOnOffLayer("ok7", "Map/Effect2.img/downtown2015/box/7", 0, 200, 0, 0, 11, 4, 1)
                    }
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_ProcessOnOffLayer("main", "Map/Effect2.img/downtown2015/box/4", 0, 300, 0, 0, 8, 4, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("话说回来，小荳的事情我听说了，\r\n爱情……真的很让人心累啊。", 37, 2074105, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#实在是……太可惜了。\r\n真希望她能尽快遇到一个好人，获得幸福……", 37, 2074100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("她不是已经痛过一回了嘛，那会顺利的。\r\n正好新郡守也刚上任，年纪也和小荳差不多……\r\n总之，能够唤醒累晕的人，终究还是爱情啊。", 37, 2074105, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#我也能……遇到不错的人吗？", 37, 2074100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("你也一定会遇到的。", 37, 2074105, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face2#也没有什么好男人嘛……哼。", 37, 2074100, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("以后会遇到的，\r\n或者说，也许已经遇到了，但你只是没有看出来而已。", 37, 2074105, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#哼……总之！这次我也找回了宝玉~\r\n快夸夸我。", 37, 2074100, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_ProcessOnOffLayer("main", "", 2, 300, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("back", "", 2, 500, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("ok1", "", 2, 500, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("ok2", "", 2, 500, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("ok3", "", 2, 500, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("ok4", "", 2, 500, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("ok5", "", 2, 500, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("ok6", "", 2, 500, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer("ok7", "", 2, 500, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("好吧，你做得很好，小可爱。你也一定会更加幸福的。\r\n那，接下来……就要为了童话村村民的幸福再稍微加把劲了。\r\n剩下的宝玉也要麻烦你顺利回收咯，麻烦你了。", 37, 2074105, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.updateInfoQuest(30447, "gExpCheck=1");
                                                                    cm.gainExp(1988838);
                                                                    cm.forceStartQuest(30447, "");
                                                                    cm.forceCompleteQuest(30447);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                                                                } else {
                                                                    if (status === a++) {
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