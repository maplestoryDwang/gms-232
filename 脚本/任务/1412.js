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
            cm.sendNormalTalk("你想选择准骑士之路吗？准骑士是拥有自制力，防备敌人，用强大的力量保护他人的人。主要使用的武器是#b剑#k和#b钝器#k。", 0, 1022000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("作为战士，准骑士的技能中有很多自我强化技能。让自己熟练使用武器的 #b精准武器#k，造成强力伤害的#b终极剑钝器#k，提高攻击速度的#b快速武器#k，使身体变得强壮的#b物理训练#k等等。", 0, 1022000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不仅如此。对于准骑士而言, 还有#b威胁#k技能, 即可以在一定时间内震慑多数敌人。也算是向敌人真实地展现冷酷的准骑士之特点吧？", 0, 1022000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("当然还有更强大的攻击技能。你知道#b火焰冲击和寒冰冲击#k技能吗？它是瞬间给武器赋予火属性或者冰属性, 并以此给予敌人属性伤害的技能, 若有了它, 狩猎也会比之前轻松很多的。", 0, 1022000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("利用#b元素冲击#k重叠各种不同属性的冲击技能时, 亦可在一定时间内强化自身的力量。这是非常有效的技能, 你若成为准骑士的话, 记得要试一试哦。", 0, 1022000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("好了，说明就到这里。下面是选择时间。你想选择准骑士吗？选择的话，我就把你送到准备好的考场去。在里面搜集#r#r30个含有黑暗力量的珠子#k#k，就可以成为真正的准骑士。", 0, 1022000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("只要你接受任务，就可以马上开始考试。如果不愿意的话，就现在拒绝。拒绝之后，听听其他道路的说明也不错。怎么样……你想参加准骑士的考试吗？", 0, 1022000)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(1412, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1412.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("30个#t4031013#全部搜集到啦……我果然没有看错人。我知道你一定可以做到。你展现出了沉着和勇敢……好的，我来把你引上准骑士之路。准备好了吗？", 0, 1022000)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1412, "");
                cm.forceCompleteQuest(1412);
                cm.forceCompleteQuest(29901);
                cm.teachSkill(253, 0, -1);
                cm.updateInfoQuest(1073, "100=10;120=202");
                cm.forceStartQuest(17904, "1");
                cm.forceCompleteQuest(17904);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(120);
                cm.sendNormalTalk("好的！从现在起你就是#b准骑士#k了！准骑士是对敌人冷静，对队友具有献身精神，具有骑士道的战士。希望你能凭借自己明亮的双眼，走上正确的道路。", 0, 1022000, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4031013, -31);
                    cm.gainItem(1142108, 1);
                    cm.forceCompleteQuest(14008);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("今后你会获得比现在更强的力量，但是决不能把那种力量用在弱者身上。必须把自己的力量用在正确的事情上，那是你的责任。", 0, 1022000, true, false);
                    cm.dispose()
                }
            }
        }
    }
};