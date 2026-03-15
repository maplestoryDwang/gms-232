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
            cm.sendNormalTalk_Bottom("小可爱啊，你的表情怎么这么暗沉呢？\r\n嗯？年糕？那是什么意思啊？", 37, 2074105, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#没什么……你还是……不知道为好……\r\n呜呜……在这里。", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哦，暴食宝玉。", 37, 2074105, true, true)
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
                                cm.fieldEffect_ProcessOnOffLayer("main", "Map/Effect2.img/downtown2015/box/3", 0, 200, 0, 0, 11, 4, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("太过贪吃可真的会很痛苦的。\r\n虽然也不一定就能说是很坏的行为，\r\n但懂得调节好，对自己才好嘛。", 37, 2074105, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#我以后应该能够调节得很好了，\r\n至少这段时间……呕。", 37, 2074100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_ProcessOnOffLayer("main", "", 2, 500, 0, 0, 0, 0, 0);
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
                                                cm.sendNormalTalk_Bottom("嗯，你难道没有胃口吗？\r\n那我这可有一个绝对能刺激你味蕾的绝佳方法。", 37, 2074105, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("这旁边#b小日的母亲#k在做#g手工刀削面#k，那美味，大家纷纷赞不绝口啊……", 37, 2074105, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face3#什么？你说什么……呕呕呕呕！", 37, 2074100, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("你，你这是怎么了……\r\n嗯……#b#h0##k，你来帮忙照看一下小可爱吧。\r\n还有#b剩下的宝玉#k也要麻烦你回收了。", 37, 2074105, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(30912, "2");
                                                                cm.updateInfoQuest(30420, "gExpCheck=1");
                                                                cm.forceStartQuest(30420, "");
                                                                cm.gainExp(1704718);
                                                                cm.forceCompleteQuest(30420);
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