var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.updateInfoQuest(34245, "71=h0;69=h0");
            cm.updateInfoQuest(34245, "71=h0;75=h0;69=h0");
            cm.sendNormalTalk_Bottom("#face0##h0#！能见到我的声音吗？", 36, 3003480, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("咦？是飞鱼吗？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#我有话想跟你说！\r\n现在马上来和我说话！", 36, 3003480)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(34230, "");
                        cm.sendNormalTalk_Bottom("好吧。稍等一下。我马上就到！", 56, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.OnStartNavigation(450006130, 1, "3003432", 0);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face10#你来啦，#h0#。我一直在等你。", 36, 3003480, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34230);
                cm.dispose()
            }
        }
    }
};