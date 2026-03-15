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
            cm.sendNormalTalk_Bottom("作为探险队的队长，就让我来给你简单介绍一下我们冒险岛探险队吧！", 36, 9401219, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你应该知道，冒险岛世界各地还隐藏着许多不为人所知的神秘，\r\n如此多的神秘也让许多想要解开隐藏之谜的组织应运而生。", 36, 9401219, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我们#b冒险岛探险队#k的主要目标就是踏足其中尚未有人挑战的偏远之地，前往最为极限的环境，挖掘那里被遗忘的遗物。", 36, 9401219, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你问为什么要前往极限的偏远之地探险？那当然是因为……\r\n\r\n#fs30#好玩啊！", 36, 9401219, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("...", 56, 0, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我说笑的，那什么，虽然也不全是说笑啦，不过总之……", 36, 9401219, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那些任何人都能挑战的地方已经被不少人盯上了，竞争如此激烈，收获也不会多嘛？", 36, 9401219, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("所以我希望尽可能挑战全新的地方，谁也没有想到过的地方，还藏有更多神秘和未知的地方……\r\n那便是我们#b冒险岛探险队#k的追求。", 36, 9401219, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("当然这也表示，我们的挑战常有危险相伴。\r\n正因为此，我们才需要招募像#h0#你这般出色的队员嘛？", 36, 9401219, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.askMenu_Bottom("你肯定也不想白干活吧？一场充满了未被任何人抢占先机的未知宝物的冒险，怎么样，是不是很诱人呢？\r\n#L0#有点意思。#l\r\n#L1#我不感兴趣。#l", 32, 9401216, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("是吧？只要探险成绩不错，想要多少丰厚的奖励我们都有，你就放心听我说完！", 36, 9401219, false, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(65631);
                                                        cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
                                                        cm.effect_OnUserEff("Effect/BasicEff.img/QuestClear");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65631.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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