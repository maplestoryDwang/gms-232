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
            cm.sendNormalTalk_Bottom("#face0#现在周围已经安静下来了。你能告诉我们到底看到了什么吗？", 36, 3003480, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#……", 36, 3003481, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那天……真的是可怕的一天……我到现在都不想回忆起来……", 36, 3003481, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#虽然我运气好活了下来……但是其他人……", 36, 3003481, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline_Bottom("#face0#好吧……我把那天看到的事情告诉你们。你们想现在听吗？", 36, 3003481)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(34238, "");
                                    cm.dispose();
                                    cm.warp(940204305, 0)
                                }
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
            cm.sendNormalTalk_Bottom("#face0#……在受到冲击而晕过去的时候，我看到了#r那个东西#k。", 36, 3003481, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#被冰冷的光芒包围，带着坚定的表情走了过去……", 36, 3003481, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(34238);
                    cm.dispose()
                }
            }
        }
    }
};