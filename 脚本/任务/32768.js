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
            cm.sendNormalTalk_Bottom("#h0#，犯人自首了。\r\n出乎意料地是个很没劲的结局。看来你的压迫式审问起作用了啊。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("压迫式审问？我不记得压迫过谁啊……？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("你过来办公室的话，就能知道犯人到底是谁了。现在就来吧。", 37, 1530070)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那么我等你过来。\r\n\r\n#b（前往办公室去看看犯人到底是谁吧。）#k", 37, 1530070, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32768, "");
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
            cm.sendNormalTalk_Bottom("#h0#，今天是因为什么事被学生会长叫去了呀？", 37, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯，好像是出现了个2年级奥尔卡的跟踪狂。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("什么，跟踪狂？竟然有人敢跟踪奥尔卡？到底是个什么样的家伙？", 37, 1530140, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("这个嘛……\r\n\r\n#b（向弗朗西斯讲述事情的来龙去脉）#k", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(330002203, 1)
                        }
                    }
                }
            }
        }
    }
};