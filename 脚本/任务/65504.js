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
            cm.sendNormalTalk("快乐的星期天！欢迎来到冒险岛世界。\r\n夏日冒险岛今日优惠！\r\n\r\n #r#e- “回归的骨碌骨碌屋”活动材料[骨碌骨碌屋的角：金色]发放！#n#k\r\n #b- 连击珠经验值获取量+300%\r\n", 4, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("确认用当前登录的角色领取#b#i2631311:##t2631311:##k 1个吗？ \r\n\r\n#b#i2631311:##t2631311:##k#e#r每个冒险岛账户只能领取一次#n#k。#k", 5, 9010000)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(65504);
                    cm.sendNormalTalk("周日冒险岛礼物已经发放给你了！\r\n祝你度过一个快乐的周日！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#b#i2631311:# #t2631311:# 1个#k\r\n", 4, 9010000, false, false);
                    cm.gainItem(2631311, 1)
                } else {
                    if (status === a++) {
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65504.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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