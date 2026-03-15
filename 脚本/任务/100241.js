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
            cm.sendNormalTalk_Bottom("你好！#b来自异界的勇士#k。\r\n\r\n你是特地前来给我们#b新复古王国#k提供帮助的吧！", 36, 9062179, false, true, 3)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我们新复古王国为了对抗邪恶的#r#e魔王皮洛克#n#k，\r\n\r\n召集王国里的各路勇士结成了#b#e新复古战士#k#n。", 36, 9062179, true, true, 3)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("然而，相比日渐强大的魔王，\r\n\r\n#b#e新复古战士#k#n的经验实在远远不足。", 36, 9062179, true, true, 3)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你的力量比我们强大得多……\r\n\r\n肯定可以#b帮助#k到我们新复古战士……", 36, 9062179, true, true, 3)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("#b#e#h0#！#k#n\r\n\r\n你来协助新复古战士开展实战训练，怎么样？", 36, 9062179, 3)
                        } else {
                            if (status === a++) {
                                cm.teachSkill(80002725, 0, -1);
                                cm.teachSkill(80002725, 1, 0);
                                cm.teachSkill(80002725, 1, 0);
                                cm.forceCompleteQuest(100241);
                                cm.updateInfoQuest(100243, "sp=0");
                                cm.updateInfoQuest(100243, "sp=0;acc=0");
                                cm.updateInfoQuest(100243, "sp=0;acc=0;sError=0");
                                cm.openUIWithOption(3, 80002725);
                                cm.playerMessage(5, "获得了[新复古战士]技能。");
                                cm.playerMessage(5, "从现在起，进入等级范围怪物出没的猎场时，新人魔法师皮皮就会前来助阵。");
                                cm.sendNormalTalk_Bottom("谢谢！你果然值得依赖！\r\n我这就给你发放用来召唤新复古战士的#s80002725# #b#e[新复古战士]#n#k技能。\r\n\r\n接下来，你在#b#e等级范围怪物#n#k出没的地方使用该技能，\r\n\r\n#b新复古战士#k就会现身，跟随你一起行动。", 132, 9062179, false, true, 3)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("与新复古战士一起消灭怪物时，可以获得#b新复古能量#k，\r\n\r\n收集到足够的新复古能量后，还可以派#b新复古战士#k投入战斗。", 36, 9062179, true, true, 3)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b#i03801387#\r\n虽然一开始只有#b#e新人魔法师皮皮#n#k与你一起作战，\r\n\r\n但等你收集更多#e#b新复古能量#n#k，证明自己的强大后，\r\n\r\n会有#b更多新复古战士#k来到你身边的。", 132, 9062179, true, true, 3)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("那么，我们的#b#e新复古战士#k#n就拜托你多多关照了。", 36, 9062179, true, true, 3)
                                        } else {
                                            if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100241.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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