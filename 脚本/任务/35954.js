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
            cm.sendNormalTalk("（压低声音）#b胖嘟嘟森林#k中的#b莫里#k也许看到了什么。", 4, 1013300, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("（压低声音）因为莫里的视力非常好。他因为担心村子会受到威胁，所以经常在村子入口处晃悠。", 4, 1013300, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(35954, "");
                    cm.updateInfoQuest(35950, "00=h1;01=h1");
                    cm.OnStartNavigation(100051013, 1, "1013401", 35954);
                    cm.dispose()
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
            cm.sendNormalTalk("哇！！谁，你是谁！！", 4, 1013401, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(713849);
                cm.forceCompleteQuest(35954);
                cm.dispose()
            }
        }
    }
};