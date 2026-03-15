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
            cm.askYesNo_Bottom("虽然无法得到完整大小的指纹，但有了这个，就足可以抓到犯人了。让你们见识一下推理小说部部长的潜力吧！", 37, 1530110)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("等结果出来之后我再告诉你。你先回教室等着吧？\r\n\r\n#b（回到1年级教室吧）#k", 37, 1530110, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32767, "");
                    cm.dispose();
                    cm.warp(330000100, 0)
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