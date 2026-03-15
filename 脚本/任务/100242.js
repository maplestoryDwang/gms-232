var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.askMenu("#e#b<新复古战士>#k \r\n 来自异界的勇士！有什么可以帮你呢？#n\r\n\r\n#L0##b#e召唤新复古战士的方法。#n#k#l\r\n\r\n#L1##b#e派新复古战士参战的方法。#n#k#l\r\n\r\n#L2##b#e查看新复古战士训练状态。#n#k#l", 4, 9062179)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {} else {
        if (status === a++) {
            cm.sendNormalTalk("我给你说明一下召唤#b新复古战士#k的方法！", 4, 9062179, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("进入#e#b等级范围怪物#k#n出没的猎场时，\r\n会自动激活#s80002725##b#e[新复古战士]#n#k技能，\r\n#b新复古战士#k现身跟随你一起行动。\r\n与他们一起狩猎时，可以获得#b新复古能量#k。", 4, 9062179, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("当然，你也可以在#b#e技能窗口#k#n里鼠标#e#b右击#k#n，把新复古战士\r\n送回新复古王国，或是重新召唤过来。", 4, 9062179, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("虽然一开始只有#b#e新人魔法师皮皮#k#n与你一起作战，\r\n但只要你领着新复古战士勤奋收集#b#e新复古能量#n#k，\r\n提高技能等级，很快会有#b#e其他新复古战士#n#k来加入你的队伍。", 4, 9062179, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("最后有个注意事项！\r\n新复古战士只有在你#b#e每日可收集的新复古能量#k#n还有剩余的情况下才能一起作战，这点你要记牢了。", 4, 9062179, true, true)
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

function action分支1(d, c, b, a) {
    if (status <= a++) {} else {
        if (status === a++) {
            cm.sendNormalTalk("我给你说说派#b新复古战士#k参战的方法！", 4, 9062179, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("与#b新复古战士#k一起#r消灭#r等级范围怪物#k，收集#b新复古能量#k的过程中，新复古战士周围会出现#e#b魔法阵#k#n。", 4, 9062179, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("魔法阵会经#b四个阶段#k逐渐扩大，达到最终阶段时，可以在#r#e20秒内#n#k按下#b技能键#k派遣新复古战士#r投入战斗#k。", 4, 9062179, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("如果想派出多个新复古战士投入战斗，多次按下#b#e技能键#k#n就行。\r\n每次使用技能时，将#b#e召唤1名新复古战士#n#k，在#b#e1分钟内#n#k攻击范围内的敌人。", 4, 9062179, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("参战顺序为，第一个是#b#e新人魔法师皮皮#n#k，\r\n\r\n第二个是#b#e宝物猎人罗伊德#n#k，\r\n\r\n最后是#e#b龙骑士海利尔#k#n。\r\n#i03801387##i03801388##i03801389#", 4, 9062179, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b新复古战士#k参战时，你将立即获得#b#e500点新复古能量#n#k，一同战斗期间还能享受#e#b额外经验值+100%#k#n的增益。", 4, 9062179, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("在#b新复古战士#k参战状态下#r脱离战场时，#k\r\n新复古战士也会停止战斗，重新跟随你行动。\r\n那么，我们的#b新复古战士#k就拜托给你咯！", 4, 9062179, true, true)
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

function action分支2(d, c, b, a) {
    if (status <= a++) {} else {
        if (status === a++) {
            cm.sendNormalTalk("#e#b[当前等级信息]#k#n\r\n\r\n - #e新复古战士等级：1#n\r\n - #e累积新复古能量：0#n\r\n - #e至下一等级所需的新复古能量：20000#n", 4, 9062179, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b#e[下一等级信息]#k#n \r\n\r\n#e达到#r下一等级#k时，将有两名新复古战士与勇士一同作战。#n\r\n\r\n - #e新人魔法师皮皮#n\r\n \n\n #i03801387#\r\n - #e宝物猎人罗伊德#r[new]#k#n\r\n \n\n #i03801388#", 4, 9062179, true, true)
            } else {
                if (status === a++) {
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100242.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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