var status = -1;
var selectionLog = [];

function start(c, b, a) {
    if (cm.getNumberFromQuestInfo(500827, "q3Count") > 0) {
        start1(c, b, a)
    } else {
        start0(c, b, a)
    }
}

function start0(d, c, b) {
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
            cm.sendNormalTalk("你好！#b#h0##k。我是昴！", 4, 9100028, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("身为饲育委员，我需要准备仓助的饲料，但是，我对这个一窍不通。", 4, 9100028, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("你能帮我收集仓助的饲料吗？\r\n听说只要狩猎#b等级范围怪物#k就能拿到饲料了！\r\n再这样下去，仓助就该咬我的头了，你会帮我的吧？", 4, 9100028)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(64668, "");
                        cm.sendNormalTalk("哦哦！谢谢。就麻烦你了。", 4, 9100028, false, true)
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function start1(d, c, b) {
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
            cm.askYesNo("仓助一直在吃个不停！你今天能不能也帮我收集饲料？\r\n#r", 4, 9100028)
        } else {
            if (status === a++) {
                cm.forceStartQuest(64668, "");
                cm.sendNormalTalk("谢谢。就麻烦你了。", 4, 9100028, false, true)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64668.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哦哦！这么快就找到了吗？谢谢。", 4, 9100028, false, true)
        } else {
            if (status === a++) {
                cm.addNumberForQuestInfo(500827, "q3Count", 1);
                cm.setNumberForQuestInfo(500827, "q3Set", 2);
                cm.forceCompleteQuest();
                cm.sendNormalTalk("下次也拜托你了……#n\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n\r\n#b#i2630962:# #t2630962:##k", 4, 9100028, true, false);
                cm.gainItem(2630962, 1)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};