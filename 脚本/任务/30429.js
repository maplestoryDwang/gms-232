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
            cm.sendNormalTalk_Bottom("小可爱啊，我可一直在找你哦。", 37, 2074105, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我吗？有什么事情吗？", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你已经找到四块宝玉了啊，\r\n这就表示你也已经来到童话村有段时日了。\r\n难道……你就没有感觉到什么吗。", 37, 2074105, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#感觉到？……我吗？\r\n嗯，这里的空气特别好？还有人也特别淳朴，还有……\r\n我就说不好，总觉得让我特别有感情，就感觉像是回到了故乡一样……", 37, 2074100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗯……\r\n你要是没什么事，能不能先跟我来啊？\r\n我们在后山那里见吧。", 37, 2074105, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(30429, "");
                                cm.OnStartNavigation(224000132, 0, "", 0);
                                cm.dispose()
                            }
                        }
                    }
                }
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};