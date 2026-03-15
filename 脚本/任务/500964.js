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
            cm.askYesNo("初次见面，\r\n我是#b冒险家吉恩#k，为维护冒险岛世界安全而努力的勇士们提供帮助。\r\n能请你抽出一点时间来吗？", 4, 9310650)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("谢谢。\r\n正如勇士你所了解的，冒险岛世界总出现 一些大大小小的问题，\r\n这也是我来找到#b#h0##k的原因。", 4, 9310650, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我想拜托强大的勇士，来更好地解决冒险岛世界的各种问题。\r\n当然我也准备帮助勇士你更快成长。", 4, 9310650, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("首先请你收下我所准备的#r[冒险岛支援]冒险家吉恩的支援#k技能。", 4, 9310650, true, true)
                    } else {
                        if (status === a++) {
                            cm.teachSkill(80011957, 1, 1);
                            cm.forceStartQuest(500964, "");
                            cm.forceCompleteQuest(500964);
                            cm.sendNormalTalk("请双击0转技能栏中#r[冒险岛支援]冒险家吉恩的支援#k技能。", 4, 9310650, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("要求非常简单。只要勇士你完成冒险岛世界的主要任务，或者参与各种活动之后，就可以获得冒险分数，这会一点点装满数值条。\r\n获得一定量的分数之后，我将会为勇士你发放有助于成长的特别奖励。\r\n\r\n#e#r但请你务必记住，以最后一次结算为标准，每隔3个小时可结算一次！#k#n", 4, 9310650, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("最后，我来为你说明#e特别优惠#n。目前可以获得的特别优惠总共包含6个特殊效果，可以在#b世界内所有角色间通用#k。\r\n#e#b尤其当冒险分数达到500分以后，世界内所有的角色都可以进行互动交换、交易！#k#n \r\n（互动交换、交易 包含：可以捡取他人丢弃及丧失所有权的物品，进行玩家间的游戏道具/现金道具交易，使用拍卖场购买或出售道具；）", 4, 9310650, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我说的太多了，勇士你应该很忙吧。如果想了解什么，就点击UI的#e[？]#n按钮，我将会为你详细说明", 4, 9310650, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500964.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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