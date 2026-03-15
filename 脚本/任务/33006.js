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
            cm.askYesNo_Bottom("我大致听了下，他们在嚷嚷着什么乌人协，乌人协？搞不懂那究竟是什么。你能去了解下情况，然后来告诉我吗？", 36, 1530372)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那就拜托你了。每到休息时间，他们就在那吵吵嚷嚷的，我都快受不了了。", 37, 1530372, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(33006, "");
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
            cm.sendNormalTalk_Bottom("请让长相平凡的男生的人权得到保障！得到保障！得到保障！", 37, 1530261, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我们是乌贼人权协会，简称乌人协！我们代表所有乌贼的利益！！", 37, 1530261, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.forceCompleteQuest(33006);
                    cm.dispose()
                }
            }
        }
    }
};