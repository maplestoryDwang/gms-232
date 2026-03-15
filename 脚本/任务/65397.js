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
            cm.sendNormalTalk("#b#h0##k！随着你近期在我们荣耀特攻队的精锐任务中大放异彩，我对我们的实力更加有信心了。", 4, 3004216, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("因此，为了感谢积极参与精锐任务的各位勇士，我准备了一项特殊的活动，向大家发放更多的#b荣耀币#k。", 4, 3004216, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("要参加一次<精锐任务奖励>吗？", 4, 3004216)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(500956, "mission1=0");
                        cm.updateInfoQuest(500956, "mission1=0;mission2=0");
                        cm.updateInfoQuest(500956, "mission1=0;mission2=0;mission3=0");
                        cm.updateInfoQuest(500956, "mission1=0;mission2=0;mission3=0;mission4=0");
                        cm.updateInfoQuest(500956, "mission1=0;mission2=0;mission3=0;mission4=0;lastDate=00/00/00");
                        cm.sendNormalTalk("#b#e<精锐任务奖励>#n#k\r\n\r\n#e活动时间#n\r\n2020年2月19日~~2020年3月31日23点59分", 4, 3004216, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#e#b<执行方法>#k#n\r\n\r\n方法很简单。只要参与可执行的精锐任务，然后点击#b完成#k即可。\r\n\r\n#r※ 未完成的进度将在第二天初始化。", 4, 3004216, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#e#b<完成>#k#n\r\n\r\n根据你今天执行的不同种类的精锐任务数量，我要送你#b#e#i2631662:# #t2631662:##k#n礼物。\r\n\r\n#r※ 以世界为单位记录精锐任务的进度，每个账号仅限领取一次各项奖励。#k", 4, 3004216, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#e#b<完成>#k#n\r\n\r\n请注意，<精锐任务奖励>#r#e每天只能完成1次#n#k。也就是说，想要获得更多奖励，就需要在#r完成今天可执行的所有精锐任务#k后，再点击完成按钮。", 4, 3004216, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#e#b<周日冒险岛>#k#n\r\n\r\n活动期间，在每个周日参与活动，\r\n我将送你#b#e#i2631661:# #t2631661:##k#n，\r\n取代#b#e#i2631662:#  #t2631662:##k。", 4, 3004216, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#e#b<周日冒险岛>#k#n\r\n\r\n现在#b#e#i2631661:# #t2631661:##k#n的填充量为平时的#e#b2倍#k#n。如果你运气好，还有机会获得#e#b更多#k#n呢。\r\n\r\n#r※ 最多可获得#k#b#e15，000荣耀币#k#n#r。#k", 4, 3004216, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("对了，如果你今天已经执行过精锐任务，我会帮你把这部分算作完成的。请别担心。", 4, 3004216, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("我会通过#b[荣耀]精锐任务奖励#k任务，向你发放精锐任务奖励箱。", 4, 3004216, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("希望你努力执行精锐任务，取得良好成绩。", 4, 3004216, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceCompleteQuest(65397);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65397.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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