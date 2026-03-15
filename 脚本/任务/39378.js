var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    var reactor = "action" + cm.getNumberFromQuestInfo(cm.getQuest(), "q");
    eval(reactor)(mode, type, selection)
}

function action0(d, c, b) {
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
            cm.askYesNo("[向导任务]符文，随机传送口\r\n#b - 目标：使用符文或随机传送（保罗，普利托）入场\r\n\r\n#k（点击“是”时，在听完相关说明之后，开始向导任务。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("升级所需的经验值一般通过狩猎怪物获得。因此怪物所在的地方被称为#b狩猎场#k。", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在冒险岛世界中，大部分狩猎场都有#r符文、随机传送口#k。这些要素可以为冒险家们狩猎怪物的时候增添一点乐趣及附加效果。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b#e<符文>#k#n\r\n\r\n在狩猎场中有没有见过蕴含神秘力量的符文呢？不同的符文拥有不同的效果，\r\n但全都拥有#b额外获得100%经验值效果#k。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b#e<符文>#k#n\r\n\r\n靠近符文后输入#bNPC/采集快捷键#k，然后#b按照箭头输入正确的方向#k，就能获得符文效果。\r\n如果想详细查看符文种类，请通过主页的向导“符文”确认！", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b#e<保罗和普利托的悬赏狩猎>#k#n\r\n\r\n在狩猎场中出现的随机传送口是赏金猎人保罗和普利托兄弟召唤的传送口。这对赏金猎人兄弟总是缺少人手，因此正在通过随机传送口招募冒险岛世界的勇士。", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b#e<保罗和普利托的悬赏狩猎>#k#n\r\n\r\n在狩猎场中出现的随机传送口有2种。\r\n\r\n- 悬赏狩猎\r\n   * 与保罗一起进行的以战斗为主的游戏\r\n   * 与普利托一起进行的解谜型冒险游戏\r\n\r\n- 火焰狼\r\n   * 与其他玩家一起狩猎大型怪物", 4, 9010000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b#e<保罗和普利托的悬赏狩猎>#k#n\r\n\r\n进入随机传送口帮助赏金猎人兄弟时，除了基本的经验值之外，还能获得各种奖励道具作为酬劳，所以在狩猎场中发现随机传送口之后千万不要错过！\r\n\r\n（即使进入随机传送口，狩猎场中积累的连击也#r不会初始化#k。但完成随机传送口游戏后，在等候室中#b滞留一定时间以上，连击就会初始化#k。）", 4, 9010000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("除了符文和随机传送口之外，#r斗燃地区和突发任务#k也是在狩猎怪物过程中提供乐趣的要素，所以最好了解一下。", 4, 9010000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b#e<斗燃地区>#k#n\r\n\r\n进入狩猎场时，你有没有发现画面中央有斗燃地区几个字？这就说明那里是斗燃地区！ ", 4, 9010000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#b#e<斗燃地区>#k#n\r\n\r\n有#b100级以上怪物#k登场的狩猎场，在一定时间内没有角色进入时，就会变成斗燃地区，斗燃地区阶段会逐渐提高。\r\n斗燃地区共分为#b1阶段到10阶段#k。阶段越高，可以获得的经验值增加效果越高。", 4, 9010000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#b#e<突发任务>#k#n\r\n\r\n在狩猎过程中，你有没有遇到游戏画面右侧出现烟花一样的效果，然后开始#b突发任务#k的情况？\r\n突发任务由可以在狩猎过程中执行的内容构成。在狩猎的同时，还能获得任务奖励，可谓一石二鸟！", 4, 9010000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("希望你能善用狩猎场的各种要素，享受快乐战斗并快速升级~", 4, 9010000, true, false);
                                                            cm.updateInfoQuest(cm.getQuest(), "q=0");
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
}

function action1(d, c, b) {
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
            cm.sendNormalTalk("[向导任务]符文，随机传送口\r\n#b - 目标：使用符文或随机传送（保罗，普利托）入场\r\n\r\n#k勇士，你已经达到了本次向导任务\r\n的#r完成条件#k。\r\n\r\n这是我的一点心意。", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(73395);
                cm.updateInfoQuest(cm.getQuest(), "q=2");
                cm.sendNormalTalk("今后请继续努力！\r\n\r\n如果想再听一遍任务说明，\r\n可以随时重新点击#b该等级段的向导任务按钮#k。\r\n", 4, 9010000, true, false);
                cm.dispose()
            }
        }
    }
}

