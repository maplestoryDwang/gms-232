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
            cm.sendNormalTalk_Bottom("#h0#，你相信有鬼吗？", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("为什么突然说这个？我先表个态，我根本不相信鬼怪。但是，最近学校里流传着一个奇怪的传闻，这个传闻真的很奇怪。", 37, 1530070, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("你先到办公室来吧，我跟你说说详细情况。", 37, 1530070)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那么，我在办公室里等你。\r\n\r\n（前往办公室，去见见南哈特吧）", 37, 1530070, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32851, "");
                            cm.dispose()
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
            cm.sendNormalTalk_Bottom("你来啦。今天的差事……不不，今天我想拜托你去调查下有关鬼怪的怪谈的根源。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.askMenu_Bottom("在此之前，你先回答刚刚我问你的问题吧。你相信有鬼吗？\r\n#b\r\n#L0#相信#l\r\n#L1#不相信#l", 37, 1530070)
            } else {
                if (status === a++) {
                    if (b == 0) {
                        cm.sendNormalTalk_Bottom("那真是太遗憾了。但现在不管这个，这次有项任务需要你。", 37, 1530070, false, true)
                    } else {
                        cm.sendNormalTalk_Bottom("原来你还没有愚蠢到这种地步啊。真高兴能遇到与我想法相同的人。#h0#，你果然是完成这项任务的最佳人选。", 37, 1530070, false, true)
                    }
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32851, "");
                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                        cm.forceCompleteQuest(32851);
                        cm.dispose()
                    }
                }
            }
        }
    }
};