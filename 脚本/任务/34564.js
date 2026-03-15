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
            cm.sendNormalTalk_Bottom("#face3##h0#，看到了吗？那边的树好像在动。", 36, 3003500, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("完全看不见。沃莉，你的眼神可真好。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#要不然我怎么能当侦察兵呢？", 36, 3003500, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#要是用它来生火，应该就能把信号弹烤干。\r\n快走吧。我这个侦察兵来给你带路。", 36, 3003500)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h0;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                            cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h0;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h1;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                            cm.forceStartQuest(34564, "");
                            cm.sendNormalTalk_Bottom("#face0#那我先走了。\r\n目的地是#b生命起源处4#k。", 36, 3003500, false, true)
                        } else {
                            if (status === a++) {
                                cm.OnStartNavigation(450007030, 0, "pt00", 0);
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
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("原来是乌龟。背上长着树……", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34564);
                cm.dispose()
            }
        }
    }
};