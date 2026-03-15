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
            cm.sendNormalTalk("这世上真是什么事情都有啊。呃呃……我都起鸡皮疙瘩了。总觉得还是无法相信。", 4, 1520061, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是啊，活了这么大岁数，我也是第一次看到女神。而且，女神就是修嘉你啊。现在想来，你之前的确给了我很多暗示啊。", 4, 1520060, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……谢谢大家。我不会忘记这份恩情的。", 0, 1520059, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("既然冒险岛已经恢复了原样……我也该返回枫树中了。", 4, 1520062, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("危机……危机还没有完全结束，所以我还会在这里待一段时间。", 0, 1520059, true, true)
                        } else {
                            if (status === a++) {
                                cm.askMenu(" ……非常感谢，#h0#！多亏了你。\r\n#b#L0#多亏了大家的帮助才取得了胜利。#l\r\n#b#L1#我也想说谢谢。#l\r\n#b#L2#一句话都不说。#l", 0, 1520059)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("多亏了大家的帮助。", 16, 1520059, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("……#h0#，你怎么了，是不是刚才受伤了？", 4, 1520060, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("嗯？#h0#你受伤了？真的吗？", 0, 1520059, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("没有啦，弄得我怪不好意思的，不用说什么谢谢的啦……你没有受伤就好。", 4, 1520060, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("那个，虽然有些不舍，不过大家都回去吧。各位好像都有各自的事情要做。", 4, 1520060, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("这也是种缘分吧，如果以后偶尔还能见面的话，就好了。我呢，以后还会为了做些能赚钱的事情而到处奔走。所以，你要是见到我的话，就假装认识我哟。", 4, 1520061, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("我要先练级才行……。", 4, 1520062, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("不管什么时候，想回来的时候，就来冒险岛吧。大家都会想你的。", 0, 1520059, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("那么，再见了，各位。", 16, 1520059, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceCompleteQuest(32358);
                                                                        cm.forceCompleteQuest(32359);
                                                                        cm.finishAchievement(243);
                                                                        cm.updateInfoQuest(7966, "0=2");
                                                                        cm.gainExp(600000);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32359.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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