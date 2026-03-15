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
            cm.sendNormalTalk_Bottom("咳咳，咳咳……你能帮我把药拿来吗？退烧药，感冒药，什么都行……\r\n我现在发烧烧得太厉害了，可能随时会晕倒的。都36。5度了。", 37, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("36。5度完全正常啊……", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("咳咳咳，咳咳咳！哎呦喂，我快死了！救救我吧。", 37, 1530140)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b（前往医务室去帮弗朗西斯拿药吧。）#k", 56, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32772, "");
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
            cm.sendNormalTalk_Bottom("嘘，小点声，别让那家伙听到了。这次又发生了什么事？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("发烧36。5度？搞什么，那不是正常温度嘛。看来那家伙真是个病油子？", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32772, "");
                    cm.forceCompleteQuest(32772);
                    cm.dispose()
                }
            }
        }
    }
};