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
            cm.sendNormalTalk_Bottom("我回来了！\r\n嘿嘿，#p9310547#答应会等我回来的！", 37, 9310538, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("现在我要去一趟神木村。\r\n#h0#为了我，来到了这里，还帮了我许多忙，真是谢谢你。", 37, 9310538, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu_Bottom("#h0#以后也会一直在豫园吧？\r\n#b#L0#是啊。#l\r\n#L1#哪里需要我，我就去哪里。#l#k", 37, 9310538)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那就让我们在豫园相见吧！#h0#！", 37, 9310538, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(62104);
                            cm.updateInfoQuest(62104, "chk=1");
                            cm.addNumberForQuestInfo(62109, "yuyuanPoint", 1);
                            cm.sendNormalTalk_Bottom("再见！", 37, 9310538, true, false);
                            cm.dispose()
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