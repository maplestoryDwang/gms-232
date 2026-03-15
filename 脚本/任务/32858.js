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
            cm.sendNormalTalk_Bottom("好了，我要开始说今天的故事了。你最好做足思想准备，不要被吓到。", 37, 1530180, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("今天的故事是……#r神兽国际学校旧楼#k的秘密。", 37, 1530180, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你是指以前的学校吗？", 37, 1530240, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("没错，以前的学校。\r\n现在已经禁止入内的旧楼的秘密。", 37, 1530180, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(330002407, 0)
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
            cm.sendNormalTalk_Bottom("好了，我要开始说今天的故事了。你最好做足思想准备，不要被吓到。", 37, 1530180, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("今天的故事是……#r神兽国际学校旧楼#k的秘密。", 37, 1530180, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你是指以前的学校吗？", 37, 1530240, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("没错，以前的学校。\r\n现在已经禁止入内的旧楼的秘密。", 37, 1530180, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(330002407, 0)
                        }
                    }
                }
            }
        }
    }
};