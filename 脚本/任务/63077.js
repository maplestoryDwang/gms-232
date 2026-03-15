var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    var a = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
    (e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            if (cm.getNumberFromQuestInfo(63077, "first") == 0) {
                cm.sendNormalTalk("" + a + "！你看见那些被我涂上色彩的人们了吗？很好看吧！", 4, 9400223, false, true)
            } else {
                cm.sendNormalTalk("" + a + "！嘿嘿，我太喜欢这个地方了，好有意思！谢谢你带我来这里", 4, 9400223, false, true)
            }
        } else {
            if (status === b++) {
                cm.askYesNo("对了，我手上的色素快用光了，真糟糕。你能不能像上次一样给我收集些色素呢？", 4, 9400223)
            } else {
                if (status === b++) {
                    cm.setNumberForQuestInfo(63091, "CC", 0);
                    cm.forceStartQuest(63077, "");
                    cm.forceStartQuest(63056, "");
                    cm.sendNormalTalk("谢谢你" + a + "，那么这次也麻烦你帮我把这个桶装满色素吧！", 4, 9400223, false, true);
                    cm.gainItem(4036012, 1)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("你还记得吧？在背包中携带#t4036012:#的状态下进行狩猎，就可以收集到怪物的色彩~。请你尽快给我带回#t4036013:#！", 4, 9400223, true, false)
                    } else {
                        if (status === b++) {
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63077.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setNumberForQuestInfo(63091, "CC", 0);
            cm.forceCompleteQuest(63077);
            cm.forceCompleteQuest(63056);
            cm.gainExp(476400);
            cm.addNumberForQuestInfo(63077, "count", 1);
            cm.addNumberForQuestInfo(63077, "first", 1, 0, 1);
            cm.updateInfoQuest(63077, "count=1;DayN=2020011201;first=1");
            cm.fieldEffect_InsertCanvas11(5, 0, 0, 0, 0, 0);
            cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 100, 0, 0);
            cm.sendNormalTalk("哇，我又有很多色素了！谢谢你！我一定会用这些色素为其他人涂上漂亮的色彩！", 5, 9400223, false, false);
            cm.gainItem(4036013, -1);
            if (cm.getNumberFromQuestInfo(63078, "comCount") == 3) {
                if (cm.getNumberFromQuestInfo(63077, "colorTree1") == 0) {
                    cm.setNumberForQuestInfo(63077, "colorTree1", 1);
                    cm.afterlandChangeMapObject("colorTree1", 1, 1, 0, 0, 0, 0, 0)
                } else {
                    if (cm.getNumberFromQuestInfo(63077, "colorTree2") == 0) {
                        cm.setNumberForQuestInfo(63077, "colorTree2", 1);
                        cm.afterlandChangeMapObject("colorTree2", 1, 1, 0, 0, 0, 0, 0)
                    } else {
                        if (cm.getNumberFromQuestInfo(63077, "colorTree3") == 0) {
                            cm.setNumberForQuestInfo(63077, "colorTree3", 1);
                            cm.afterlandChangeMapObject("colorTree3", 1, 1, 0, 0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            if (status === a++) {
                cm.dispose()
            }
        }
    }
};