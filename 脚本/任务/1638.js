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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("阿卡伊勒好像回来了！我在时间神殿看到他了。但是不知道他现在去了哪里……", 0, 9073019, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("阿卡伊勒？他到底是谁？", 2, 9073019, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("阿卡伊勒……他是黑魔法师军团长的一员，黑魔法师被封印后，他就躲藏起来了。", 4, 9073003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("军团长？那么他的出现不就意味着黑魔法师回来了吗？", 2, 9073019, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那个还不太清楚。总之现在正在发生一些奇怪的事情。重现的阿卡伊勒和时空门……这之间肯定有什么联系。阿卡伊勒曾做过黑魔法师的谋士，时空门的目的应该不单纯是想让冒险岛世界陷入混乱。", 4, 9073003, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(1638);
                                cm.finishAchievement(1184);
                                cm.gainExp(164200);
                                cm.fieldEffect_ScreenMsg("crossHunter/chapter/end2");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};