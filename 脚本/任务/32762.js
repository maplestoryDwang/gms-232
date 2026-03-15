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
            cm.sendNormalTalk_Bottom("#h0#，最近发生了跟踪狂事件。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("跟踪狂吗……？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("#face0#那不是普通的跟踪狂，而是穷凶极恶的跟踪狂呢。详细情况，你来办公室我再告诉你吧。", 37, 1530070)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那么，我在办公室里等你。\r\n\r\n（前往办公室，去见见南哈特吧）", 37, 1530070, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32762, "");
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
            cm.sendNormalTalk_Bottom("你来啦。你准备好听听事件的经过了吗？", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("事件发生在今天早上。有人在一个女同学的书桌上放了一封可怕的威胁信。", 37, 1530070, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32762, "");
                    cm.forceCompleteQuest(32762);
                    cm.dispose()
                }
            }
        }
    }
};