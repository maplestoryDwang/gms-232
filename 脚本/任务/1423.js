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
            cm.sendNormalTalk("你想选择侠客之路吗？侠客是主要使用短剑的飞侠。是在近距离快速攻击敌人，抢走敌人身上的东西的职业……", 0, 1052001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("其特长是通过#b精准短刀#k和#b快速短刀#k提高短剑的熟练度和攻击速度后，用#b神通术#k攻击多个敌人，抢夺物品，或者使用#b回旋斩#k向敌人发动连续攻击。", 0, 1052001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b金钱护盾#k和#b盾防精通#k可以使近距离战斗的危险降到最低。通过#b命运#k，可以提高自己的攻击力。", 0, 1052001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯……好像说太多了。你想选择侠客之路吗？那就参加考试吧。不是什么复杂的考试。只要进入准备好的考场，消灭怪物，搜集#r30个含有黑暗力量的珠子#k就可以了。内容非常简单，但是……那里的怪物比普通怪物更强，会不会有问题呢？", 0, 1052001, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("考试的时候药水用光了的话，就必须#b放弃任务重新开始#k。所以必须准备好之后再进去。好的，考试马上开始。准备好了的话，我就把你送到考试沼泽去。", 0, 1052001)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(1423, "");
                                cm.dispose();
                                cm.warp(910370000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1423.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("#t4031013#全部拿来啦。很能干嘛？让你成为侠客，好像不错。那么……我马上让你变成侠客。准备好了吗？", 0, 1052001)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1423, "");
                cm.forceCompleteQuest(1423);
                cm.forceCompleteQuest(29901);
                cm.teachSkill(262, 0, -1);
                cm.updateInfoQuest(1073, "400=10;420=202");
                cm.forceStartQuest(17904, "1");
                cm.forceCompleteQuest(17904);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(420);
                cm.sendNormalTalk("好的，从现在开始你就是#b侠客#k。侠客是以快速行动和技巧压制敌人的人。希望你能更加努力修炼。", 0, 1052001, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4031013, -31);
                    cm.gainItem(1142108, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("刺客必须变得更强。但是决不能把那种力量用在弱者身上。把自己的力量用在正确的事情上，比变强更加困难。", 0, 1052001, true, false);
                    cm.teachSkill(4201012, 20, 0);
                    cm.forceCompleteQuest(14008);
                    cm.dispose()
                }
            }
        }
    }
};