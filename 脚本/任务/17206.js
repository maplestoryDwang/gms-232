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
            cm.sendNormalTalk("强大的冒险者，我是丙博士。\r\n你知道不久前有宇宙飞船坠落的事情吧？那边开始传来不祥的气息了…", 0, 9390009, false, true)
        } else {
            if (status === a++) {
                cm.askMenu("你能马上到这里来帮助我进行研究吗？只要完成5个关卡，就能获得大量的经验值。\r\n(接受时，移动到相关地图) #b\r\n#L0#好的，我马上过去。#l\r\n#L1#不，算了。#l", 0, 9390009)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("谢谢你！！我马上把你传送到这里。", 0, 9390009, false, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(17206);
                        cm.forceStartQuest(17201, "" + cm.getMapId());
                        cm.updateInfoQuest(867110000, cm.getMapId());
                        cm.dispose();
                        cm.warp(861000000, 0)
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