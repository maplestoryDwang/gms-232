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
            cm.forceStartQuest(23160, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23160.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("你已经决心成为爆破手了吗？你还有可以推翻这个选择的机会，结束对话，放弃任务后，只要对其他家伙说话就好。好好考虑，你真的打算当爆破手吗？你真的觉得这个职业适合你吗？", 0, 2151000)
        } else {
            if (status === a++) {
                cm.teachSkill(30000077, 0, -1);
                cm.updateInfoQuest(1073, "3700=10");
                cm.teachSkill(30001281, 1, 1);
                cm.openUI(3);
                cm.openUI(1);
                cm.openUIWithOption(0, 1);
                cm.changeJob(3700);
                cm.sendNormalTalk("好吧！欢迎你正式成为反抗者，那么为了纪念你当上了爆破手，我来简单说明一下爆破手的技能。", 1, 2151000, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1582000, 1);
                    cm.gainItem(1142242, 1);
                    cm.forceCompleteQuest(23160);
                    cm.forceStartQuest(23977, "1");
                    cm.forceCompleteQuest(29941);
                    cm.sendNormalTalk("爆破手的核心可以说就是#b#e子弹#n#k和#b#e气缸值#n#k的使用。消耗#b#e子弹#n#k，填充#b#e气缸值#n#k，使用填充好的#b#e气缸值#n#k就可以发动强大的#e碎骨巨叉#n技能展开战斗。", 1, 2151000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#i3801012#\r\n通过如上所述的UI，可以随时查看你的#b#e子弹#n#k和#b#e气缸值#n#k。", 1, 2151000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("什么？你还需要更详细的说明？看来你干劲十足嘛。", 1, 2151000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#i3801012#\r\n好吧，那我就先来说明一下#b#e子弹#n#k。#b#e子弹#n#k是一种用来填充圆形枪炮弹匣的枪弹，主要用于一种名为#e转管炮#n的技能，虽然当#b#e子弹#n#k全部消耗完时会自动填充，但也可以持续按下转管炮键，手动进行装弹。", 1, 2151000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#i3801012#\r\n战斗时，为了防止#b#e子弹#n#k不足，最好养成时时装弹的习惯，#e转管炮#n无法单独使用，在使用#b狂暴打击、双重爆炸、旋转弹#k技能时，可以在技能结束之前按下转管炮技能键使用，你最好一定要记住。", 1, 2151000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("啊~简单点说，在使用刚刚所提到的三种技能(狂暴打击、双重爆炸、旋转弹)的过程中使用#e转管炮#n，会再次造成额外伤害。", 1, 2151000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#i3801013#\r\n接下来我就给你说明一下#b#e气缸值#n#k，每当你消耗了正确量的#b#e子弹#n#k后，上方的进度条就会填充1格#b#e气缸值#n#k，使用了1发#b#e子弹#n#k后，就会像上方这样变为填充了1格气缸值的状态吧？", 1, 2151000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#i3801014#\r\n#b#e气缸值#n#k累积得越多，就可用过量的热度对敌人造成较大的伤害，当累积了超过3格#b#e气缸值#n#k后，就可以利用这个热度施展强大的#e碎骨巨叉#n技能。施展#e碎骨巨叉#n技能后，由于枪管过热，将暂时无法填充#b#e气缸值#n#k或使用#e碎骨巨叉#n技能，还请留意。", 1, 2151000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("为了能够快速使用#b#e子弹#n#k填充#b#e气缸值#n#k后使用#e碎骨巨叉#n技能，需要充分的练习，力量可不是随随便便就能到手的。", 1, 2151000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("相信我说这么多你也应该能听明白了，你往后可再也不是新手战士了，你可是为了守住自由席卷战场的爆破手，希望你能借助强大的力量在战斗中占领先锋的位置。", 1, 2151000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("战时一定要保持谨慎！一旦暴露了身份，整个反抗者都有可能陷入危险之中，从现在开始管我叫班主任，你是因为特殊课程才来教室的，我会作为这个特殊课程的班主任好好引导你的。", 1, 2151000, true, true);
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
                    }
                }
            }
        }
    }
};