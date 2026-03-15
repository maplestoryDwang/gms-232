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
            cm.askMenu_Bottom("#h0#，请解放学生们，拜托了！\r\n(接受任务后，进入狩猎场。) #b\r\n#L0#我准备好了，出发吧。\r\n#L1#等一下，我还没准备好。#l", 37, 1530050)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("加油！", 37, 1530050, false, true)
            } else {
                if (status === a++) {
                    cm.playerMessage(5, "必须消灭区域内所有的怪物才能移动至下一个区域。");
                    cm.dispose();
                    cm.openNpc("副本_好友故事_Act6_寻找布吉")
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
            cm.sendNormalTalk_Bottom("真是不让人休息啊。", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#h0#的那些同学，正在这里开派对呢。", 37, 1530050, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("(没时间了，随便应付一下吧。)", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(33522);
                        cm.dispose()
                    }
                }
            }
        }
    }
};