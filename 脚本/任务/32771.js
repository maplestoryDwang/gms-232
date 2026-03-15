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
            cm.sendNormalTalk_Bottom("哈喽，你是弗朗西斯的朋友吧？你叫#h0#？对吧？", 37, 1530160, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你问我是谁？我是这所学校的校医。", 37, 1530160, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("这孩子应该是得了很重的病。你可以来医务室照顾他吗？我现在得下班了。", 37, 1530160)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("是呀，他现在情况很不好。哎呀，真是烦死了……\r\n\r\n#b（前往医务室去看看弗朗西斯的情况吧。）#k", 37, 1530160, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32771, "");
                            cm.updateInfoQuest(32719, "sms=1;gal=0;add=1");
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
            cm.sendNormalTalk_Bottom("呃……你来啦，#h0#。我的朋友。", 37, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我得了很严重的病。你不用安慰我，我自己的身体状况自己最清楚……", 37, 1530140, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你想知道我得的是什么病吗？那正是……相思病。是一种会永远想念一个人的可怕的不治之症。", 37, 1530140, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32771, "");
                        cm.forceCompleteQuest(32771);
                        cm.dispose()
                    }
                }
            }
        }
    }
};