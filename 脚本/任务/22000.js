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
            cm.sendNormalTalk("醒了吗，小不点？", 0, 1013100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b嗯……妈妈也醒了吗？", 2, 1013100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯……但是你怎么好像没睡着呢？昨天晚上打了一夜的雷。所以才没睡好吗？", 0, 1013100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b不，不是因为那个，是因为做了一个奇怪的梦。", 2, 1013100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("奇怪的梦？梦见了什么呢？", 0, 1013100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b嗯……", 2, 1013100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b(说明梦见在迷雾中遇到龙的事情。)", 2, 1013100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askAcceptDecline("呵呵呵呵，龙？怎么会梦到这个呢？没被吃掉，真是太好了。你做了个有趣的梦，去告诉#p1013101#吧。他一定会很高兴的。", 0, 1013100)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(22000, "");
                                            cm.sendNormalTalk("#b#p1013101##k去#b#m100030102##k给猎犬喂饭了。从家里出去就能见到他了。", 1, 1013100, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/1/0"])
                                            } else {
                                                if (status === a++) {
                                                    cm.OnStartNavigation(100030102, 1, "1013101", 22000);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22000.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哦，起来啦，小不点？大清早的，怎么这么大的黑眼圈啊？晚上没睡好吗？什么？做了奇怪的梦？什么梦啊？嗯？梦见遇到了龙？", 0, 1013101, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哈哈哈哈～龙？不得了。居然梦到了龙！但是梦里有狗吗？哈哈哈哈～\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 20 exp", 0, 1013101, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(22000, "");
                    cm.forceCompleteQuest(22000);
                    cm.updateInfoQuest(25980, "normal=#");
                    cm.updateInfoQuest(25980, "normal=#;hard=#");
                    cm.gainExp(20);
                    cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/2/0"]);
                    cm.dispose()
                }
            }
        }
    }
};