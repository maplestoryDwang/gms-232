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
            cm.sendNormalTalk_Bottom("武器？技能？", 36, 9401024, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("武器！有刀吗？", 36, 9401029, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我这里应有尽有，你只需要有钱～？", 36, 9401024, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("好的，你可不能骗人！", 36, 9401029, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("当然了，我什么时候骗过人？", 36, 9401024, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("队长，这是远征队本部的志愿队长，宝宝。他这里武器、技能、药水，什么都卖。", 36, 9401029, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("不管你需要什么，都可以来找我！（眨眼）", 36, 9401024, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(64770, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64770.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("好了！将新买的武器为拉尔夫装备上就可以了。", 36, 9401029, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("下次再来哦，客人～？", 36, 9401024, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("现在开启新冒险的准备已经全部就绪，让我们正式开始彻底地探索深渊吧！", 36, 9401029, true, true)
                } else {
                    if (status === a++) {
                        cm.openNewUI(1, "UIAbyssExpedition");
                        cm.forceCompleteQuest(64770);
                        cm.dispose()
                    }
                }
            }
        }
    }
};