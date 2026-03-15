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
            cm.sendNormalTalk_Bottom("#face5#你应该很累，怎么都不休息呢。难道出什么事了吗？", 36, 3004431, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#明明是我有求于人，希望一同寻找圣剑之主的。\r\n看着联盟的诸位如此不辞辛劳，怎么好意思一直休息呢。", 36, 3004430, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#可是，伊黛娜大人是怎么变成这样的……", 36, 3004430, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("（说明了情况。）", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face6#原来如此。不过，据我所知，图书馆有个从古代开始就一直在用的消防装置。", 36, 3004430, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#据说没有水也能一下子压制火势。", 36, 3004430, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face4#啊……", 36, 3004431, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face4#艾伦，这是真的吗？", 36, 3004431, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#是这样没错。", 36, 3004434, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face3#那你为什么没有……", 36, 3004431, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#这是可以瞬间将图书馆内部变成#r真空状态#k的消防装置。", 36, 3004434, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#灭火自然是不在话下。只不过里面的人也……", 36, 3004434, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face5#够，够了……", 36, 3004431, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face5#我听得很明白了，不用再解释了。", 36, 3004431, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.askYesNo_Bottom("#face0#……继续调查吧。", 36, 3004431)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face5#大家分头行动。", 36, 3004431, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceStartQuest(37509, "");
                                                                            cm.OnStartNavigation(993150050, 0, "east00", 37509);
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
            }
        }
    }
}

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37509.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#请您看看这个。", 36, 3004430, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#好像是由来已久的预言。", 36, 3004430, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(993151006, 0, false)
                }
            }
        }
    }
};