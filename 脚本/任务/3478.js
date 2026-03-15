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
            cm.sendNormalTalk_Bottom("#face2#看来没必要再拖时间了。", 36, 2052006, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("#face2#刻不容缓，向#b鲁斯韦尔草原1#k出击。", 36, 2052006)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(3478, "");
                    cm.sendNormalTalk_Bottom("#face2#详细的情况等到了作战地区再通过通讯设备沟通吧。", 36, 2052006, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#波特君会和队员们提前过去等着的。", 36, 2052006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#跑起来，波特君~哼哼唧唧~", 36, 2052006, true, true)
                        } else {
                            if (status === a++) {
                                cm.OnStartNavigation(221030100, 0, "", 0);
                                cm.dispose()
                            }
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
            cm.sendNormalTalk_Bottom("你到了啊~等一下，我帮你联络博士。", 36, 2052007, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(3668312);
                cm.forceCompleteQuest(3478);
                cm.dispose()
            }
        }
    }
};