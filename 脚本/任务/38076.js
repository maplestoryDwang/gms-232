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
            cm.sendNormalTalk("现在终于记起来了。我放入的是照片。什么时候来着, 和这些家伙拍的唯一一张合影。提示我放入最珍贵的东西, 我嫌麻烦就随便拿了一样放进去, 看来还真选对了。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在可以确信了。这个世界已经将我#e#r彻.底.遗忘了。#k#n关于我的任何痕迹都没留下, 我也无法存在于任何人的记忆当中。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(1073, "2500=10;2510=37;2511=201");
                    cm.updateInfoQuest(38076, "");
                    cm.forceStartQuest(38076, "");
                    cm.forceCompleteQuest(38076);
                    cm.forceStartQuest(31800, "");
                    cm.forceStartQuest(38080, "");
                    cm.updateInfoQuest(38080, "");
                    cm.forceCompleteQuest(38080);
                    cm.gainItem(1190520, 1);
                    cm.changeJob(2511);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38076.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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