function action2(d, c, b) {
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
            cm.askYesNo("[向导任务]符文，随机传送口\r\n#b - 目标：使用符文或随机传送（保罗，普利托）入场\r\n\r\n#k已经#r完成的向导任务#k。\r\n\r\n#k（点击“是”时，可以再听一遍说明。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("升级所需的经验值一般通过狩猎怪物获得。因此怪物所在的地方被称为#b狩猎场#k。", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在冒险岛世界中，大部分狩猎场都有#r符文、随机传送口#k。这些要素可以为冒险家们狩猎怪物的时候增添一点乐趣及附加效果。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b#e<符文>#k#n\r\n\r\n在狩猎场中有没有见过蕴含神秘力量的符文呢？不同的符文拥有不同的效果，\r\n但全都拥有#b额外获得100%经验值效果#k。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b#e<符文>#k#n\r\n\r\n靠近符文后输入#bNPC/采集快捷键#k，然后#b按照箭头输入正确的方向#k，就能获得符文效果。\r\n如果想详细查看符文种类，请通过主页的向导“符文”确认！", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b#e<保罗和普利托的悬赏狩猎>#k#n\r\n\r\n在狩猎场中出现的随机传送口是赏金猎人保罗和普利托兄弟召唤的传送口。这对赏金猎人兄弟总是缺少人手，因此正在通过随机传送口招募冒险岛世界的勇士。", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b#e<保罗和普利托的悬赏狩猎>#k#n\r\n\r\n在狩猎场中出现的随机传送口有2种。\r\n\r\n- 悬赏狩猎\r\n   * 与保罗一起进行的以战斗为主的游戏\r\n   * 与普利托一起进行的解谜型冒险游戏\r\n\r\n- 火焰狼\r\n   * 与其他玩家一起狩猎大型怪物", 4, 9010000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b#e<保罗和普利托的悬赏狩猎>#k#n\r\n\r\n进入随机传送口帮助赏金猎人兄弟时，除了基本的经验值之外，还能获得各种奖励道具作为酬劳，所以在狩猎场中发现随机传送口之后千万不要错过！\r\n\r\n（即使进入随机传送口，狩猎场中积累的连击也#r不会初始化#k。但完成随机传送口游戏后，在等候室中#b滞留一定时间以上，连击就会初始化#k。）", 4, 9010000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("除了符文和随机传送口之外，#r斗燃地区和突发任务#k也是在狩猎怪物过程中提供乐趣的要素，所以最好了解一下。", 4, 9010000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b#e<斗燃地区>#k#n\r\n\r\n进入狩猎场时，你有没有发现画面中央有斗燃地区几个字？这就说明那里是斗燃地区！ ", 4, 9010000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#b#e<斗燃地区>#k#n\r\n\r\n有#b100级以上怪物#k登场的狩猎场，在一定时间内没有角色进入时，就会变成斗燃地区，斗燃地区阶段会逐渐提高。\r\n斗燃地区共分为#b1阶段到10阶段#k。阶段越高，可以获得的经验值增加效果越高。", 4, 9010000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#b#e<突发任务>#k#n\r\n\r\n在狩猎过程中，你有没有遇到游戏画面右侧出现烟花一样的效果，然后开始#b突发任务#k的情况？\r\n突发任务由可以在狩猎过程中执行的内容构成。在狩猎的同时，还能获得任务奖励，可谓一石二鸟！", 4, 9010000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("希望你能善用狩猎场的各种要素，享受快乐战斗并快速升级~", 4, 9010000, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39378.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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