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
            cm.sendNormalTalk("你好，#b#e#h0##k#n！\n祝贺你成为#e合并服务器#r麦格纳斯#k#n的一员！", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你所属的#b麦格纳斯服务器是由明珠港、埃德尔、玩具城、斯坦、童话村、万神殿、里恩、飞花院、匠人街、神木村、镜世界、埃欧雷、阿斯旺、V5#k服务器合并而成的新服务器。", 5, 9010000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你来自童话村吗？为了留下有关童话村服务器的记忆，我为你准备了一份小礼物。你想现在领取吗？", 5, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("遇到来自#r麦格纳斯#k服务器的拥有#b服务器名称称号#k的角色时，一定要打个招呼哦~！\r\n好了，再见~！", 5, 9010000, true, true);
                        cm.gainItem(3700588, 1)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(64748);
                            cm.dispose()
                        }
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