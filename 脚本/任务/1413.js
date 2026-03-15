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
            cm.sendNormalTalk("你想选择枪骑士之路吗？枪骑士就如同名字一样，是使用枪或矛等长柄武器的职业。在战士中攻击范围最远，动作最华丽。", 0, 1022000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("作为战士，枪骑士的技能中有很多自我强化技能。让自己熟练使用武器的 #b精准武器#k，造成强力伤害的#b终极枪矛#k，提高攻击速度的#b快速武器#k，使身体变得强壮的#b物理训练#k等等。", 0, 1022000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("当然还有更强大的攻击技能。你知道#b贯穿刺透#k技能吗？它是攻击近距离敌人时会增加额外的暴击几率, 而攻击远距离敌人时会增加总体伤害的强大技能。", 0, 1022000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("但是枪骑士的技能中最后名的应该是#b神圣之火#k。那是可以暂时提高包括自己在内的全体队员的最大血量和最大魔量的技能，在角色等级较高的时候仍然很有用。", 0, 1022000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b极限防御#k也是不能不提到的技能。因为它可以在一定时间内提高队员的物理防御力和魔法防御力。当然……对于那些觉得喝很多药水也没事的人来说，应该没什么关系。", 0, 1022000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("说明就到此为止。现在是选择的时间了。你想当枪骑士吗？如果愿意，我就把你送到我准备的考场去。你只要在里面找到#r30个蕴含黑暗力量的珠子#k，你就能成为真正的枪骑士。", 0, 1022000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("只要你接受任务，就可以马上开始考试。如果不愿意的话，就现在拒绝。拒绝之后，听听其他道路的说明也不错。怎么样……你想参加枪骑士的考试吗？", 0, 1022000)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(1413, "");
                                        cm.dispose();
                                        cm.warp(910230000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1413.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("#t4031013#全部搜集到啦。在你身上可以看到成为枪骑士的素质。你一定可以把枪用得比剑更好。好的，你想成为枪骑士吗？", 0, 1022000)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1413, "");
                cm.forceCompleteQuest(1413);
                cm.forceCompleteQuest(29901);
                cm.teachSkill(254, 0, -1);
                cm.updateInfoQuest(1073, "100=10;130=204");
                cm.forceStartQuest(17904, "1");
                cm.forceCompleteQuest(17904);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(130);
                cm.sendNormalTalk("好的！从现在起你就是#b枪骑士#k了！用长柄武器不断地骚扰敌人的执着的战士——枪骑士。希望你能相信自己的力量，继续前进。", 0, 1022000, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4031013, -30);
                    cm.gainItem(1142108, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("今后你会获得比现在更强的力量，但是决不能把那种力量用在弱者身上。必须把自己的力量用在正确的事情上，那是你的责任。", 0, 1022000, true, false);
                    cm.dispose()
                }
            }
        }
    }
};