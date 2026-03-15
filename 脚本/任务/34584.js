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
            cm.sendNormalTalk_Bottom("#face0#嗯……感觉到了吗？#r月亮#k正在靠近。", 36, 3003501, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("什么？那是什么意思？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯……让我们先看看下一段记忆吧。", 36, 3003501, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#只要消灭#b200个#k#b#o8644509##k就行。", 36, 3003501);
                        cm.forceStartQuest(34584, "");
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
            cm.askAcceptDecline_Bottom("#face0#我来使用法杖。\r\n#b（接受时立即移动。）#k", 36, 3003501)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(450007520, 0)
            }
        }
    }
};