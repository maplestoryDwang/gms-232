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
            cm.sendNormalTalk("你想走剑客之路吗？我来为你简单地说明一下剑客。剑客是最一般意义上的战士。主要使用的武器是#b剑#k和#b斧#k。", 0, 1022000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("作为战士，剑客的技能中有很多自我强化技能。让自己熟练使用武器的 #b精准武器#k，造成强力伤害的#b终极剑斧#k，提高攻击速度的#b快速武器#k，使身体变得强壮的#b物理训练#k等等。", 0, 1022000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("当然还有更强大的攻击技能。你知道#b轻舞飞扬#k技能吗？它是挥舞刀剑或者斧头给予眼前的敌人施加二连击的技能, 要是有了它, 狩猎也会比之前容易很多。", 0, 1022000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("攻击时若能激活#b斗气集中#k的话, 就可以累积斗气点数, 并通过它使用更强大的斗气消耗技能。", 0, 1022000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("好了，说明就到这里。下面是选择时间。你想选择剑客吗？选择的话，我就把你送到准备好的考场去。在里面搜集#r30个含有黑暗力量的珠子#k，就可以成为真正的剑客。", 0, 1022000, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline("只要你接受任务，就可以马上开始考试。如果不愿意的话，就现在拒绝。拒绝之后，听听其他道路的说明也不错。怎么样……你想参加剑客的考试吗？", 0, 1022000)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(1411, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1411.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("#t4031013#全部搜集到啦。非常好！我知道你一定可以做到。你展现出了一个好剑客的资质。现在你可以成为剑客了。好的，最后我再问你一次。你想成为剑客吗？", 0, 1022000)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1411, "");
                cm.forceCompleteQuest(1411);
                cm.forceCompleteQuest(29901);
                cm.teachSkill(252, 0, -1);
                cm.updateInfoQuest(1073, "100=10;110=201");
                cm.forceStartQuest(17904, "1");
                cm.forceCompleteQuest(17904);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(110);
                cm.sendNormalTalk("好的！从现在起你就是#b剑客#k了！剑客是为了追求力量而不断战斗的人……希望你不要失去斗志，勇敢前行。", 0, 1022000, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4031013, -30);
                    cm.gainItem(1142108, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("今后你会获得比现在更强的力量，但是决不能把那种力量用在弱者身上。必须把自己的力量用在正确的事情上，那是你的责任。", 0, 1022000, true, false)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("好的！从现在起你就是#b剑客#k了！剑客是为了追求力量而不断战斗的人……希望你不要失去斗志，勇敢前行。", 0, 1022000, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("今后你会获得比现在更强的力量，但是决不能把那种力量用在弱者身上。必须把自己的力量用在正确的事情上，那是你的责任。", 0, 1022000, true, false);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}