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
            cm.forceStartQuest(30910, "2");
            cm.sendNormalTalk_Bottom("#face2#朴大爷！发生什么事情了吗？", 37, 2074100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("额额额……", 37, 2074134, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#爷爷他好像晕过去了，\r\n额……该怎么办，这时候……对了！药！", 37, 2074100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#我听说童话村里有#g月妙#k，\r\n那些家伙会用#b艾草汁#k做成药。\r\n请你去稍微拿点过来吧，赶紧的！", 37, 2074100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#往村子#b左边#k走就可以了！", 37, 2074100, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(30402, "");
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
            cm.dispose();
            cm.warp(224000013, 21, true)
        }
    }
};