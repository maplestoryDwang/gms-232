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
            cm.sendNormalTalk_Bottom("你来啦，#h0#。你是说音乐室的怪谈？", 37, 1530110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯，说实话，我也不想相信世界上有鬼……\r\n但我时常能听到那声音，就在放学后空无一人的音乐室里。", 37, 1530110, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不仅是我，其他同学也听到了那声音，所以肯定不是幻听。我现在都不敢靠近音乐室了。", 37, 1530110, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("#h0#，你能去音乐室调查下那声音的来源吗？我觉得只有你拥有这样的胆量。", 37, 1530110)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你应该知道音乐室在什么地方吧？音乐室就在4楼。", 37, 1530110, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32853, "");
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
            cm.sendNormalTalk_Bottom("今天又有何贵干啊？转校生。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你问我有没有看见用血淋淋的双手弹钢琴的鬼？\r\n这个么，我没有见到那么可笑的鬼。那个鬼难道戴了副橡胶手套？", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32853, "");
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.forceCompleteQuest(32853);
                    cm.dispose()
                }
            }
        }
    }
};