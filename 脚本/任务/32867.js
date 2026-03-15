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
            cm.sendNormalTalk_Bottom("咳……我本想对学生们保密的，没想到被发现了。\r\n这些小猫都是些无家可归的流浪猫。", 37, 1530190, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我看村里的那些坏孩子用石头扔它们，欺负它们，就把它们带到旧楼来养。", 37, 1530190, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我给它们喂食，剪指甲，陪它们一起玩……结果最近这些猫一离开我，就喵喵地乱叫！", 37, 1530190, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那么，那声音不是孩子的哭声，而是猫叫声？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("孩子的哭声？这里怎么可能会有孩子的哭声呢。#r没有人居住在这里。#k", 37, 1530190, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("总之，我养猫的事情你不要告诉任何人啊！这是我们的约定哦！", 37, 1530190, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯嗯，这里是禁止出入的地方，你不要在这里待太久，快离开吧。", 37, 1530190, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(32867, "");
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
            cm.sendNormalTalk_Bottom("原来那不是孩子的哭声，而是小猫的叫声啊。", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("虽然看门大叔长得很可怕，但其实他很善良。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("没错。他那么爱惜动物，不可能会是坏人。", 37, 1530050, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("话说，那些猫真是可爱。\r\n哈啊……猫果然是世界上最可爱的动物。", 37, 1530050, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……？", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("……细细想来，这话好像不应该出自一只猫的口中。", 37, 1530050, true, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(330002417, 0)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};