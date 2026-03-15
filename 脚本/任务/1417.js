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
            cm.sendNormalTalk("你想选择牧师之路吗？牧师和其他系列的魔法师相比稍微有点特别。拥有很多#b恢复#k和#b辅助#k系列的技能。", 0, 1032001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("当然, 最根本的还是魔法师。可以吸收敌人魔量的#b魔力吸收#k, 可发挥更强大魔法的基本技能 #b咒语精通#k, #b智慧激发#k等, 它都可以使用。而且还可以通过#b神之保护#k技能来减少自己所受的伤害。", 0, 1032001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("牧师最具代表性的技能是恢复魔法#b群体治愈#k。那是可以使包括自己在内周围所有队员的血量恢复的惊人魔法。不仅如此，还可以通过#b祝福#k提高队员的能力值，在组队的时候会很受欢迎。", 0, 1032001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("另外还有攻击魔法呢。如可以用#b圣箭术#k攻击多数的敌人。这个魔法最大的特点就是可以给恶魔系或者不死系的怪物施加极大伤害, 并且还可以恢复队员的体力。", 0, 1032001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("说明这样就够了吧……？魔法要直接使用才会体会到其中的乐趣。你想选择牧师之路吗？选择的话，我就来考考你有没有成为牧师的资格。", 0, 1032001, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline("考试很简单……只要在准备好的考场上消灭怪物，搜集#r30个含有黑暗力量的珠子#k就行……你想马上参加考试吗？接受的话，我就把你送到考试之林去。", 0, 1032001)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(1417, "");
                                    cm.dispose();
                                    cm.warp(910140000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1417.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("#t4031013#全部搜集到啦……我知道你一定很轻松就能通过。好的，终于……我来让你变成牧师。准备好了吗……？", 0, 1032001)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1417, "");
                cm.forceCompleteQuest(1417);
                cm.forceCompleteQuest(29901);
                cm.teachSkill(257, 0, -1);
                cm.updateInfoQuest(1073, "200=10;230=211");
                cm.forceStartQuest(17904, "1");
                cm.forceCompleteQuest(17904);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(230);
                cm.sendNormalTalk("好的……从现在开始，你就是#b牧师#k了……牧师是用一颗虔诚的心，为万物注入生命力量的人……希望你能坚定自己的信仰……", 0, 1032001, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4031013, -30);
                    cm.gainItem(1142108, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("对于牧师来说，信仰非常重要。相信神，追随神，向世人展示他们的宽宏……只要努力，就可以获得更强的神圣力了……", 0, 1032001, true, false);
                    cm.forceCompleteQuest(14008);
                    cm.setAccountQuestInfo(238, "count=30316;T=20201006192031");
                    cm.dispose()
                }
            }
        }
    }
};