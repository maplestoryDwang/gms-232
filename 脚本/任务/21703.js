var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 6) {
            cm.sendNext("I know it takes an incredible amount of strength and will to outdo your instructor, but you weren't meant to let yourself wither away. You must move on to bigger and better things！You must do everything you can to embrace your heroic nature!");
            cm.dispose();
            return
        }
        status--
    }
    if (status == 0) {
        cm.sendNext("……现在你的能力是什么程度，我大概了解了……呵呵……没想到我这把老骨头还能有今天……真是感动得要流眼泪……不，是鼻涕……")
    } else {
        if (status == 1) {
            cm.sendNextPrevS("#b(……也没怎么修炼嘛……)#k")
        } else {
            if (status == 2) {
                cm.sendNextPrev("好，现在让我们开始第3阶段的最后一阶段的锻炼。这次修炼的对象是……#r#o9300343##k！猪猪！你了解他们吗？")
            } else {
                if (status == 3) {
                    cm.sendNextPrevS("一点点……")
                } else {
                    if (status == 4) {
                        cm.sendNextPrev("他们是天生的战士！从出生的那一刻起，对食物就充满了无穷的愤怒，凡是他们经过的地方都不会留下任何食物。很可怕吧？")
                    } else {
                        if (status == 5) {
                            cm.sendNextPrevS("#b(他不是在开玩笑吧？)#k")
                        } else {
                            if (status == 6) {
                                cm.askAcceptDecline("来，快点#b再次进入修炼场#k，去和那些天生的战士们修炼用的猪中战斗吧，打倒#r30只#k后，你的能力将会有一个质的飞跃。全力以赴地去战斗吧！超越我这个老师！")
                            } else {
                                if (status == 7) {
                                    cm.forceStartQuest();
                                    cm.sendOk("快走吧！去打倒那些#o9300343#！");
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 2) {
            cm.sendNext("Are you reluctant to leave your instructor? *Sniff sniff* I'm so moved, but you can't stop here. You are destined for bigger and better things!");
            cm.dispose();
            return
        }
        status--
    }
    if (status == 0) {
        cm.sendNext("这么快就打倒了30只#o9300343#……我这老头子果然没有看错。虽然你失去了曾经的记忆，失去了曾经的能力，但你仍然是个英雄！只要手上的长矛还在！")
    } else {
        if (status == 1) {
            cm.sendNextPrevS("#b(这么说是为了安慰我吗？)#k")
        } else {
            if (status == 2) {
                cm.askYesNo("我已经没什么可继续教你的了。你已经超越了我这个老头子。你可以下山了……唉，没什么好忧郁的。我这老头子能够有机会指导你，已经很满足了。")
            } else {
                if (status == 3) {
                    if (cm.getQuestStatus(21703) == 1) {
                        cm.forceCompleteQuest();
                        cm.teachSkill(21000000, cm.getPlayer().getSkillLevel(21000000), 10);
                        cm.gainExp(2800)
                    }
                    cm.sendNextS("我想起了技能#b连击能力#k！我还想跟着有点痴呆的老头子训练有没有效果呢，没想到真的有效！)");
                    cm.effect_OnUserEff("Effect/BasicEff.img/AranGetSkill")
                } else {
                    if (status == 4) {
                        cm.sendPrev("现在你回去找#p1201000#吧。他看到你的进步会很高兴的！");
                        cm.dispose()
                    }
                }
            }
        }
    }
};