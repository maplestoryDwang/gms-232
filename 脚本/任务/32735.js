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
            cm.sendNormalTalk_Bottom("哎呀，你是怎么发现我是莉莉的呢？我还以为我掩饰得神不知鬼不觉呢……", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("是啊，我也跟着你们一起来到这个世界了。因为把这事交给埃尔文实在是让我不放心啊。", 37, 1530050, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32735);
                    cm.updateInfoQuest(32719, "sms=0;gal=0;add=1");
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
            cm.sendNormalTalk_Bottom("哎呀，你是怎么发现我是莉莉的呢？我还以为我掩饰得神不知鬼不觉呢……", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("是啊，我也跟着你们一起来到这个世界了。因为把这事交给埃尔文实在是让我不放心啊。", 37, 1530050, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32735);
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.updateInfoQuest(32719, "sms=0;gal=0;add=1");
                    cm.dispose()
                }
            }
        }
    }
};