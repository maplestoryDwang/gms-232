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
            cm.askYesNo_Bottom("想拍照片？嗯，原来你也是奥尔卡的粉丝啊。像你这样的人，今天一天就进进出出几十个了。趁现在还不太晚，你追到正门去，应该还能赶上。", 37, 1530180)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("前往正门去找奥尔卡吧。", 56, 0, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32778, "");
                    cm.dispose();
                    cm.warp(330000005, 2)
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