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
            cm.sendNormalTalk("你好，#b#h0##k。", 0, 9063001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我们虽然打败了黑魔法师，但是战争给联盟内部留下了不少烂摊子。", 0, 9063001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("因此，联盟派准备挑选精英成员，组成一支特殊小组。", 0, 9063001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("联盟方面承诺，将为率先响应女皇陛下的号召，加入特殊小组的成员提供#b#e特别支援#k#n。", 0, 9063001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("特别支援物资可在如下时间内领取，请到时再来找我吧。特别支援物资的内容如下。", 0, 9063001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#e< MapleStory GLORY预约奖励 >#n\r\n\r\n#i2631261:# #t2631261:#", 0, 9063001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("要提前支援特殊小组吗？", 4, 9063001)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(500909, "State=1");
                                        cm.forceCompleteQuest(65286);
                                        cm.playerMessage(5, "已参与<GLORY预约>活动。");
                                        cm.sendNormalTalk("特别支援物资可在如下时间内领取，请到时再来找我吧。", 0, 9063001, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("\r\n#e※ GLORY预约奖励发放时间#n\r\n\r\n#b#e - 2020年1月22日（周三）上午12点00分 ~\r\n   2019年2月4日（周二）下午11点59分#n#k", 0, 9063001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("我会等着你的。", 0, 9063001, true, false)
                                            } else {
                                                if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65286.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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