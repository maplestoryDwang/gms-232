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
            cm.sendNormalTalk("#h0#，你知道有关神木村附近#b突然出现的王国#k的故事吗？听说，那个王国的天空中漂浮着颠倒之城。竟然是漂浮在天空中的城堡，真是闻所未闻啊。", 0, 1101002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("偏偏在这个时候出现，让我不得不担心这会不会和黑魔法师有关联。", 0, 1101002, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("那是个什么地方？为什么会突然出现在冒险岛世界？对于这两个疑问，你能不能帮我调查一下呢？\r\n\r\n#b#e<接受后，立即移动到地图。>#n#k", 0, 1101002)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32490, "");
                        cm.dispose();
                        cm.warp(241000218, 0)
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