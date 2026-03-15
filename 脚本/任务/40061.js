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
            cm.sendNormalTalk("#face10#……你受伤了？", 45, 2400006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊……是啊。好像刚才因为魔法的力量，被石块打中了，不过也只是个擦伤……唉，看你们毫发无损，我却受了伤，真是惭愧啊。虽然身为魔法师，但我还是得多锻炼一下体力了。哈哈哈……", 36, 2411010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不过，你们没事吗？#p2411011#恢复了原来的模样，看起来诅咒已经完全解除了……但是诅咒之力没对你们造成什么影响吧？", 36, 2411010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face1#……我不是说过我们不会有影响吗，你还是担心一下你自己吧。", 45, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯……但是你们这么关心我，我看我就不用为自己操心了？哈哈哈。不要摆出那种表情，又不是什么严重的伤，况且我还带着药水呢。", 36, 2411010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("多亏了你们#p2411011#也恢复了原样……能圆满解决真的是太好了。这都是靠你们的帮助，如果没有你们我真不知道该怎么办……", 36, 2411010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("哼，你也肯定会想尽办法要解决吧……", 45, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("…………", 45, 2400006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("要找的已经找到了吧？那么……在神木村就没什么事情了？", 36, 2411010, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("结束了，我们也该回去了。", 45, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("啊，可恶……因为魔法的力量，洞穴的地基变得更加脆弱了，好像快要坍塌了，我们快点出去把。", 36, 2411010, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("来，我用魔法把你们送出去。", 36, 2411010, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("那你呢？", 45, 2400005, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("我还要带着#p2411011#，我还得好好照看它，万一有什么后遗症之类的怎么办。", 36, 2411010, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("很高兴能和你们成为朋友……但是我也不能继续留着你们了吧？和你们分开真是太可惜了。", 36, 2411010, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("真希望以后还能再见面。", 36, 2411010, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.updateInfoQuest(40061, "");
                                                                            cm.forceStartQuest(40061, "");
                                                                            cm.updateInfoQuest(41832, "afrien=off;cave=off");
                                                                            cm.dispose();
                                                                            cm.warp(321100000, 4, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40061.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("以后嘛……我们也没多少时间待在这个神木村。", 45, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("即使不在这里……说不定能在冒险岛世界的其他地方见面吧？", 45, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("说的也对，那么到时候再见咯。", 45, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.gainExp(819000);
                        cm.forceCompleteQuest(40061);
                        cm.forceCompleteQuest(40904);
                        cm.dispose()
                    }
                }
            }
        }
    }
};