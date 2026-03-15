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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63036.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63036.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setNumberForQuestInfo(63091, "BestWarrior", 1);
            cm.sendNormalTalk("#b我最先完成了收集战利品的任务！", 3, 0, false, true);
            cm.gainItem(4034993, -30)
        } else {
            if (status === a++) {
                if (cm.isQuestActive(63062)) {
                    cm.updateInfoQuest(63062, "End=1;Start=1");
                    cm.forceStartQuest(63254, "stand")
                }
                cm.forceCompleteQuest(63036);
                cm.updateInfoQuest(63033, "dayNW=1");
                cm.updateInfoQuest(63033, "dayNW=1;lastDate=20/01/12");
                cm.gainExp(635200);
                cm.updateInfoQuest(63036, "count=1");
                cm.sendNormalTalk_Bottom("恭喜你今天也成为了最强勇士！\r\n该放鞭炮庆祝一下！", 37, 9400205, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(317600);
                    if (cm.isQuestFinished(63037)) {
                        cm.dispose();
                        return
                    }
                    cm.forceCompleteQuest(63037);
                    cm.updateInfoQuest(63037, "exp=1");
                    cm.updateInfoQuest(63097, "speak=0;WE1=1");
                    cm.askMenu_Bottom("看来你真的很适合在这里生活。你怎么看？#b\r\n#L1#虽然这地方很有趣，但一想到要战斗一辈子，就觉得好辛苦。#l\r\n#L2#要无休止地战斗吗？想想就好可怕……#l\r\n#L3#我必须回冒险岛世界。这里合不合适我都不是目前要考虑的问题。#l\r\n#L0#这地方真的很适合我。一辈子在这里战斗，生活下去似乎也很幸福呢？#l", 37, 9400205)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你去其他地方看看怎么样？说不定有更适合你的地方。", 37, 9400205, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b嗯。反正也要找钥匙，到其他地方去看看好了。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("那我现在送你前往下个地点！你喜欢的话，以后也可以再回到勇士之地。", 37, 9400205, true, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(867113300, 0, false)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};