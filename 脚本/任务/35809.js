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
            cm.sendNormalTalk_Bottom("#face1##h0#！！哦，真是太好了！", 36, 3003759, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("情况怎么样？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#前方大部分甲板被大批怪物占领了。", 36, 3003759, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#士兵们正在苦战，但完全处于劣势。\r\n这样下去的话，好不容易准备好的舰炮就要全部被毁了。", 36, 3003759, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face0#请消灭掉占据甲板的怪物，援助我们的士兵。", 36, 3003759)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#右边的传送口。拜托了。", 36, 3003759, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(35809, "");
                                    cm.playerMessage(5, "必须要救出反抗者士兵打败怪物。");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35809.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#呼，敌人的攻势终于减弱了。", 36, 3003759, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊，有无线电话。请等我一会。", 36, 3003759, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(35809);
                    cm.gainExp(360899508);
                    cm.dispose()
                }
            }
        }
    }
};