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
            cm.forceStartQuest(2642, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/2642.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("现在开始…你就是双刀侠了。", 0, 1056000, false, true)
        } else {
            if (status === a++) {
                cm.gainItem(1132021, 1);
                cm.sendNormalTalk("你比以前强的多了。我记得红雅对你的评价…他说你肯定能变得更强，很有天赋…一定能对抗达克鲁…", 0, 1056000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你都变得这么强大，可我作为飞花院的首领却变得越来越弱。我一直相信我们的战斗是代表了正义……可如果不是那样，那该怎么办呢？", 0, 1056000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("父亲…如果是您，您会怎么做呢？带领着飞侠的父亲啊...", 0, 1056000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("您肯定说我们使用双刀是为了保护更多的人…对吧？也许真相已经离我们很近了……", 0, 1056000, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(1073, "431=201;432=201;400=10;430=201");
                                cm.forceStartQuest(2642, "099");
                                cm.forceCompleteQuest(2642);
                                cm.teachSkill(4321006, 0, 5);
                                cm.changeJob(432);
                                cm.sendNormalTalk("对不起，我有点走神了…我需要一点时间来整理思绪。", 0, 1056000, true, false);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};