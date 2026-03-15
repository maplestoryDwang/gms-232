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
            cm.sendNormalTalk_Bottom("贪婪宝玉找回来了啊！\r\n我就知道这家伙肯定在不远的地方。", 37, 2074105, false, true)
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
                        cm.fieldEffect_ProcessOnOffLayer("main", "Map/Effect2.img/downtown2015/box/5", 0, 300, 0, 0, 8, 4, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("贪婪……过度的贪心总有一天会遭致祸害的。\r\n樵夫这家伙原本就很贪心的。", 37, 2074105, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("自从他爹在他小时候失踪之后，他就是个和单身母亲一起生活的孝子……\r\n肯定也有很多想要做的事情吧，也确实是有点……可惜了。", 37, 2074105, true, true)
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
                                        cm.sendNormalTalk_Bottom("#face2#要是把钱都还给了他，往后他要是再贪心了可怎么是好？", 37, 2074100, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("不会的，\r\n他不是已经放下了最大的一次贪心吗？", 37, 2074105, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#最大的贪心啊？哪个啊？", 37, 2074100, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("对人生的贪心，\r\n既然已经将这些放下了，以后不管什么事情都能成功的。\r\n樵夫日后会生活得更加正直，\r\n看来宝玉有时候也能派上不错的用场啊。", 37, 2074105, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#但还是得赶紧全都回收回来吧？", 37, 2074100, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("那是当然，童话村的村民太过善良，实在是没法独自承受宝玉啊。\r\n那，剩下的宝玉也得麻烦你赶紧回收回来了，小可爱啊。", 37, 2074105, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.updateInfoQuest(30436, "gExpCheck=1");
                                                                cm.forceStartQuest(30436, "");
                                                                cm.gainExp(1988838);
                                                                cm.forceCompleteQuest(30436);
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