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
            cm.sendNormalTalk("……这算怎么一回事，怎么都已经沦落到要挤牛奶了？", 2, 2430016, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哞~哞~", 0, 2430016, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("别动。这么挤应该是对的呀……", 2, 2430016, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哞~哞~", 0, 2430016, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("什么嘛，一滴都挤不出来。是因为饿了吗？弄点#r干草#k来喂它，应该会出来牛奶吧？", 2, 2430016, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(41106, "");
                                cm.forceStartQuest(41106, "");
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41106.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("来，这里有干草，快点吃完把牛奶挤出来。不然就把你烤了吃掉！", 2, 2430016, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(吧唧吧唧吧唧)", 0, 2430016, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那么要开工了？给我安分点，如果敢用后腿踢我，今天的晚饭就不是煎蛋饼了，而是烤牛排。", 2, 2430016, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哞~哞~", 0, 2430016, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(41106);
                            cm.gainExp(1020000);
                            cm.gainItem(4310085, 8);
                            cm.gainItem(4033819, -5);
                            cm.gainItem(4033817, 5);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};