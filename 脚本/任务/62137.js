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
            cm.sendNormalTalk_Bottom("#h0#，你去过好几次南京路了，你应该见到过那里的鬼怪吧？", 37, 9310535, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我很清楚地看到自行车和招牌上附有黑色阴影！我正想要拍照呢，它们就瞬间消失不见了。这很奇怪吧？", 37, 9310535, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("所以我觉得，如果能搞清楚那些鬼怪的来头的话，也许就能解开这一连串怪异事件的真相了。请你前往南京路，消灭#o9600310#、#o9600311#和#o9600312#各50只，寻找鬼怪的痕迹吧！", 37, 9310535)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("很好，那我就在这里等着你吧！", 37, 9310535, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(62137, "");
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
            cm.sendNormalTalk_Bottom("啊？你消灭了那么多鬼怪也没发现什么痕迹吗？", 37, 9310535, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62137);
                cm.updateInfoQuest(62137, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                cm.sendNormalTalk_Bottom("呃……这是什么情况？真是活见鬼了。", 37, 9310535, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};