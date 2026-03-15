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
            cm.sendNormalTalk("#fs15##e唉~~~~~#n \r\n啊，#fs12##h0#是你啊，今天辛苦了。你干的很出色……", 4, 9400210, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b你为什么叹气。好像天都要掉下来了！", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊，我刚才叹气了吗？\r\n#fs15##e唉~~~~~#n\r\n#fs12#也不是什么大事……只是我的刀刃缺口了。", 4, 9400210, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不久前因为劈到石头，我的刀刃崩了一半，现在还没修好。", 4, 9400210, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("要修好刀刃就得收集材料，可是白天我要战斗没时间，晚上怪物们又变得太强，我打不过它们。更何况是用这样的刀刃。", 4, 9400210, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("以你的实力，应该可以对付夜间的怪物……你有时间的话，能不能帮我从#o9402053#身上收集30个#t4036014:#？", 4, 9400210)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(63064, "");
                                    cm.sendNormalTalk("噢！！谢谢，不多不少帮我收集30个就行！", 4, 9400210, false, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63064.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("噢！这么快就收集到了？", 4, 9400210, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(63064);
                cm.gainExp(476400);
                cm.updateInfoQuest(63064, "exp=1");
                cm.sendNormalTalk("哈哈哈！我终于能修好刀刃了。哎呀呀，明天的最强勇士可能会是我哦？哈哈哈！", 4, 9400210, true, false);
                cm.gainItem(4036014, -30)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};