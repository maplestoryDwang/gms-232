var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("成功了！我们获得了大大的成功！呃……我有点太激动了。麦格纳斯的大部队几乎全军覆没。收复诺巴的首都—赫里希安的日子终于到来的！看到我们的胜利，先代狂龙战士也能安息了。", 0, 3000000, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("别高兴得太早，保护罩内部还留有一些变弱的幽灵。", 2, 3000000, true, true)
            } else {
                if (status === b++) {
                    cm.askYesNo("不好意思，我太高兴，一时没来得及弄清状况。那些幽灵是达勒摩尔麾下的怪物，实力非常强大，所以在保护罩内部还能勉强支撑。我们必须消灭那些幽灵。你愿意加入我们吗？\r\n\r\n#b#e<接受后将立即移动到战场地图。>#n#k", 0, 3000000)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("据我们所知，大部分的高级幽灵都位于南侧。请你赶往南部边界，消灭那些高级幽灵。", 1, 3000000, false, true)
                    } else {
                        if (status === b++) {
                            cm.forceStartQuest(25756, "");
                            var a = cm.getEventManager("狂龙战士_战斗9");
                            a.startInstance(cm.getPlayer(), cm.getMap());
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25756.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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