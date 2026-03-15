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
            cm.askAcceptDecline_Bottom("#face0#作战开始。", 36, 3004000)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.dispose();
                cm.warp(940203207, 0)
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
            cm.sendNormalTalk_Bottom("成功了！", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这可不是我搞的鬼。电源一开，装置立刻就消失不见了。", 36, 3004000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("什么？！！", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#咳，应该是谁让它消失的……\r\n但会是谁呢？怎么让它消失的呢？", 36, 3004000, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(37116);
                            cm.gainExp(18974824);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};