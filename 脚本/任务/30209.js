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
        cm.sendNormalTalk_Bottom("在鬼魂庄园#b存活100次#k，\r\n我就给你#b#i1142877:# #t1142877:##k勋章。", 36, 2079000, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("…………", 36, 2079000, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这个勋章中还有个#fs30##r悲伤的传说#k#fs17#……", 36, 2079000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("原来这个勋章吧，是为几乎不可能实现的#r生存到鬼魂庄园第21阶段#k的人\r\n所准备的勋章。", 36, 2079000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我真的很期待到底会是哪个卓尔不群的家伙能够#r生存到第21阶段#k，呵呵。", 36, 2079000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#fs30#……不过呢……", 36, 2079000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("不知道是从哪儿冒出来了一帮叫#b超越者#k的家伙，\r\n他们以#r惊人的速度和恢复能力#k将勋章洗劫一空……", 36, 2079000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那些拥有着令人难以置信的恢复力的#b祭司#k\r\n#r体力超群#k，将勋章洗劫一空……", 36, 2079000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("就连#b这个世界的超能力者#k都出现了，\r\n#r打败了不灭女鬼#k，将勋章洗劫一空……", 36, 2079000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("甚至还用到无视#b冒险岛世界法则#k的\r\n#r邪恶法术#k将勋章洗劫一空……", 36, 2079000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("哎……完蛋了……#b#t1142877:##k勋章原本应该与众不同才是，\r\n可现在却成了诸如#i4000544#花蘑菇或#i4032459#蓝蘑菇这类人手皆有的国民勋章。", 36, 2079000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("所以现在我打算以#b#fs30#比较简单和公平的方式#fs17##k来分发勋章。", 36, 2079000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.askAcceptDecline_Bottom("无论什么阶段，只要#fs30##b存活100次。#k\r\n#fs17#怎么样，真的很简单吧？和#r存活到第21阶段#k相比，这简直是小菜一碟嘛。\r\n你要挑战看看吗？", 32, 2079000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("好吧，就给我看看你的耐性吧，呵呵。", 36, 2079000, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(30209, "");
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
};