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
            cm.sendNormalTalk("你好，#b#e#h0##k#n！\n祝贺你成为#e合并服务器#r戴米安#k#n的一员！", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你所属的#b戴米安服务器是由祖母绿、黑水晶、黄金(粤)、蛋白石、石榴石、水晶钻、猫眼石、月石(川)、黄水晶、蓝水晶、海蓝石、星石(申)、紫水晶、黑珍珠、火星石#k服务器合并而成的新服务器。", 5, 9010000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你来自月石(川)吗？为了留下有关月石(川)服务器的记忆，我为你准备了一份小礼物。你想现在领取吗？", 5, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("遇到来自#r戴米安#k服务器的拥有#b服务器名称称号#k的角色时，一定要打个招呼哦~！\r\n好了，再见~！", 5, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.gainItem(3700609, 1);
                            cm.forceCompleteQuest(65340);
                            cm.dispose()
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