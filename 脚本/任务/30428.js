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
            cm.sendNormalTalk_Bottom("嗯，原来是这样啊。\r\n怪不得我觉得最近两个人关系有些古怪……", 37, 2074105, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#哈……总有种，哎，\r\n精疲力尽的感觉啊。", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("真是辛苦你们了。\r\n那两兄弟很为对方着想，也就对彼此特别了解。", 37, 2074105, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("因为互相太熟悉，所以更不想被抢走。\r\n还好友情变得更加坚实了。\r\n玉石也找了回来……", 37, 2074105, true, true)
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
                                    cm.fieldEffect_ProcessOnOffLayer("main", "Map/Effect2.img/downtown2015/box/2", 0, 300, 0, 0, 8, 4, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("嫉妒……只要喜欢上了某个人，就不得不会有的一种心理。", 37, 2074105, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("若是调整不好这种心态，就会经历或大或小的伤痛。\r\n童话村的村民还太过单纯，无法调整好这种心态。", 37, 2074105, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face2#是，实在是~太过单纯了啊。\r\n让我们这些人看在眼里都快急疯了……", 37, 2074100, true, true)
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
                                                        cm.sendNormalTalk_Bottom("但是有时候这也会让人显得独具魅力。", 37, 2074105, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("小可爱，让你受累了。#b剩下的宝玉#k也要麻烦你了。", 37, 2074105, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(30428, "gExpCheck=1");
                                                                cm.forceStartQuest(30428, "");
                                                                cm.gainExp(1704718);
                                                                cm.forceCompleteQuest(30428);
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