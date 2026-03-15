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
            cm.sendNormalTalk("通过之前使用火炮的经历，就可以知道火炮手是什么样的职业。火炮手是使用强力的手炮，在远距离对敌人加以猛烈打击的职业。每一次攻击都很强力，可以攻击多个敌人，因此使用起来很方便，也很华丽。真的需要我告诉你火炮手的技能吗？", 0, 1090000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("最重要的当然是基本技能。#b精准炮#k、#b大炮加速#k、#b致命炮火#k是其中的基础。可以使火炮更强、更快、更准确。", 0, 1090000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但是真正的乐趣在于攻击技能。向前方发射多发小型炮弹的#b强击炮#k，可以一次攻击多个敌人，因此非常有用。", 0, 1090000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("同时还有为和猴子在一起的你专门开发的技能。将装满了炸药的橡木桶滚向敌人的#b猴子炸药桶#k和使用猴子的魔法获得增益效果的#b猴子魔法#k，都是你特有的技能。", 0, 1090000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("说明太长了吗？那就让我们开始火炮手的考试吧。考试内容很简单。只要进入准备好的考场，消灭准备好的怪物，搜集#r它们掉落的物品#k就行。但是那些怪物的防御力比较高，消灭起来不是很容易。一定要记住。", 0, 1090000, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline("考试过程中药水不够的话，就必须#b放弃任务重新开始#k。一定要做好充分的准备，不要发生这样的事情。考试马上考试。接受的话，我就把你送到考试船舱去。", 0, 1090000)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(1428, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1428.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("#t4031013#全部拿来啦。成绩不错。不，应该说是比较优秀。你一定会成为一个让司徒诺满意的好火炮手。我马上让你成为火炮手。", 0, 1090000)
        } else {
            if (status === a++) {
                cm.changeJob(530);
                cm.forceCompleteQuest(1428);
                cm.forceCompleteQuest(29901);
                cm.updateInfoQuest(1073, "530=201;501=10");
                cm.forceStartQuest(17904, "1");
                cm.forceCompleteQuest(17904);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.teachSkill(111, -1, 0);
                cm.teachSkill(112, 0, -1);
                cm.teachSkill(112, 1, 0);
                cm.teachSkill(112, 2, 0);
                cm.sendNormalTalk("好的，从现在起你就是#b火炮手#k了。火炮手是使用手炮在远处向敌人发动猛烈攻击的人……为了变得更强，必须努力修炼。如果修炼中遇到什么困难，我可以帮你。", 0, 1090000, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4031013, -32);
                    cm.gainItem(1142108, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("要想带着沉重的火炮到处走，就必须有很多收纳空间。我为你提高了收纳达人技能。背包变得比以前更大了。你可以去确认一下，好好使用。", 0, 1090000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("火炮手必须变得更强。但是决不能把那种力量用在弱者身上。把自己的力量用在正确的事情上……比变强更困难。", 0, 1090000, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};