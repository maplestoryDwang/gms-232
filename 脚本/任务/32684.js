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
            cm.sendNormalTalk_Bottom("阿丽莎呢？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("她说要找送上方舟的动物，上山去了。\r\n看来是想暂时留在这里了。", 36, 2550001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("是吗。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那个小姑娘竟然是超越者，真不可思议。\r\n我还以为#b生命超越者#k应该是成熟的女神模样呢。", 36, 2550001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("就是说呀。\r\n没想到冒险岛世界的一切#b生命之母#k会是那样一个可爱的小姑娘……", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("话说风有些大呢……她该不会感冒吧。", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你这是在为超越者担心吗？", 36, 2550001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("她好像为了建造那个叫方舟还是什么的东西，把力量都用光了，所以暂时与人类无异。", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("这样吗？\r\n唔……你实在担心就过去看看吧。她应该在关卡附近转悠呢。", 36, 2550001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("是吗？", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askYesNo_Bottom("最好顺道帮帮那些士兵。他们应该在寻找粮食。", 36, 2550001)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(32684, "");
                                                        cm.OnStartNavigation(306040000, 0, "", 0);
                                                        cm.sendNormalTalk_Bottom("往#b右侧尽头#k去就行。", 36, 2550001, false, false);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("您好，队长。见到您是我的荣幸。", 36, 2550007, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(32684);
                cm.gainExp(186336);
                cm.dispose()
            }
        }
    }
};