var status = -1;
var selectionLog = [];

function start(g, e, d) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return
    }
    var b = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
    (g == 1) ? status++ : status--;
    selectionLog[status] = d;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status == c++) {
            cm.sendNormalTalk("" + b + "，我想找回我遗失的童话书……那是我很珍爱的童话书……", 4, 9400224, false, true)
        } else {
            if (status === c++) {
                cm.setNumberForQuestInfo(63090, "raining", 1);
                cm.setQuestCustomData(63092, "");
                cm.setQuestCustomData(63096, "sad");
                cm.setQuestCustomData(63252, "destroy");
                cm.updateInfoQuest(63089, "green=0;red=0;blue=0");
                var a = cm.getNumberFromQuestInfo(63090, "DnN") == 0;
                var f = cm.getNumberFromQuestInfo(63090, "lightning") == 1;
                if (!f) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_AfterLand/RotationBack", 128);
                    cm.updateInfoQuest(63095, "angle=" + (a ? 0 : -90));
                    cm.afterlandChangeMapObject("RotationBack", 0, 0, 0, 1, a ? -90 : 90, 100, 1)
                }
                cm.afterlandUpdateEnvironment();
                cm.sendNormalTalk("#b你在哪里遗失的？", 2, 0, true, true)
            } else {
                if (status === c++) {
                    cm.sendNormalTalk("我也不清楚……反正是在家外面丢的……会不会被可恶的普力奇拿走了？", 4, 9400224, true, true)
                } else {
                    if (status === c++) {
                        cm.sendNormalTalk("#b普力奇……？它们不需要童话书啊，真的是它们拿走的吗？", 2, 0, true, true)
                    } else {
                        if (status === c++) {
                            cm.askYesNo("我不管！！我的童话书就是被可恶的普力奇拿走了！！你快帮我找回来！！", 4, 9400224)
                        } else {
                            if (status === c++) {
                                cm.sendNormalTalk("#b(如果是在家外面遗失的，也有可能被普力奇捡走。去消灭普力奇，寻找童话书吧。)", 2, 0, false, true)
                            } else {
                                if (status === c++) {
                                    cm.forceStartQuest(63081, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63081.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(g, e, d) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return
    }
    var b = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
    (g == 1) ? status++ : status--;
    selectionLog[status] = d;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status == c++) {
            cm.sendNormalTalk("哇！是我的童话书~~噜啦啦，太好啦！", 5, 9400224, false, true);
            cm.gainItem(4036016, -1)
        } else {
            if (status === c++) {
                cm.setNumberForQuestInfo(63090, "raining", 0);
                cm.setQuestCustomData(63092, "");
                cm.setQuestCustomData(63096, "happy");
                cm.setQuestCustomData(63252, "click");
                var a = cm.getNumberFromQuestInfo(63090, "DnN") == 0;
                var f = cm.getNumberFromQuestInfo(63090, "lightning") == 1;
                if (!f) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_AfterLand/RotationBack", 128);
                    cm.updateInfoQuest(63095, "angle=" + (a ? 90 : 180));
                    cm.afterlandChangeMapObject("RotationBack", 0, 0, 0, 1, a ? 90 : -90, 100, 1)
                }
                cm.afterlandUpdateEnvironment();
                cm.forceCompleteQuest(63081);
                cm.gainExp(794000);
                cm.updateInfoQuest(63081, "exp=1");
                cm.sendNormalTalk("谢谢你帮我找回珍爱的童话书，" + b + "！", 5, 9400224, true, true)
            } else {
                if (status === c++) {
                    cm.sendNormalTalk("#b(看见#p9400224#这么开心，我的心情好像也一起变好起来。)", 2, 0, true, false)
                } else {
                    if (status === c++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};