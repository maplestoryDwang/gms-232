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
            cm.sendNormalTalk("你想选择冰雷法师吗？因为主要使用冰属性和电属性的攻击魔法，因此被称为冰雷法师。", 0, 1032001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("还蛮有魔法师的样子的么, 还会使用较高等级的魔法。如会吸收敌人魔量的#b魔力吸收#k或者可提高队员魔力的#b精神力#k, 还有可使用更强大之魔法的基本技能#b咒语精通#k和#b智慧激发#k等等。", 0, 1032001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不过冰雷系法师的特点当属向敌人射出强大冰块的#b冰冻术#k和生成电场并向6个敌人施放强力闪电的#b雷电术#k。两者都是非常强大的攻击技能。", 0, 1032001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("说明这样就够了吧……？魔法要直接使用才会体会到其中的乐趣。你想选择冰雷法师之路吗？选择的话，我就来考考你有没有成为法师的资格。", 0, 1032001, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("考试很简单……只要在准备好的考场上消灭怪物，搜集#r30个含有黑暗力量的珠子#k就行……你想马上参加考试吗？接受的话，我就把你送到考试之林去。", 0, 1032001)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(1416, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1416.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("#t4031013#全部搜集到啦……我知道你一定很轻松就能通过。好的，终于……我来让你变成冰雷法师。准备好了吗……？", 0, 1032001)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1416, "");
                cm.forceCompleteQuest(1416);
                cm.forceCompleteQuest(29901);
                cm.teachSkill(256, 0, -1);
                cm.updateInfoQuest(1073, "200=10;220=202");
                cm.forceStartQuest(17904, "1");
                cm.forceCompleteQuest(17904);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(220);
                cm.sendNormalTalk("好的……从现在开始，你就是#b冰雷法师#k了……法师是以较高的智力为基础，使用自然力量压制敌人的人……希望你一定要努力增加学识…… ", 0, 1032001, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4031013, -30);
                    cm.gainItem(1142108, 1);
                    cm.forceCompleteQuest(14008);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("法师必须变得更强…但是决不能把那种力量用在弱者身上。将自己的力量用在正确的道路上……远比变强难得多……", 0, 1032001, true, false);
                    cm.dispose()
                }
            }
        }
    }
};