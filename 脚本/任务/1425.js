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
            cm.sendNormalTalk("你想选择拳手之路吗？那是用拳头或指节拳甲和敌人战斗的勇敢的海盗。虽然动作华丽，但操作起来却很不容易……你对自己有自信吗？", 0, 1090000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("最具代表性的技能是#b龙卷风拳#k。用力向上猛击，创造出真正的龙卷风。#b贯骨击#k也是非常帅的技能，可以向前突进，攻击敌人。", 0, 1090000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("当然，基本技能也很重要。学会#b精准拳甲#k和#b急速拳#k后，可以让你的拳甲更快、更强。通过#b血量增加#k，可以提高血量。通过增强忍耐力的#b忍耐#k，可以持续恢复体力和魔量。", 0, 1090000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("通过让内心平静提高自己的攻击力和命中值的#b静心#k，也是拳手不可或缺的核心技能之一。", 0, 1090000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("说明好像太长了吗？好的，拳手的考试马上开始。你必须通过简单的考试才行。只要进入准备好的考场，消灭所有怪物，把#r它们掉落的物品#k交给我就行。但是怪物们的防御力很高，对付起来可能不太容易。这些一定要记住。", 0, 1090000, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline("考试的时候如果药水用光了，必须#b放弃任务重新开始#k。为了防止发生这种事情，一定要事先准备好充足的药水。考试马上开始。接受的话，我马上把你送到考试船舱去。", 0, 1090000)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(1425, "");
                                    cm.dispose();
                                    cm.warp(912040000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1425.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("#t4031013#全部拿来啦。成绩不错。不，应该说是比较优秀。你一定会成为一个好拳手。我马上让你成为拳手。", 0, 1090000)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1425, "");
                cm.forceCompleteQuest(1425);
                cm.forceCompleteQuest(29901);
                cm.teachSkill(264, 0, -1);
                cm.updateInfoQuest(1073, "500=10;510=201");
                cm.forceStartQuest(17904, "1");
                cm.forceCompleteQuest(17904);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(510);
                cm.sendNormalTalk("很好。从现在起你已经是#b拳手#k了。拳手可以赤手空拳地镇压敌人。因此, 它要比任何人更要努力修炼才是。若在修炼的过程中遇到困难的话, 我也会帮你的。", 0, 1090000, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4031013, -30);
                    cm.gainItem(1142108, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("给你提升了收纳高手技能。这样就可以使用更多的背包空间了。", 0, 1090000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("拳手必须要变得更强。但是那种强大却不能用于弱者的身上。拳手要把自己的力量用于正途。而这要比变得强大还要更加艰难。", 0, 1090000, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};