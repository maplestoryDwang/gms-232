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
            cm.askYesNo_Bottom("请你跟在她后面，把出现的尘土怪消灭掉吧。可以做到吧？", 37, 1530050)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那就拜托你啦。\r\n\r\n#b（追踪奥尔卡去过的地方，消灭那里的尘土怪吧。）#k", 37, 1530050, false, true)
            } else {
                if (status === a++) {
                    cm.playerMessage(5, "必须消灭野外的所有怪物, 才能移动到下一地区. ");
                    cm.dispose();
                    cm.openNpc("副本_好友故事_Act2_寻找奥尔卡")
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
            cm.sendNormalTalk_Bottom("#h0#，你来得正好。我刚好有话要对那个奥尔卡说。", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那个名为奥尔卡的少女的阴暗内心好像正在呼唤怪物。弄不好还会产生闹事者呢。", 37, 1530050, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32780, "");
                    cm.forceCompleteQuest(32780);
                    cm.dispose()
                }
            }
        }
    }
};