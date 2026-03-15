var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.askMenu("欢迎来到#e#b新服务器#n#k！作为开放纪念活动，我为你准备了以下福利。先来看看吧！\r\n\r\n#L0##b 我想知道新服务器开放福利。\r\n#L1##b 我想领取今天的经验值券。\r\n", 0, 9010000)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("噔噔！我为你准备了#b这么多的福利#k！\r\n\r\n#e[支援福利]#n#k\r\n - 每天发放#e#t2450135#5张#n\r\n - 联盟#e每日任务纪念币发放量2倍#n\r\n - 联盟#e升级费用折扣50%#n\r\n - 怪物收藏#e新怪物登记概率2倍#n", 5, 9010000, false, false)
    } else {
        if (status === a++) {
            cm.dispose()
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.updateInfoQuest(65343, "date=20/04/05;1=0;2=0;set=1;exp=0");
        cm.askMenu("#b#e新服务器#n#k的特别福利！我这就把#e经验值券#n送给你。你可以根据需要分批领取！\r\n\r\n#e[领取经验值券]#n#b\r\n#L1##i2450135:# #b#t2450135#（0/5个）#l#k", 0, 9010000)
    } else {
        if (status === a++) {
            cm.askNumber("请输入想要领取的经验值券数量！（0/5个）", 9010000, 0, 0, 2100000000)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(65343, "date=20/04/05;1=0;2=0;set=1;exp=5");
                cm.sendNormalTalk("经验值券已经发给你了！快到背包中确认一下吧。", 5, 9010000, false, false)
            } else {
                if (status === a++) {
                    cm.gainItem(2450135, 5);
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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