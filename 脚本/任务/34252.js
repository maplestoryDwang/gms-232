var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#看来你跟那些机器人很有渊源？", 36, 3003409, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("也可以这么说。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("#face0#那今后有机会再告诉我吧。\r\n先像刚才一样，减少200只左右吧。", 36, 3003409)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34252, "");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("好像怎么都消灭不完啊？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#是吗？", 36, 3003409, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("(……)", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#等等，我感觉到#fs18##r阿尔卡那的那个人#k#fs16#就在这附近。\r\n应该没走多远。", 36, 3003409, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你感觉到了？", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#她的力量对我也有影响。", 36, 3003409, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#没时间犹豫了。赶快行动。", 36, 3003409, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.dispose();
                                        cm.warp(940204002, 0, true)
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