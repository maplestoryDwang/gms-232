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
            cm.sendNormalTalk_Bottom("你想就这么离开吗？如果可以的话，在你离开之前，我想和你谈一谈。", 37, 1530203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我知道些关于你的事情，你的真实身份，你的力量……还有你所属的世界。", 37, 1530203, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("请乘坐巴士来晚霞空地吧。我们在晚霞空地继续详谈。", 37, 1530203, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(33025, "");
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