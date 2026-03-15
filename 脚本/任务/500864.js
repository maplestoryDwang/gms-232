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
            cm.askMenu("\r\n #b#e关于<冒险岛接力>活动，你有什么想问的吗？#n#k\r\n #e 活动期间 : 2020-01-01 00:00 ~ 2020-12-31 23:59 #n\r\n\r\n#L0# #b我想了解<冒险岛接力>！#k#l\r\n\r\n#L1# #b我想了解波波的使用方法！#k#l\r\n\r\n#L3# 没有其他问题了。#l", 4, 9010010)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n #fUI/MapleRelay_UI.img/quest_guide/0# \r\n\r\n在线期间，可以通过位于波波头像周围的进度条，轻松查看累积在线时间。", 4, 9010010, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("\r\n #fUI/MapleRelay_UI.img/quest_guide/2# \r\n\r\n另外，时间进度条转一圈，即可领取一份奖励。如果你有可领取的奖励，波波会像这样通知你哒。", 4, 9010010, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n #fUI/MapleRelay_UI.img/quest_guide/3# \r\n\r\n点击波波的头像，打开礼物窗口，领取激活的奖励就行了！再次点击波波的头像，即可关闭礼物窗口。", 4, 9010010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n #fUI/MapleRelay_UI.img/quest_guide/4# \r\n\r\n使用按键设置中的立即前往键，可以设置波波on/off。", 4, 9010010, true, true);
                    status = -1;
                    cm.dispose()
                }
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("\r\n 你好，#h0#。小可爱波波来冒险岛世界玩啦～！波波喜欢交朋友，所以带来了一大堆礼物呢。", 4, 9010010, false, true);
        status = -1;
        cm.dispose()
    }
}

function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.dispose()
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