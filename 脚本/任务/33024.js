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
            cm.sendNormalTalk_Bottom("最后的通话已经结束了吗？那我现在就将#h0#你从大家的记忆中洗去……", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你肯定很难过吧……但这也无可奈何。有聚必有散，既然相遇，就肯定要有别离。", 37, 1530050, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(330002511, 0)
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
            cm.sendNormalTalk_Bottom("你来啦。我生活的地方怎么样？", 37, 1530000, false, true)
        } else {
            if (status === a++) {
                cm.askMenu_Bottom("#b（应该怎么回答呢？）#k\r\n#b#L0#那里还不错。#l  \r\n#b#L1# 生活在那里好痛苦。#l", 32, 1530001)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("原来如此。我找你来……是因为我想回到原来的地方了。", 37, 1530000, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我之前很讨厌学校。我认为除了学校之外，待在什么地方都很好。", 37, 1530000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("但是停留在这里的这段时间我发现……一味地逃避现实是行不通的。", 37, 1530000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("感谢你之前代替我过学校生活。虽然有些晚，但现在我想回到我原来的位置了。", 37, 1530000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(33022);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};