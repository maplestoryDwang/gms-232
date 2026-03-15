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
            cm.sendNormalTalk_Bottom("#face0#你们究竟干了什么啊？游乐场工地打电话来和我们抗议。他们说你们把工地都毁了。你们就不能有一天安安静静地……", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("(必须赶快说明情况，堵住他的嘴。)", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#……原来如此。虽然觉得你是故意打断了我的话……", 37, 1530070, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("啊，伊莉娜应该去了医务室。通常这个时候她都在医务室。", 37, 1530070, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("医务室？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你去了就知道了。我们正好需要帮助。", 37, 1530070, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b(去医务室和南哈特见面)#k", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(33516, "");
                                        cm.dispose()
                                    }
                                }
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
            cm.sendNormalTalk_Bottom("你来了？", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(Math.pow(cm.getLevel(), 3));
                cm.forceCompleteQuest(33516);
                cm.dispose()
            }
        }
    }
};