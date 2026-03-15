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
            cm.sendNormalTalk_Bottom("听到了吗？他现在想让一切恢复原位。虽然有些突然……但我打算将#h0#你从所有人的记忆中洗去。", 37, 1530040, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("但闹事者呢？", 56, 1530041, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("魔法师协会将定期检查闹事者的情况。从现在开始，我们将不再直接介入他们的生活。", 37, 1530040, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("有聚必有散……如果你想最后再听听某个人的声音，就打电话给那个人吧。", 37, 1530040, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(33023, "");
                            cm.getTopMsgFont("可以再给最后一名朋友打电话. ", 3, 20, 20, 0);
                            cm.updateInfoQuest(32719, "gal=1;sms=1;add=0");
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
                                    cm.gainExp(Math.pow(cm.getLevel(), 3));
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