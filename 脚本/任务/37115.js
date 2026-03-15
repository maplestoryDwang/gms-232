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
            cm.sendNormalTalk_Bottom("现在可以进去了吧？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#不是，大会参加费要另收。", 36, 3004016, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#在#b危险的斗战俱乐部3#k抓捕幽灵野狗，收集#b摇尾#k。\r\n50个就行。\r\n\r\n#b（接受时，立刻前往区域。）", 36, 3004016)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(37115, "");
                            cm.dispose();
                            cm.warp(402000314, 0)
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
            cm.sendNormalTalk_Bottom("#face0#好的，允许你参加。", 37, 3004016, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#但是，你和黑鸦都最好不要轻举妄动。", 37, 3004016, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我和我的手下会牢牢注视着你们的。", 37, 3004016, true, true)
                } else {
                    if (status === a++) {
                        cm.OnStartNavigation(402000301, 0, "", 0);
                        cm.updateInfoQuest(37100, "40=h1;31=h0;41=h1;50=h1;32=h0;42=h1;51=h1;33=h1;43=h0;52=h1;dir=off;44=h0;53=h0;35=h1;36=h1;37=h1;47=h1;38=h1;39=h1");
                        cm.forceCompleteQuest(37115);
                        cm.gainExp(28462236);
                        cm.gainItem(4036493, -50);
                        cm.dispose()
                    }
                }
            }
        }
    }
};