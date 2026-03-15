var status = -1;
var selectionLog = [];

function start(g, f, e) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return
    }
    var c = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
    (g == 1) ? status++ : status--;
    selectionLog[status] = e;
    var d = -1;
    if (status <= d++) {
        cm.dispose()
    } else {
        if (status == d++) {
            cm.sendNormalTalk("…………", 4, 9400224, false, true)
        } else {
            if (status === d++) {
                cm.setNumberForQuestInfo(63090, "lightning", 1);
                cm.setQuestCustomData(63092, "");
                cm.setQuestCustomData(63253, "lig");
                cm.setQuestCustomData(63251, "destroy");
                var a = cm.getNumberFromQuestInfo(63090, "DnN") == 0;
                var b = cm.getNumberFromQuestInfo(63090, "raining") == 1;
                if (!b) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_AfterLand/RotationBack", 128);
                    cm.updateInfoQuest(63095, "angle=" + (a ? 0 : -90));
                    cm.afterlandChangeMapObject("RotationBack", 0, 0, 0, 1, a ? -90 : 90, 100, 1)
                }
                cm.afterlandUpdateEnvironment();
                cm.sendNormalTalk("#b(#p9400224#又郁闷了。天上再次下起雨来……)", 2, 0, true, true)
            } else {
                if (status === d++) {
                    cm.sendNormalTalk("#b#p9400224#，又出什么事了？", 2, 0, true, true)
                } else {
                    if (status === d++) {
                        cm.sendNormalTalk("我想要玩小熊玩偶……", 4, 9400224, true, true)
                    } else {
                        if (status === d++) {
                            cm.sendNormalTalk("#b我不久前帮你找回的童话书都看完了吗？", 2, 0, true, true)
                        } else {
                            if (status === d++) {
                                cm.sendNormalTalk("童话书？童话书没意思，反正也没法看……", 4, 9400224, true, true)
                            } else {
                                if (status === d++) {
                                    cm.sendNormalTalk("#b哈……小熊玩偶在哪里？又被普力奇拿走了吗？", 2, 0, true, true)
                                } else {
                                    if (status === d++) {
                                        cm.askYesNo("不，在#p9400226#那里有买……" + c + "你给我买一个好吗……？", 4, 9400224)
                                    } else {
                                        if (status === d++) {
                                            cm.sendNormalTalk("#b这次是最后一次哦！以后你不许闹了。", 2, 0, false, true)
                                        } else {
                                            if (status === d++) {
                                                cm.forceStartQuest(63082, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63082.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(g, f, e) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return
    }
    var c = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
    (g == 1) ? status++ : status--;
    selectionLog[status] = e;
    var d = -1;
    if (status <= d++) {
        cm.dispose()
    } else {
        if (status == d++) {
            cm.sendNormalTalk("#b给，小熊玩偶。以后不许闹咯。", 3, 0, false, true)
        } else {
            if (status === d++) {
                cm.sendNormalTalk("哇！是新小熊玩偶！太漂亮了！", 5, 9400224, true, true)
            } else {
                if (status === d++) {
                    cm.sendNormalTalk("#b(有了一个玩偶，她又再次开心起来了。)", 3, 0, true, true)
                } else {
                    if (status === d++) {
                        cm.sendNormalTalk("" + c + "，谢谢你……嘿嘿，我送你个礼物吧！", 5, 9400224, true, true)
                    } else {
                        if (status === d++) {
                            cm.forceCompleteQuest(63082);
                            cm.gainExp(317600);
                            cm.updateInfoQuest(63082, "exp=1");
                            cm.setNumberForQuestInfo(63090, "lightning", 0);
                            cm.setQuestCustomData(63092, "");
                            cm.setQuestCustomData(63253, "not");
                            cm.setQuestCustomData(63251, "click");
                            var a = cm.getNumberFromQuestInfo(63090, "DnN") == 0;
                            var b = cm.getNumberFromQuestInfo(63090, "raining") == 1;
                            if (!b) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_AfterLand/RotationBack", 128);
                                cm.updateInfoQuest(63095, "angle=" + (a ? 90 : 180));
                                cm.afterlandChangeMapObject("RotationBack", 0, 0, 0, 1, a ? 90 : -90, 100, 1)
                            }
                            cm.afterlandUpdateEnvironment();
                            cm.sendNormalTalk("Zzan！！！", 5, 9400224, true, true);
                            cm.gainItem(4036015, -1);
                            cm.gainItem(2436113, 1)
                        } else {
                            if (status === d++) {
                                cm.sendNormalTalk("#b(这不是我刚帮忙找回的童话书吗？)", 3, 0, true, true)
                            } else {
                                if (status === d++) {
                                    cm.sendNormalTalk("#b#p9400224#，这不是你珍爱的童话书吗~？", 3, 0, true, true)
                                } else {
                                    if (status === d++) {
                                        cm.sendNormalTalk("没错！不过我要把它送给" + c + "你！其实这不是我的书，只是因为漂亮才一直带在身边……而且上面有锁，我也没法看！", 5, 9400224, true, true)
                                    } else {
                                        if (status === d++) {
                                            cm.sendNormalTalk("#b(锁？#t4034992#说不定能打得开？)", 3, 0, true, false)
                                        } else {
                                            if (status === d++) {
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
};