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
            cm.sendNormalTalk_Bottom("这……妖怪驱散秘药没有什么效果？嗯，看来只剩下那个方法了。", 37, 9310053, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom(" (他看起来一点也不惊讶，似乎从一开始就没抱希望。#b#p9310046##k知道吗……", 57, 9310053, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那个方法？您还有什么妙计吗？", 57, 9310053, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("从很久以前开始，我的师父#b老魔僧#k就在研究妖怪。师父比任何人都要了解妖怪。第一个成功在藏经阁设下封印的就是师父。", 37, 9310053, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("那您的师父现在在哪里呢？我们能得到他的帮助就好了。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("他在很久以前就出发去修炼，再也没回来。师父研究妖怪，写下了#b#i4034637##t4034637##k。那本书就应该保存在藏经阁。", 37, 9310053, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo_Bottom("#h0#能帮我去找一找吗？我相信你。", 37, 9310053)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("谢谢。在#b#i4034637##t4034637##k里似乎有能够消灭妖怪的线索。请你尽快找到它。如果放任妖怪继续兴风作浪，不光是嵩山镇，整个世界都会遭殃。", 37, 9310053, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("但是，#b#p9310053##k为什么没有继承师父的研究呢？", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#fs20#我如果能再见到师父，最想问的问题就是这个。", 37, 9310053, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#fs20#我一生都活在师父#b老魔僧#k的阴影下！但是，#b师父#k什么都没留给我。也许他根本没把我当做弟子来看。", 37, 9310053, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("啊……请你把我刚才那些话都忘了，快去找#b妖怪之书#k吧。", 37, 9310053, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(62007, "");
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
            cm.sendNormalTalk_Bottom("#fs20#哦哦……！！！你终于找到了#b#t4034637##k！你看过这本书了吗？", 37, 9310053, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("没有，我一拿到手就赶了过来，没有打开。难道有什么问题……？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊，没什么，太，太好了……太好了，哈哈哈。\n那你现在可以回去了。剩下的事情就交给我来处理吧。", 37, 9310053, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("(#b#p9310053##k急忙离开了。难道那本书里真的有能够消灭妖怪的妙计？他看到书的时候，似乎非常高兴。)", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("(反正我该做的事情已经做完了，还是去和#b妖怪三人帮#k道个别吧。去\n#r藏经阁秘密书库#k看看吧。)", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(62012, "secret=9;hidden=hid1;find=1");
                                cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
                                cm.forceCompleteQuest(62007);
                                cm.forceStartQuest(62036, "");
                                cm.getTopMsgFont("去到[藏经阁秘密书库]和妖怪们说再见吧.", 3, 20, 20, 0);
                                cm.gainItem(4034637, -1);
                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};