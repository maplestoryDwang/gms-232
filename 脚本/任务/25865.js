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
            cm.sendNormalTalk("现在有一个好消息和一个坏消息。好消息是被抢走的圣物已经放回原处，正开始复原保护罩。坏消息是麦格纳斯的主力部队好像要开始发动总攻了。", 0, 3000000, false, true)
        } else {
            if (status === b++) {
                cm.askYesNo("嗯，是的。必须阻止总攻。你做好准备了吗？#r(接受后将移动到战场。如果任务失败，请放弃该任务后再重新开始。)#k", 0, 3000000)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("谢谢你，果真有战场的偶像的风范。嗯？战场的偶像？骑士团团员之间已经开始这样称呼爆莉萌天使了呢。", 1, 3000000, false, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("对了，还没告诉你地点呢？你到#m400010200#去，把那里的敌人全部消灭吧。骑士团团员会一起出发的。", 1, 3000000, true, true)
                    } else {
                        if (status === b++) {
                            cm.forceStartQuest(25865, "");
                            var a = cm.getEventManager("爆莉萌天使_战斗2");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25865.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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