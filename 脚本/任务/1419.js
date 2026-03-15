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
            cm.sendNormalTalk("你想成为真正的猎人吗？猎人是使用弩和弓中的#b弓#k的职业，可以快速射箭，击退敌人。", 0, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("当然必须熟悉可以熟练使用弓的#b精准弓#k，可以快速使用弓的#b快速箭#k，以及#b终极弓#k。为了用好弓，还不能忘了学习#b物理训练#k。", 0, 1012100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你不妨感受一下发射装备炸弹的箭矢来使敌人昏迷的#b爆炸箭#k, 就会明白远程攻击的最强者为何会是弓箭手了。", 0, 1012100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("要想使用弓，当然必须带着箭矢。但是如果学习了#b无形箭#k，就算箭矢全部用光，也不用担心。因为可以借助灵魂的力量，不需要箭矢就能使用弓。", 0, 1012100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("过去有人说弓箭手的走路速度太慢，机动性比较差，但是使用名叫#b二阶跳#k的技能，可以弥补这个弱点。在跳跃过程中再跳跃一次，可以移动很远的距离。", 0, 1012100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……说明是不是太长了？弓箭手的魅力只有亲自体验过的人才能感受得到。如果你真的想选择猎人之路，请跟我说。我会对你进行考试，看看你有没有成为猎人的资格。虽然不是什么困难的内容，但是也不能掉以轻心。", 0, 1012100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("考试很简单。只要进入事先准备的考场，消灭那里的怪物，搜集#r30个含有黑暗力量的珠子#k就行。那里的怪物比普通怪物防御力高，请一定要注意。", 0, 1012100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askAcceptDecline("考试的过程中药水不够的话，就只能#b放弃任务重新开始#k。因此需要做好充分的准备。你想马上开始考试吗？接受的话，我就把你送到考试寺院去……", 0, 1012100)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(1419, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1419.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("#t4031013#全部搜集到了啊。我确认了你的能力。从现在开始，我来把你引上猎人之路……准备好了吗？", 0, 1012100)
        } else {
            if (status === a++) {
                cm.forceStartQuest(1419, "");
                cm.forceCompleteQuest(1419);
                cm.forceCompleteQuest(29901);
                cm.teachSkill(258, 0, -1);
                cm.updateInfoQuest(1073, "300=10;310=201");
                cm.forceStartQuest(17904, "1");
                cm.forceCompleteQuest(17904);
                cm.playerMessage(5, "冒险之书任务已完成。");
                cm.changeJob(310);
                cm.sendNormalTalk("好的。从现在起，你就是#b猎人#k了。猎人是凭借锐利的眼睛，将箭射入敌人胸膛的贤明之人……希望你继续努力修炼。", 0, 1012100, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4031013, -30);
                    cm.gainItem(1142108, 1);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.sendNormalTalk("猎人必须变得更强。但是决不能把那种力量用在弱者身上。把自己的力量用在正确的事情上……远比变强更难。", 0, 1012100, true, false);
                    cm.forceCompleteQuest(14008);
                    cm.dispose()
                }
            }
        }
    }
};