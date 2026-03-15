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
            cm.sendNormalTalk_Bottom("我只是……因为担心，所以才给你打个电话。\r\n应该没什么事吧？", 37, 1530090, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("(说明关于布吉的事情。)", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……#h0#，你先回待机室吧。\r\n\r\n#b(通过新楼后院前往待机室。)", 37, 1530090, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(33521, "");
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("在你来之前，我已经把布吉的事情告诉大家了。", 37, 1530090, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(Math.pow(cm.getLevel(), 3));
                cm.forceCompleteQuest(33521);
                cm.dispose()
            }
        }
    }
};