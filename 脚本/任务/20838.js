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
            cm.sendNormalTalk("#b(怦怦……)#k", 1, 1102104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……啊！吓死我了！我快要忙死了，没发现有人过来。你就是#p1102006#所说的那个初心者？很高兴见到你！我叫#p1102007#。你想现在开始考试吗？并不难，只要好好记住之前学过的就行。", 1, 1102104, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("考试很简单。看到那边的箱子了吗？破坏掉箱子之后，就会有怪物出现。消灭掉怪物之后，可以获得考试的证物。", 1, 1102104, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯？你问打破箱子的办法？啊，箱子仅对普通攻击起反应。\r\n所以你用#b普通攻击打碎箱子#k，对#b怪物还是用技能攻击#k更方便些！你去收集3个考试的证物吧。", 1, 1102104, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(20838, "");
                            cm.effect_OnUserEff("UI/tutorial.img/9");
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20838.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("3个考试的证物拿来了吗？", 1, 1102104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊哈～果然名不虚传。考试合格了。我送给你的椅子，是我亲手制作的。希望你能好好使用。累了的时候，可以坐在上面休息一下，血量就会快速回复。应该已经放到背包设置栏中了，你可以去确认一下。", 1, 1102104, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(20838);
                    cm.gainItem(4033670, -3);
                    cm.gainItem(3010060, 1);
                    cm.dispose()
                }
            }
        }
    }
};