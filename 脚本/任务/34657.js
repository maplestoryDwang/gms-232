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
            cm.sendNormalTalk("看来你在用我传授的技术出色地执行任务啊。很好，你在实践方面的表现也非常优秀。", 0, 3001250, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("虽然你的性格太过自由散漫，有时会让我有些担心。不过……我必须承认，你的天赋确实出众。", 0, 3001250, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你已经掌握了我传授的技术，我们进入下一阶段吧。接下来，我来教你第二项战斗技术。", 0, 3001250, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这一技术比你之前学习过的都要难，不过我相信你一定可以完美掌握它的。", 0, 3001250, true, true)
                    } else {
                        if (status === a++) {
                            cm.gainItem(1143054, 1);
                            cm.gainItem(1353301, 1);
                            cm.forceStartQuest(34657, "");
                            cm.forceCompleteQuest(34657);
                            cm.updateInfoQuest(1073, "6400=10;6410=53");
                            cm.forceStartQuest(34696, "");
                            cm.forceCompleteQuest(34696);
                            cm.changeJob(6410);
                            cm.sendNormalTalk("过不了多久，你就会接到越来越危险的任务了。我已经把足以应付任务的技术都教给你了。打开技能栏(K)看看吧。", 0, 3001250, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("希望你以后也能够继续脚踏实地，取得更大的进步。只要你不断磨练自己，终有一天所谓强大的技术都会变成无用之物的。", 0, 3001250, true, false);
                                cm.dispose()
                            }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34657.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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