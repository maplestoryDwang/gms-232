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
            cm.sendNormalTalk("你好，我是#b赫丽奥斯图书馆的图书管理员威兹#k。\r\n时间不多，我就开门见山了。\r\n现在#r童话村正面临崩溃的危机#k。\r\n只要稍有差池，玩具城就会全部崩塌的。", 5, 2074102, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("如果要详细说明情况，这张纸有些不够。\r\n时间紧迫，我们需要你的帮助。\r\n\r\n#b请现在就来赫丽奥斯图书馆吧。#k", 4, 2074102)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("谢谢。\r\n请你现在来赫丽奥斯图书馆找我吧。", 5, 2074102, false, true)
                } else {
                    if (status === a++) {
                        cm.gainExp(142059);
                        cm.updateInfoQuest(30400, "gExpCheck=1");
                        cm.forceStartQuest(30400, "");
                        cm.forceCompleteQuest(30400);
                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                        cm.dispose();
                        cm.warp(222020000, 2)
                    }
                }
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