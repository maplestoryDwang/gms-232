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
            cm.sendNormalTalk_Bottom("散布有关鬼怪的怪谈的人是2年级的卡珊德拉。据说最近那个什么#r<卡珊德拉怪谈剧场>#k在学校中很有人气呢，对吧？", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("为了对怪谈进行调查，你去和她谈谈吧。", 37, 1530070)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("卡珊德拉应该在2年级教室里……\r\n\r\n#b（前往2年级教室，和卡珊德拉对话吧。）#k", 37, 1530070, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32852, "");
                        cm.dispose();
                        cm.warp(330000200, 0)
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
            cm.sendNormalTalk_Bottom("唉，瞧瞧我这人气。你也是来听我的怪谈的吗？", 37, 1530180, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("等等，我在你身上感受到了一种不同寻常的气息。\r\n你好像不是这个世界的人……你为什么会在这里呢？", 37, 1530180, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……？？！", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("哈哈，我是开玩笑的。怎么可能不是这个世界的人啊？不过，你确实带有一种奇怪的气息，这是我的直觉。", 37, 1530180, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你想听怪谈？如果你指的是音乐室的怪谈，那你就来晚啦！卡珊德拉怪谈剧场只在规定的时间进行。你应该准时过来听的！", 37, 1530180, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("天啊，你是在怀疑我吗？\r\n相不相信有鬼是你的自由。但有人亲耳听到过那钢琴声，这样你还不相信吗？", 37, 1530180, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("如果你还是不相信，那你去找奥兹吧。奥兹说她亲耳听到过那钢琴声。", 37, 1530180, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(32852, "");
                                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                                        cm.forceCompleteQuest(32852);
                                        cm.updateInfoQuest(32719, "sms=1;gal=1;add=1");
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