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
            cm.sendNormalTalk_Bottom("#face0#这个，#h0#，我能拜托的人就只有你了。你能去\r\n#b3年级教室#k见见#b戴米安#k吗？", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我们必须知道他是什么人，他的目的是什么。", 37, 1530070, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#我不是因为害怕才不去的，你不要误会。", 37, 1530070, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(33503, "");
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
            cm.sendNormalTalk_Bottom("(看来大家都有点不正常……)", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你知道戴米安在哪儿吗？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("呜哇哇！！你居然敢直呼戴米安大人的名字！噔！啪！", 37, 1530635, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.gainExp(Math.pow(cm.getLevel(), 3));
                            cm.forceCompleteQuest(33503);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};