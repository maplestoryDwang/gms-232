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
            cm.sendNormalTalk_Bottom("我们不能就此放弃。\r\n#h0#！我们三个人中只剩下你了，现在能揭露真相的人只有你。", 37, 1530110, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("今天卡珊德拉也会在大家面前讲述谎言吧。\r\n这次一定要阻止卡珊德拉的谎言！", 37, 1530110)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("快到2年级教室，阻止卡珊德拉的谎言吧！\r\n#b（前往2年级教室）#k", 37, 1530110, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32863, "");
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
            cm.sendNormalTalk_Bottom("你又来啦。我所说的故事就那么有趣吗？", 37, 1530180, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……对了，听说奥兹也进了医务室？她的伤势严重吗？", 37, 1530180, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("她的头发烧焦了？呼，真是万幸……\r\n拜托你们以后不要再怀疑我卡珊德拉的灵性了！\r\n否则你们可能会遭遇不幸。", 37, 1530180, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32863, "");
                        cm.forceCompleteQuest(32863);
                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                        cm.dispose()
                    }
                }
            }
        }
    }
};