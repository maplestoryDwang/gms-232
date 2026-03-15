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
            cm.forceStartQuest(41009, "");
            cm.updateInfoQuest(41009, "");
            cm.dispose()
        }
    }
}

function stage0(d, c, b) {
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
            cm.sendNormalTalk("如何消除药草的毒素？只要把药草在滚水里烫一下就好了。不过你要是想用作药材的话，还是直接用吧。正因为这个毒性才会用作药材。", 0, 2411004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不对，贤者克鲁巴说过，这是用于皮肤按摩的……啊，这可是密码！", 2, 2411004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("哦，克鲁巴爷爷用来做皮肤按摩啊？啊，你不用摆这么严重的表情，我这人一向守口如瓶的！不用担心~", 0, 2411004, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(41009, "NpcSpeech=24110042");
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
            cm.gainExp(340000);
            cm.forceCompleteQuest(41009);
            cm.gainItem(4000916, -5);
            cm.gainItem(4310085, 3);
            cm.dispose()
        }
    }
};