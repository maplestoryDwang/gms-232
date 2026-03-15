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
            cm.sendNormalTalk_Bottom("#face1#大事不好了。\r\n昨晚阅览室的书架突然倒塌，南哈特他……南哈特他……", 37, 1530060, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("#face1#啊啊，他的伤势很严重，我都不忍用言语来形容。你快到医务室来吧。", 37, 1530060)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#来这里之前，请做好充分的思想准备。\r\n#b（前往4楼的医务室吧。）#k", 37, 1530060, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32856, "");
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
            cm.sendNormalTalk_Bottom("#face1#希拉老师，南哈特的情况怎么样了？很严重吗？", 37, 1530060, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("书砸到了他的脚趾。", 37, 1530160, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#啊啊，怎么会有这么可怕的事情……！", 37, 1530060, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#那个，听说卡珊德拉给南哈特下了诅咒？难道那个诅咒应验了……？", 37, 1530060, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("那不可能。我受伤只是个偶然。什么诅咒，这种不合逻辑的事情是不可能发生的。", 37, 1530070, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32856, "");
                                cm.forceCompleteQuest(32856);
                                cm.gainExp(Math.pow(cm.getLevel(), 3));
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};