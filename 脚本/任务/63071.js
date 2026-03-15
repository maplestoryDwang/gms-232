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
            cm.sendNormalTalk("这次我也看得很清楚。你把#p9400215#送出了城外，还劝说#p9400216#也出去看看。", 4, 9400217, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你是不是也想叫我出去外面？", 4, 9400217, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b没错。城墙外和里面不一样，有郁郁葱葱的森林，香气迷人的花朵……", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你不用说我也知道。事实上我的眼睛越过城墙，看见了那些光景。", 4, 9400217, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b城墙外很美吧？你都看见了，也不想出去吗？", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("偶尔我也会想出去看看。但是我身材太高大了，没法通过狭小的城门。\r\n虽说只要我不吃金银财宝身材就会重新变小，但我忍不住饥饿。", 4, 9400217, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("为了让我能走出去，你帮我打碎城墙好吗？", 4, 9400217)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("谢谢。你打算怎么打碎城墙？", 4, 9400217, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b多击打几次就能打碎了吧？", 2, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("以你目前的体格，根本想都别想。除非你变大4倍还差不多……", 4, 9400217, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(63071, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63071.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("城墙真的塌了。那么大的缺口，我能出去。", 4, 9400217, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b现在我们一起出去吧！", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("尽管我还不确定城墙塌掉是否是件好事，也不知道我走出去是不是个正确的选择，总之，谢谢你。", 4, 9400217, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(63071);
                        cm.gainExp(952800);
                        cm.updateInfoQuest(63071, "wall=5;exp=1;destroy=1");
                        cm.dispose()
                    }
                }
            }
        }
    }
};