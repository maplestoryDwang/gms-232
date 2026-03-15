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
            cm.sendNormalTalk("看来你在用我传授的技术出色地执行任务呢？很好，你在实践方面也表现出了卓越的水平。", 0, 3001250, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……虽然你从不在意别人的评价……但就当我这句话是在夸你进步了吧。", 0, 3001250, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你已经掌握了我传授的技术，我们进入下一阶段吧。接下来，我来教你第三项战斗技术。", 0, 3001250, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这一技术比你之前学习过的都要难，不过我相信你一定可以完美掌握它的。", 0, 3001250, true, true)
                    } else {
                        if (status === a++) {
                            cm.gainItem(1143055, 1);
                            cm.gainItem(1353302, 1);
                            cm.forceStartQuest(34697, "");
                            cm.forceCompleteQuest(34697);
                            cm.forceStartQuest(34658, "");
                            cm.forceCompleteQuest(34658);
                            cm.updateInfoQuest(1073, "6400=10;6410=53;6411=81");
                            cm.changeJob(6411);
                            cm.sendNormalTalk("我带来了符合你成长阶段的强力技术。打开技能栏(K)看看吧。", 0, 3001250, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……这是我能交给你的最后一项技术。相信总有一天你能熟练掌握这些技术，并将它们融会贯通化为己用的。", 0, 3001250, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("到那时，以你全部的战斗经验为基础，创造一套你自己的技术吧。我能够传授你的就只有这些了。", 0, 3001250, true, false)
                                } else {
                                    if (status === a++) {
                                        cm.teachSkill(64101001, 20, 0);
                                        cm.teachSkill(64101002, 19, 0);
                                        cm.dispose()
                                    }
                                }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34658.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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