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
            cm.sendNormalTalk("你能跟我说说和黑魔法师的战斗之后……到底发生了什么事吗？听说你们把黑魔法师封印了起来。此外，为了保护#m101050000#，你们也把村子封印了起来。但是其他的我就不知道了……请告诉我。", 0, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(说明了封印黑魔法师，受到黑魔法师诅咒，精灵们因为诅咒而被困在冰里，把村子封印起来等待诅咒消失，因为封印变弱而醒来，以及村子现在的情况。)", 2, 1012100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这么说，除了双弩精灵之外，村里醒过来的人就只有#p1033100#、#p1033101#和#p1033102#了。他们一定也变弱了……还好怪物也比以前弱了，不会发生什么危险的事情。", 0, 1012100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("对了……能跟我说说你的事情吗？在我们去战斗的时候，我让你到金银岛避难，之后发生了什么事情……现在的冒险岛世界怎么样了？跟我好好说说吧。", 2, 1012100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("(听到了避难之后定居，建设村庄，在几百年时间里一直很和平的金银岛的事情。)", 0, 1012100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("事实上，我以为黑魔法师会就此消失。看着凯琳为了给德斯托耐报仇而奔走，我也仍然这么认为……但是随着新皇帝#p1101000#的出现，情况发生了剧变。", 0, 1012100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("新的皇帝……#p1101000#？", 2, 1012100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b(听到了黑魔法师复活的传闻，名叫黑色之翼的组织开始活动，冒险骑士团的成立和班·雷昂的登场，等待。)", 0, 1012100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("啊，我还见到了战神。虽然因为时空扭曲，见面的过程有点复杂。", 0, 1012100, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("战神？战神还活着吗？", 2, 1012100, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("是的，虽然因为诅咒的影响，还没完全恢复记忆。不光忘记了我，连黑魔法师的记忆也完全失去了。即使是这样，他还是在和黑色之翼战斗。", 0, 1012100, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("战神……没想到他还活着。还能再见到他吗？", 2, 1012100, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.askAcceptDecline("他正在为了找回力量和记忆在冒险岛世界旅行，说不定可以遇到他。对了……虽然你可能很忙，不过你能和我一起到#b#m101050000##k去一趟吗？好久没回村里去了，我想回去看看。", 0, 1012100)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#p1033100#长老，#p1033101#姐姐……不，#p1033101#长老，#p1033102#长老。我非常想念他们。我们快去吧。", 0, 1012100, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("啊……等等，我忘了一件事。我去取一下东西，请稍等一下。", 0, 1012100, true, false)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceStartQuest(24071, "");
                                                                        cm.forceCompleteQuest(24071);
                                                                        cm.dispose();
                                                                        cm.warp(910080010, 0, false);
                                                                        cm.spawnMobLimit(9300429, 1, -422, -7, 100);
                                                                        cm.spawnMobLimit(9300429, 1, -261, -7, 100);
                                                                        cm.spawnMobLimit(9300429, 1, -120, -7, 100);
                                                                        cm.spawnMobLimit(9300429, 1, 385, -7, 100);
                                                                        cm.spawnMobLimit(9300429, 1, 236, -7, 100);
                                                                        cm.spawnMobLimit(9300429, 1, 106, -7, 100);
                                                                        cm.spawnMobLimit(9300429, 1, -422, -7, 100);
                                                                        cm.spawnMobLimit(9300429, 1, -261, -7, 100);
                                                                        cm.spawnMobLimit(9300429, 1, -120, -7, 100);
                                                                        cm.spawnMobLimit(9300429, 1, 385, -7, 100);
                                                                        cm.spawnMobLimit(9300429, 1, 236, -7, 100);
                                                                        cm.spawnMobLimit(9300429, 1, 106, -7, 100);
                                                                        cm.getPlayer().scheduleWarpTask(17, cm.getMap(100000201))
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/24071.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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