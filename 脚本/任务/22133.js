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
            cm.sendNormalTalk("主人……我感觉体内突然充满了力量！", 1, 1013000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我也感觉力量在不断涌现！", 3, 1013000, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(22130);
                    cm.forceCompleteQuest(22131);
                    cm.forceCompleteQuest(22132);
                    cm.teachSkill(22170075, 0, 10);
                    cm.teachSkill(22170074, 0, 10);
                    cm.teachSkill(22170072, 0, 10);
                    cm.teachSkill(22170071, 0, 10);
                    cm.teachSkill(22170070, 0, 10);
                    cm.teachSkill(22171068, 0, 10);
                    cm.teachSkill(22171073, 0, 10);
                    cm.teachSkill(22171095, 0, 10);
                    cm.teachSkill(22170067, 0, 20);
                    cm.teachSkill(22171063, 0, 10);
                    cm.teachSkill(22171062, 0, 10);
                    cm.teachSkill(22170060, 0, 10);
                    cm.updateInfoQuest(1073, "2200=10;2211=31;2214=62;2217=126");
                    cm.changeJob(2217);
                    cm.forceStartQuest(22133, "");
                    cm.forceCompleteQuest(22133);
                    cm.sendNormalTalk("米乐，你……", 3, 1013000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯？怎么了，主人？", 1, 1013000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("现在你已经变成一条威风凛凛的龙了。", 3, 1013000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("跟主人一起旅行，不知不觉就长大了！主人，你的个子好像也变高了！", 1, 1013000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("以后一定要继续帮我哟，米乐！", 3, 1013000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("没问题！让我们一起努力吧，主人！", 1, 1013000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.playerMessage(5, "龙长大了!");
                                            cm.playerMessage(5, "龙可以使用新的技能了.");
                                            cm.forceStartQuest(22618, "");
                                            cm.forceCompleteQuest(22618);
                                            cm.gainItem(1190519, 1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22133.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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