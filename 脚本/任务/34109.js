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
            cm.sendNormalTalk("这消亡旅途比我们之前经过的任何地方都要危险。", 0, 3003125, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("无论如何，我们都不能放松警惕。如果碰到这里的火焰，那肉体将会永远消失。为了平安无事地通过这条路…", 0, 3003125, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("在那之前，请你们先答应我。绝不再做鲁莽之事，一定要按照我的指示来走，你们能答应我吗？", 0, 3003125)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(34109);
                        cm.sendNormalTalk("好的，请相信我。接下来我会带着#ho#你和卡奥，安全通过这里。准备好之后，请重新和我对话。", 0, 3003125, false, true);
                        cm.dispose()
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
            cm.sendNormalTalk("这消亡旅途比我们之前经过的任何地方都要危险。", 0, 3003125, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("无论如何，我们都不能放松警惕。如果碰到这里的火焰，那肉体将会永远消失。为了平安无事地通过这条路…", 0, 3003125, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("在那之前，请你们先答应我。绝不再做鲁莽之事，一定要按照我的指示来走，你们能答应我吗？", 0, 3003125)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(34109);
                        cm.sendNormalTalk("好的，请相信我。接下来我会带着#ho#你和卡奥，安全通过这里。准备好之后，请重新和我对话。", 0, 3003125, false, true);
                        cm.dispose()
                    }
                }
            }
        }
    }
};