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
            cm.sendNormalTalk_Bottom("出大事了，#h0#。学校里爆发了#b致命的病毒#k。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("传染病？？那还是先不要去学校……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不要担心，你先来学校吧。详细情况我会亲自告诉你的。", 37, 1530070, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(33501, "");
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
            cm.sendNormalTalk_Bottom("哦，你来了？#h0#。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("在我来的路上，有些奇怪的人……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("是啊，是啊。我也看见了。在学校里面，都是那样的人。\r\n嘴里都说着什么Rock，什么尖叫，甩着头走来走去的？脖子不疼吗？", 37, 1530030, true, true)
                } else {
                    if (status === a++) {
                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                        cm.forceCompleteQuest(33501);
                        cm.dispose()
                    }
                }
            }
        }
    }
};