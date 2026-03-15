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
            cm.askAcceptDecline("出大事了！#b#m600000000##k刚发生了一场强震！建筑变成废墟，平地变成沟壑。我都快认不出这座我一手创造的城市了！我倒是想雇个地震学家研究下是什么情况，但预算实在是不够。你好像对这方面颇有研究。能帮我这个忙吗？", 0, 9201050)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("我就知道你会答应我！去#b#m600000000##k跟我碰头吧。如果你不方便，我可以派我的特制市长专用隐形豪华轿车来接你，还不收你钱。如何？", 0, 9201050)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好！我就知道你不会拒绝。对了，你是看不见轿车的，原地等着就是。", 1, 9201050, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(28745, "1");
                        cm.dispose();
                        cm.warp(600000000, 8)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23630.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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