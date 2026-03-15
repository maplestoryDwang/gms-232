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
            cm.sendNormalTalk("肚……肚子……", 4, 9400215, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b嗯？", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("肚子……好……", 4, 9400215, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b你声音太小，我听不清！你能再说一遍吗？", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……好……饿……", 4, 9400215, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline("#b(看样子他是肚子饿，没力气说话了。给他找点吃的吧)", 2, 0)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b(先出去吧？)", 2, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(63038, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63038.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("吃……吃……吃的……食物？！", 4, 9400215, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(63038);
                cm.gainExp(476400);
                cm.updateInfoQuest(63038, "exp=1");
                cm.sendNormalTalk("活过来了……多亏了你，我真是难得吃饱肚子。", 4, 9400215, true, false);
                cm.gainItem(4034994, -30)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};