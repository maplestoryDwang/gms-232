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
            cm.sendNormalTalk("啊，是#b30个#k#b#t4036021:##k啊！加上我手上这些……就全都找到了！谢谢你！……不过，你该不会是看过里面的内容了吧？", 4, 1052209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b（……告诉佩里不小心看到了里面的内容。）", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是啊，#b#ho##k应该不会违背约定的……什么？你说什么？你说你……看过了里面的内容？", 4, 1052209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b（虽然解释了情况，但现在的她似乎什么话都听不进去。）", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("这是我凌晨一时来了情绪写的歌词……蹩脚地画出的服装……结果被人看到了……好害羞啊……真想找个地缝钻进去……", 4, 1052209, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("啊，头好晕啊……眼前……直打转……啊，我的眼镜……", 4, 1052209, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("#b（佩里失去了理智，开始疯狂地奔跑，到底该如何收拾眼前的残局？）", 2, 0)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b（好像得先让#o4310016#冷静下来，再冷静地说下去。）", 3, 0, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.dispose();
                                            cm.warp(910310515, 0);
                                            cm.forceStartQuest(34412, "");
                                            cm.spawnMobLimit(4310016, 1, -480, 311, 1)
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
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};