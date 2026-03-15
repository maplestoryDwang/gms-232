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
            cm.sendNormalTalk("" + a + "！你又变成白色的了！怎么会这样~~", 4, 9400222, false, true)
        } else {
            if (status === b++) {
                cm.askYesNo("这次也是雪白~雪白的，就像画纸一样！我再给你涂上颜色好吗？\r\n嘿嘿，啊！我没在幸灾乐祸~！", 4, 9400222)
            } else {
                if (status === b++) {
                    cm.forceStartQuest(63084, "");
                    cm.forceStartQuest(63056, "");
                    cm.sendNormalTalk("很好，那么这次也请你在这个桶里装满色素吧！", 4, 9400222, false, true);
                    cm.gainItem(4036012, 1)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("你还记得吧？在背包中携带#t4036012:#的状态下进行狩猎，就可以收集到怪物的色彩~。请你尽快给我带回#t4036013:#！", 4, 9400222, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63084.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哇，又有了很多色素呢！我重新给你上色~~稍等。", 4, 9400222, false, true)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(63091, "CC", 0);
                cm.forceCompleteQuest(63084);
                cm.forceCompleteQuest(63056);
                cm.gainExp(476400);
                cm.updateInfoQuest(63084, "exp=1");
                cm.setNumberForQuestInfo(63090, "red", 1);
                cm.setNumberForQuestInfo(63090, "green", 1);
                cm.setNumberForQuestInfo(63090, "blue", 1);
                cm.fieldEffect_InsertCanvas11(5, 0, 0, 0, 0, 0);
                cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 100, 0, 0);
                cm.sendNormalTalk("Zazan~~~！搞定！这次的色彩更好看哦？", 4, 9400222, true, false);
                cm.gainItem(4036013, -1)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};