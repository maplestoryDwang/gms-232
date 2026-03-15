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
            cm.sendNormalTalk_Bottom("#face0#会花费点……时间……", 37, 3004008, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(37100, "40=h1;31=h0;41=h1;50=h1;32=h0;42=h1;51=h1;33=h1;43=h1;52=h1;dir=off;44=h1;53=h1;35=h1;45=h1;36=h1;46=h0;37=h1;47=h0;38=h1;39=h1");
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.dispose();
                cm.warp(940203212, 0)
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
            cm.sendNormalTalk_Bottom("（转达了雷普斯的话。）", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#是的。那家伙让装置停下了吗？", 37, 3004000, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(18974824);
                    cm.forceCompleteQuest(37120);
                    cm.dispose()
                }
            }
        }
    }
};