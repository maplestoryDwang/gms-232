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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21750.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("……战神？……这是我的幻觉吗？战神你……真的还活着吗？啊……谢天谢地……", 8, 2131000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……嗯，不好意思，我不记得你了。", 2, 2131000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……嗯？你说什么，战神？你……不是战神吗？保护我们的英雄，战神……那不就是你吗？", 8, 2131000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(详细说明醒来之后的情况。)#k", 2, 2131000, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("……原来如此。原来你失去了记忆，并且在几百年后的世界醒了过来。这么说来，这里对你而言应该是过去的世界……", 0, 2131000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("看来我得重新向你介绍了我的名字是#p2131000#。#b战神的朋友#p2131000##k。几个月前，你在和黑魔法师的战斗中牺牲，我们则逃了出来……", 0, 2131000, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("在你阻挡住黑魔法师的时候，我们乘坐飞艇逃到了金银岛。但是受到了龙的攻击，没能到达南部的平原，而是迫降在了这里。", 0, 2131000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("但是我们不能就此放弃……我们于是在这里定居下来。一边休养生息，一边准备建造新的村庄。", 0, 2131000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("为了开垦荒无人烟的金银岛，一起来的青年们全都到村外去了。所以村里只剩下受伤的人，以及妇女和孩子。", 0, 2131000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("战神，你为什么要到这里来呢？", 0, 2131000, true, false);
                                                cm.forceStartQuest(21750, "");
                                                cm.forceCompleteQuest(21750);
                                                cm.gainExp(17730);
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
};