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
            cm.sendNormalTalk_Bottom("#face1#大事不好了，#h0#。\r\n昨晚科学室失火，奥兹她……奥兹她……！", 37, 1530060, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("#face1#啊啊，我实在不忍心继续说下去。\r\n来这里之前，请做好充分的思想准备……", 37, 1530060)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#来这里之前，请做好充分的思想准备。\r\n#b（前往4楼的医务室吧。）#k", 37, 1530060, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32862, "");
                        cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face1#希拉老师，奥兹的情况怎么样了？很严重吗？", 37, 1530060, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("她的头发被烧焦了。", 37, 1530160, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#啊啊，怎么会有这么可怕的事情……！", 37, 1530060, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你来啦，#h0#……我受到了无法挽回的损失。哼，头发可是女生的生命啊……！", 37, 1530110, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#那个，难道这次卡珊德拉的诅咒也……？", 37, 1530060, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("绝不可能！卡珊德拉又不是女巫，她怎么会懂得诅咒啊。", 37, 1530110, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("奥兹说的没错。请不要被迷信所蛊惑，#h0#。", 37, 1530070, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(32862, "");
                                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                                        cm.forceCompleteQuest(32862);
                                        cm.dispose()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};