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
            cm.sendNormalTalk_Bottom("哦，又找回宝玉了啊。\r\n这是……#g后悔宝玉#k啊。", 37, 2074105, false, true)
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
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_ProcessOnOffLayer("main", "Map/Effect2.img/downtown2015/box/7", 0, 200, 0, 0, 11, 4, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你说它附在了沈师铭身上？果然……", 37, 2074105, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("真像是沈师铭的做派，他总是因为自己没有善待沈青而心怀歉疚……", 37, 2074105, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("后悔一旦严重，最终总会带来不好的结局。", 37, 2074105, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#不过后悔真的有那么不好吗？\r\n谁都有可能后悔的啊。", 37, 2074100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("没错，后悔本身并不是什么坏事，\r\n做了#g会后悔的事#k才是问题所在。", 37, 2074105, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("back", "", 2, 500, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("ok1", "", 2, 500, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("ok2", "", 2, 500, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("ok3", "", 2, 500, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("ok4", "", 2, 500, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("ok5", "", 2, 500, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("ok6", "", 2, 500, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("ok7", "", 2, 500, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("main", "", 2, 300, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 400, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#嗯，好难啊，大人的世界……", 37, 2074100, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("话说回来，到底为什么要将宝玉附在人身上呢，\r\n到底是出于#r什么原因#k才这么做的呢……", 37, 2074105, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#是不是希望童话村消失呢？\r\n或是对人们非常生气……", 37, 2074100, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("这么说来那个事情就更奇怪了……#b那些家伙#k为什么……", 37, 2074105, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#'#b那些家伙#k'？", 37, 2074100, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("啊，没什么……这件事我会再去调查看看的，\r\n你赶紧去帮忙找到剩下的宝玉吧。", 37, 2074105, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.gainExp(1704718);
                                                                            cm.updateInfoQuest(30413, "gExpCheck=1");
                                                                            cm.forceStartQuest(30413, "");
                                                                            cm.forceCompleteQuest(30413);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
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