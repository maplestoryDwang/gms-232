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
            cm.sendNormalTalk("你已经在狐神的庇护下，得到了精灵的力量，也将因而获得新的技能。查看一下你的技能窗吧。", 4, 3002101, false, true)
        } else {
            if (status === a++) {
                cm.openUIWithOption(3, 20051284);
                cm.sendNormalTalk("缩地…………精灵凝聚…………从没见过这种技能。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这样的技能对于行动缓慢外加力量虚弱的隐月来说是非常必要的！好的，我会教你如何使用，准备好的话就再和我说话吧！", 4, 3002101, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(38996, "");
                        cm.forceStartQuest(38996, "");
                        cm.forceCompleteQuest(38996);
                        cm.gainExp(700);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38996.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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