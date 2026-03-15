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
            cm.sendNormalTalk_Bottom("那就必须给法杖充能了？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#是的。消灭200个#b阿拉尼亚#k，应该就可以了。", 36, 3003500)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#请小心。对手是蜘蛛，说不定有毒。", 36, 3003500, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(34574, "");
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
            cm.sendNormalTalk_Bottom("好像没有毒。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#太好了。已经充好能了。", 36, 3003500, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#你想现在使用法杖吗？\r\n#b（接受时立即移动。）#k", 36, 3003500)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(450007400, 0)
                    }
                }
            }
        }
    }
};