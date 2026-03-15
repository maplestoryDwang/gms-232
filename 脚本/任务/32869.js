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
            cm.sendNormalTalk_Bottom("呼，呼……已经无处可逃了？？", 37, 1530180, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呃，你？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#……呜，我错了！", 37, 1530180, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("卡珊德拉？\r\n你怎么会在这里？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#呃呃，那个么……	\n大家好像都不太相信这次的怪谈……", 37, 1530180, true, true)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.warp(330002415, 1)
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
            cm.sendNormalTalk_Bottom("快看那边，是卡珊德拉。", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(32868);
                cm.dispose()
            }
        }
    }
};