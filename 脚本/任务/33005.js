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
            cm.sendNormalTalk_Bottom("你能来趟教务室吗？", 37, 1530372, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("什么为什么，你不是那什么……非常对策什么委员长吗？快到教务室来和我谈谈。\r\n#b（前往1楼的教务室吧。）#k", 37, 1530372, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(33005, "");
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
            cm.sendNormalTalk_Bottom("你来啦。你有没有看到大家聚集在1楼走廊？", 37, 1530372, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("他们不学习，都在搞些什么，唉。我问过南哈特，他边摇着头边说什么“神兽国际学校即将展开历史上最初的内战”？", 37, 1530372, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.forceCompleteQuest(33005);
                    cm.updateInfoQuest(32719, "gal=1;sms=1;add=1");
                    cm.dispose()
                }
            }
        }
    }
};