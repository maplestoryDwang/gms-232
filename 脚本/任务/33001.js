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
            cm.sendNormalTalk_Bottom("大事不好了。胡克变成了乌贼。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你到办公室来就能明白现在的情况了。情况紧急。\r\n#b（前往1楼的办公室吧。）#k", 37, 1530070, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(33001, "");
                    cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#呜呜呜……一切都完了。这讨厌的世界。", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#嗯，我只不过是一种海产物……从今以后我都要做一只乌贼……", 37, 1530100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#原来人受到刺激之后会变成这样啊……", 37, 1530110, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我怎么敢说人话呢。以后我说话也要像只乌贼。乌乌……", 37, 1530100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……究竟发生了什么事情？", 56, 1530107, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("事情就发生在昨天……", 37, 1530070, true, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(330002502, 0)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};