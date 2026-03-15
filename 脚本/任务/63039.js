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
            cm.sendNormalTalk("吃饱了好开心。", 4, 9400215, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b只要消灭外面的#o9402045#就能获得很多吃的，你为什么饿着肚子？", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("有很多吃的又怎么样……我不能丢下我的宝物跑出去……", 4, 9400215, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b这么说你是怕宝物被抢走，所以一直饿到现在？", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("虽然肚子很饿，但看着宝物，我心里就满足了。我给你瞧瞧我的宝物吧！\r\n多漂亮啊？你瞧这些闪闪发亮的黄金和晶莹剔透的宝石！", 4, 9400215, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b可是这些宝物在这里用不上吧？", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("那有什么关系？我有这么多的黄金和宝物，因为它们，我感到很幸福！", 4, 9400215, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("看见那边那些巨人吗？他们耐不住饿，把自己的黄金和宝物吃掉了。你看看他们。\r\n那模样还能称得上是人吗？我不会变成他们那样的。", 4, 9400215, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我要誓死保护我的黄金和宝物……", 4, 9400215, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("看见那边那些巨人吗？他们耐不住饿，把自己的黄金和宝物吃掉了。你看看他们。\r\n那模样还能称得上是人吗？我不会变成他们那样的。", 4, 9400215, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("我要誓死保护我的黄金和宝物……", 4, 9400215, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#b(他执着的程度太可怕了……)", 2, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.askYesNo("好久没说这么多话，刚吃饱的肚子马上又瘪下去了。\r\n你能不能再帮我弄些先前那些吃的？我愿意给你点小小的谢礼……", 4, 9400215)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("谢谢。我等你回来。", 4, 9400215, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(63039, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63039.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("噢！", 4, 9400215, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(63039);
                cm.gainExp(635200);
                cm.updateInfoQuest(63039, "exp=1");
                cm.sendNormalTalk("这是我的小小心意。是我的部分黄金哦。平时我谁都不给，但我愿意分你一点。", 4, 9400215, true, true);
                cm.gainItem(4034994, -30);
                cm.gainItem(2436086, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("要是你不想变得像那些巨人一样高大，就别吃掉这黄金。你想变高的话我也不拦你……", 4, 9400215, true, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};