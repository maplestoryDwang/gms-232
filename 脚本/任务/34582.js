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
            cm.sendNormalTalk_Bottom("是执行者。他说自己抛弃了肉体和名字……", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#那是很久很久以前突然消失的格兰蒂斯的少数种族之一。", 36, 3003501, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#他们整个种族说要去寻找神域，当时所有人都嘲笑他们。", 36, 3003501, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("看来他们最后还是成功了。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#当然，虽然这里的执行者是镜世界制造出来的幻象。", 36, 3003501, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#好了，请消灭掉他们，为法杖充能。", 36, 3003501, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline_Bottom("#face0#消灭#b200个#k#b#o8644508#，应该就行了。", 36, 3003501)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(34582, "");
                                        cm.sendNormalTalk_Bottom("#face0#请小心。现在对他们来说，我们就是入侵者。", 36, 3003501, false, true);
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
                cm.warp(450007500, 0)
            }
        }
    }
};