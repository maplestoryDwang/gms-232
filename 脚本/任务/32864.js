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
            cm.sendNormalTalk_Bottom("那我就开始说今天的故事吧。各位，你们准备好了吗？", 37, 1530180, false, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(330002412, 0)
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
            cm.sendNormalTalk_Bottom("你又来啦。我所说的故事就那么有趣吗？", 37, 1530180, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……对了，听说奥兹也进了医务室？她的伤势严重吗？", 37, 1530180, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("她的头发烧焦了？呼，真是万幸……\r\n拜托你们以后不要再怀疑我卡珊德拉的灵性了！\r\n否则你们可能会遭遇不幸。", 37, 1530180, true, true)
                } else {
                    if (status === a++) {
                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                        cm.forceStartQuest(32863, "");
                        cm.forceCompleteQuest(32863);
                        cm.dispose()
                    }
                }
            }
        }
    }
};