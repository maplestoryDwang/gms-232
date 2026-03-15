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
            cm.sendNormalTalk_Bottom("不过话说回来，你知道男女关系中最有趣的是什么吗？那就是越是不想去想，就越是会想。", 37, 1530120, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("就算是心里没有对方，如果有人经常在耳边敲边鼓的话……那么自己也会不知不觉地往那方面想了！\r\n\r\n你知道是什么样的感觉吗？嗯？", 37, 1530120, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("比如说，我也……", 37, 1530120, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b（伊莉娜把话咽了回去）#k\r\n啊哦，都是些没用的废话。总之就是那么回事。", 37, 1530120, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……很不错的提示。\r\n#b（去找找教务室的麦格纳斯吧。）#k", 57, 1530125, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32813, "");
                                cm.updateInfoQuest(32720, "sms=122");
                                cm.dispose()
                            }
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
            cm.forceCompleteQuest(32813);
            cm.dispose();
            cm.warp(330002308, 0)
        }
    }
};