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
            cm.sendNormalTalk_Bottom("刚刚好像看到一发信号弹。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("是的，队长。是关卡东侧。", 36, 2550007, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("这里马上要被攻陷了。我们需要支援！", 36, 2550007)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我们快过去吧。", 56, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32690, "");
                            cm.OnStartNavigation(306030200, 0, "", 0);
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
            cm.sendNormalTalk_Bottom("幸好敌人撤退了。", 36, 2550007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呼，松了一口气啊。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b东侧城墙#k看起来很危险啊。只要集中攻击，最先倒下的恐怕就是这里了。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你是说出现裂缝的地方吧。我们会尽力修补这里。", 36, 2550007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("小心别被敌人注意到了。", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(32690);
                                cm.dispose();
                                cm.gainExp(186336)
                            }
                        }
                    }
                }
            }
        }
    }
};