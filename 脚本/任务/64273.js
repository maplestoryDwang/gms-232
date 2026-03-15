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
            cm.sendNormalTalk_Bottom("你好，勇士！", 36, 9400593, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("瞧~~！这是我、妈妈、郁兰姐姐还有叔叔们一起为你准备的。", 36, 9400593, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哈瓦尔？你在那儿做什么呢！", 36, 9400588, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我想告诉勇士任务板的用处！", 36, 9400593, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你没长门牙，说不清楚的，这东西很重要，要是人家勇士听不懂该怎么办？还是姐姐来吧。", 36, 9400588, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("勇士！你好。\r\n这段时间真的谢谢你了……\r\n我们一直在想到底该怎么报答你，阿布鲁的所有居民绞尽脑汁，为你准备了这个#e[任务板]#n！", 36, 9400588, true, true)
                            } else {
                                if (status === a++) {
                                    cm.openUI(1886);
                                    cm.sendNormalTalk_Bottom("#e[任务板]#n上有#b[每日任务]#k、#b[每周任务]#k还有#b[成就任务]#k。", 36, 9400588, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b[每日任务]#k是每天都可以做的事，只要通关一次“阿布鲁的大篷车”就可以获得礼物了！\r\n对了，每日任务会在#b每天午夜重置#k，你可别忘了哦！", 36, 9400588, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b[每周任务]#k是每周可以进行一次的事，每天来阿布鲁玩，就能自然而然地完成了哦！\r\n#每周任务会在#b每周三重置#k，在此之前一定要记得拿好礼物哦！", 36, 9400588, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b[成就任务]#k是只能进行一次的事，为了报答勇士你对我们的付出，我们真的是超认真地在准备礼物哦！你可不能被吓到哦！", 36, 9400588, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("鼠标悬停在各个任务的礼物箱图标上，就能看到完成时可以领取的道具了。", 36, 9400588, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("除了那个之外，我们还准备了像#i3700493:##t3700493#,#i3700502:##t3700502#,#i3700496:##t3700496#这些酷炫的称号，还有#i2028372:##t2028372#这类勇士一定会用到的东西，一定不要忘了拿哦。", 36, 9400588, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("别忘了，一定要记得拿哦！", 36, 9400593, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("那……再见咯，勇士！", 36, 9400588, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("再见哦，勇士！", 36, 9400593, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.updateInfoQuest(64273, "chk=1");
                                                                        cm.forceCompleteQuest(64273);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64273.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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