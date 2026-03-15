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
            cm.sendNormalTalk("你想成为真正的射手(Crossbow Man)吗？射手是在弓和弩当中使用#b弩#k的弓箭手, 虽然它的攻击速度较慢, 但是却能射出比任何人都要强力精准的致命一击。", 0, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("当然必须熟悉可以熟练使用弩的#b精准弩#k，可以快速使用弩的#b快速弩#k，以及#b终极弩#k。为了用好弩，还不能忘了学习#b物理训练#k。", 0, 1012100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你不妨感受一下发射可以穿透敌人的钢铁箭矢的#b穿透箭#k, 就会明白远程攻击的最强者为何会是弓箭手了。", 0, 1012100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("要想使用弩，当然必须带着箭矢。但是如果学习了#b无形箭#k，就算箭矢全部用光，也不用担心。因为可以借助灵魂的力量，不需要箭矢就能使用弩。", 0, 1012100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("过去有人说弓箭手的走路速度太慢，机动性比较差，但是使用名叫#b二阶跳#k的技能，可以弥补这个弱点。在跳跃过程中再跳跃一次，可以移动很远的距离。", 0, 1012100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……解释得太长了吗？弓箭手的魅力在于只有亲身体验过的人才能够真正感受得到，如果你想要选择真正的射手之路，就请告诉我，我会考验一下你，看你是否具备成为射手的资格，虽然内容并不是很难，但也请你不要放松警惕。", 0, 1012100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("考试很简单。只要进入事先准备的考场，消灭那里的怪物，搜集#r30个含有黑暗力量的珠子#k就行。那里的怪物比普通怪物防御力高，请一定要注意。", 0, 1012100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askAcceptDecline("考试的过程中药水不够的话，就只能#b放弃任务重新开始#k。因此需要做好充分的准备。你想马上开始考试吗？接受的话，我就把你送到考试寺院去……", 0, 1012100)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(1420, "");
                                            cm.dispose();
                                            cm.warp(910070000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1420.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("#t4031013#全部集齐了。我充分确认了你的能力。我现在就指引你前往弓箭手的道路……你准备好了吗？", 0, 1012100)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1420, "");
                cm.forceCompleteQuest(1420);
                cm.forceCompleteQuest(29901);
                cm.teachSkill(259, 0, -1);
                cm.updateInfoQuest(1073, "300=10;320=201");
                cm.forceStartQuest(17904, "1");
                cm.forceCompleteQuest(17904);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(320);
                cm.sendNormalTalk("好的。从现在起，你就是#b弩弓手#k了。弩弓手是凭借锐利的眼睛，将箭射入敌人胸膛的贤明之人……希望你继续努力修炼。", 0, 1012100, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4031013, -31);
                    cm.gainItem(1142108, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("弩弓手必须变得更强。但是决不能把那种力量用在弱者身上。把自己的力量用在正确的事情上……远比变强更难。", 0, 1012100, true, false);
                    cm.forceCompleteQuest(14008);
                    cm.dispose()
                }
            }
        }
    }
};