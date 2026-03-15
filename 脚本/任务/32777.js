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
            cm.sendNormalTalk_Bottom("要想治我的病，必须是她的‘直拍照’才行。你不知道什么是直拍照？就是直接拍的照片！简称直拍照！", 37, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("让人帮忙还这么挑剔……", 37, 1530120, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("真想给他一拳。", 37, 1530110, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("咳咳咳咳咳咳！！！咳咳！！照片！把照片给我拿来！", 37, 1530140)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("呃呃，照片……我想看照片……咳咳咳咳咳咳。\r\n\r\n#b（虽然有些麻烦，但似乎不得不亲自去拍照片了。前往2年级教室去找奥尔卡吧。）#k", 37, 1530140, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32777, "");
                                cm.dispose();
                                cm.warp(330000200, 0)
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
            cm.sendNormalTalk_Bottom("转校生？你来这儿有什么事吗？", 37, 1530180, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("奥尔卡？你晚了一步。刚才一下课她就往正门的方向去了。", 37, 1530180, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32777, "");
                    cm.forceCompleteQuest(32777);
                    cm.dispose()
                }
            }
        }
    }
};