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
            cm.sendNormalTalk_Bottom("#h0#，快跟过去。刚刚那个可疑的影子往上面跑去了。", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("我们一起去追吧。", 37, 1530050)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b（好，去追可疑的影子吧。）#k", 56, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.playerMessage(5, "必须消灭野外的所有怪物, 才能移动到下一地区. ");
                        cm.dispose();
                        cm.openNpc("副本_好友故事_Act4_寻找卡珊德拉")
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
            cm.sendNormalTalk_Bottom("快看那边，是卡珊德拉。", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(Math.pow(cm.getLevel(), 3));
                cm.forceCompleteQuest(32868);
                cm.dispose()
            }
        }
    }
};