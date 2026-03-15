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
            cm.sendNormalTalk_Bottom("实习老师走了吗？现在骚乱终于能平息了。", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("那个……我打电话给你，是因为异界学生有话要对#h0#你说。你能来这里见见异界学生吗？", 37, 1530050)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("他有很重要的事情要说，我们在这里等你哦。\r\n#b（究竟是什么事情？回到埃尔文和莉莉的家里吧。）#k", 37, 1530050, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(33022, "");
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