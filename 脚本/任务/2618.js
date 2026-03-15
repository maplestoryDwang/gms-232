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
            cm.sendNormalTalk("好久不见。呵呵……我想重新开始对达克鲁进行调查。多亏你提供的情报，让我找到了不少需要调查的线索。你还能帮帮我吗？", 4, 1057001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("要先从包裹开始调查吗？必须把达克鲁的包裹抢到手，确认一下里面是什么东西。你去从快递员手上把包裹抢过来。", 4, 1057001, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("快递员忙着配送包裹，你说可以帮他配送，他一定会让你帮着做事。好了，你马上#b去勇士部落见见休伊#k。\r\n快递员的名字不是叫杜宜吗？那家伙做事很谨慎，有点不好对付。杜宜的双胞胎兄弟更容易下手，我们可以利用他。\r\n#e（接受后，移动到勇士部落）#n", 4, 1057001)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(2618, "");
                        cm.dispose();
                        cm.warp(102000000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/2618.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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