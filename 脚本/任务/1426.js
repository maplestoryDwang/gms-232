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
            cm.sendNormalTalk("你想选择火枪手之路吗？火枪手是用#b短枪#k攻击远处的敌人的远距离职业。使用手枪的各种技能比弓箭更华丽，但是难度也更高。当然，也更好玩。", 0, 1090000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("当然，最重要的是基本技能。#b精准手枪#k和#b速射#k是最最基本的技能。可以让枪变得更强、更快、更准确。", 0, 1090000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但是真正的乐趣来自于攻击技能。用肉眼几乎看不到的速度向多个敌人快速发射3发子弹的#b快枪手#k、向一个敌人连续发射3发子弹的#b三连射杀#k、向后方紧急回避同时用枪射击的#b激退射杀#k等技能，既很强，又很好玩。", 0, 1090000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("通过可以一瞬间高高跳起的#b轻羽鞋#k跳跃后，持续按住技能键，可以缓慢降落。在降落的时候也可以开枪射击。重要的是要根据情况使用相应的技能。", 0, 1090000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("说明是不是太长了？下面让我们进行火枪手考试吧？考试非常简单。只要进入准备好的考场，消灭掉所有怪物，然后把#r它们掉落的物品#k交给我就行。但是怪物们的防御力很高，对付起来可能不太容易。这些一定要记住。", 0, 1090000, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline("考试的时候如果药水用光了，必须#b放弃任务重新开始#k。为了防止发生这种事情，一定要事先准备好充足的药水。考试马上开始。接受的话，我马上把你送到考试船舱去。", 0, 1090000)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(1426, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1426.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("#t4031013#全部拿来啦。成绩不错。不，应该说是比较优秀。你一定会成为一个好火枪手。我马上让你成为火枪手。", 0, 1090000)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1426, "");
                cm.forceCompleteQuest(1426);
                cm.forceCompleteQuest(29901);
                cm.teachSkill(265, 0, -1);
                cm.updateInfoQuest(1073, "500=10;520=201");
                cm.forceStartQuest(17904, "1");
                cm.forceCompleteQuest(17904);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.teachSkill(111, -1, 0);
                cm.teachSkill(112, 0, -1);
                cm.teachSkill(112, 1, 0);
                cm.teachSkill(112, 2, 0);
                cm.changeJob(520);
                cm.sendNormalTalk("很好。从现在起你已经是#b火枪手#k了。火枪手可以用枪给予敌人施加凌厉的攻击……你若想变得更强, 还需要不断地努力修炼才是。若在修炼的过程中遇到困难的话, 我也会帮你的。", 0, 1090000, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4031013, -33);
                    cm.gainItem(1142108, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("给你提升了收纳高手技能。这样就可以使用更多的背包空间了。", 0, 1090000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("火枪手需要变得更强。但是那种强大却不能用于弱者的身上。拳手要把自己的力量用于正途……而这要比变得强大还要更加艰难。", 0, 1090000, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};