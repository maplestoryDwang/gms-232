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
            cm.sendNormalTalk_Bottom("山背面有人发信号。应该是海姿的别动队回来了。", 36, 2550007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("没法继续拖延时间了吗……", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("没有什么需要我做的吗？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("敌人的攻势减弱了不少，暂时应该没问题。", 36, 2550007, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("#b迈勒#k在找你，不如去见个面吧？", 36, 2550007)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("他应该在塔里等着你呢。", 36, 2550007, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(32691, "");
                                    cm.OnStartNavigation(306030400, 0, "", 0);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("你来了？", 36, 2550002, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(32691);
                cm.gainExp(186336);
                cm.dispose()
            }
        }
    }
};