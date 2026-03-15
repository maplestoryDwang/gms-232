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
            cm.askYesNo_Bottom("虽然不知道卡珊德拉所说是否属实，但我认为有必要对看门大叔的可疑言行进行调查。那，我们到建筑物里面看看吧？", 37, 1530050)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你不必太害怕，我会跟在你身旁。\r\n#b（可以进入旧楼内部）#k", 37, 1530050, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32866, "");
                    cm.dispose();
                    cm.openNpc("副本_好友故事_Act4_潜入旧楼")
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
            cm.sendNormalTalk_Bottom("你来啦，#h0#。那个没用的埃尔文说他害怕，就先回去了。", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我吗？我一点都不怕鬼。倒是挺怕虫子的。", 37, 1530050, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32865, "");
                    cm.forceCompleteQuest(32865);
                    cm.updateInfoQuest(32720, "sms=161");
                    cm.dispose()
                }
            }
        }
    }
};