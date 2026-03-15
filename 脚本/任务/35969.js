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
            cm.sendNormalTalk("怎，怎么回事？那个长得很严肃的大叔是谁？", 4, 1013440, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("三个孩子全都找到啦。干得好。\r\n先把孩子们交给卡鲁帕森林入口处的#b麦琪老师#k……", 4, 1013447, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("#fs12##e老师？？麦琪老师也到这里来了吗？", 4, 1013440, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("老师？！在这里？！！", 4, 1013441, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk("是的，她来找你们来了。", 2, 1013413, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk("呃……你说帮我们……。果然是骗我们的！", 4, 1013441, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk("老师……", 4, 1013442, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk("快回去吧，孩子们。老师非常担心你们。", 2, 1013413, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk("#fs14##e我们不需要！！", 4, 1013440, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk("#fs14##e我们不需要什么老师！！", 4, 1013440, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk("#fs14##e不去！不去！不去！！！！", 4, 1013441, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk("#fs14##e我要！复活！怪兽！！！！", 4, 1013440, true, true)
                                                    } else {
                                                        if (status === b++) {
                                                            var a = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
                                                            cm.sendNormalTalk("连信任的" + a + "……也欺骗了我们……。", 4, 1013442, true, true)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.sendNormalTalk("……。", 2, 1013413, true, true)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.sendNormalTalk("唉……所以我讨厌孩子……。", 4, 1013447, true, true)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.sendNormalTalk("怎么办？", 2, 1013413, true, true)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.sendNormalTalk("每人先来一个爆栗，就老实了……但是……", 4, 1013447, true, true)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.sendNormalTalk("那样以后一定会被女皇陛下问责的。再想想其他办法吧。", 4, 1013447, true, true)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.sendNormalTalk("哼！大人们果然很自私。", 4, 1013441, true, true)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.sendNormalTalk("你们很快也会变成大人的。", 4, 1013447, true, true)
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.sendNormalTalk("好了，也没别的办法了。\r\n要是孩子们又跑掉就糟了。你先按照孩子们说的去做吧。不会真的有#r怪物#k跑出来吧？", 4, 1013447, true, true)
                                                                                        } else {
                                                                                            if (status === b++) {
                                                                                                cm.sendNormalTalk("真，真的有怪物！它会出来保护我们。", 4, 1013442, true, true)
                                                                                            } else {
                                                                                                if (status === b++) {
                                                                                                    cm.sendNormalTalk("好好好，我也曾经相信有个穿红衣服的老爷爷会从烟囱里爬出来给我送礼物……", 4, 1013447, true, true)
                                                                                                } else {
                                                                                                    if (status === b++) {
                                                                                                        cm.sendNormalTalk("#fs14##n别，别说了！！！", 2, 1013413, true, true)
                                                                                                    } else {
                                                                                                        if (status === b++) {
                                                                                                            cm.updateInfoQuest(35950, "00=h1;10=h0;01=h0;11=h1;02=h0;12=h1;03=h0;13=h1;04=h0;14=h0;05=h0;06=h0;07=h0;08=h0;09=h0;27=h0;28=h0");
                                                                                                            cm.forceStartQuest(35969, "");
                                                                                                            cm.gainExp(713849);
                                                                                                            cm.forceCompleteQuest(35969);
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