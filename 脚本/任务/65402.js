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
            cm.sendNormalTalk_Bottom("#h0#，你找到第一名队员了吗？", 36, 9401021, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("远征队总部为优秀的远征队队长准备了一份小礼物。我们内部讨论了一下优秀远征队队长的选拔标准，最终决定，受到众多队员喜爱的队长，才是优秀的队长。\r\n我们根据招募队员的数量准备了礼物，你要是感兴趣，就在满足条件后来找我吧。", 36, 9401021, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("1。招募5名远征队员\r\n - #i2631680:##t2631680# \r\n\r\n2。招募10名远征队员\r\n - #i2631681:##t2631681# \r\n\r\n3。招募15名远征队员\r\n - #i2631682:##t2631682# \r\n\r\n4。招募20名远征队员\r\n选择以下5种智能机器人之一 \r\n  - #i1662159:##t1662159#\r\n  - #i1662160:##t1662160#\r\n  - #i1662161:##t1662161#\r\n  - #i1662162:##t1662162#\r\n  - #i1662163:##t1662163#", 36, 9401021, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不必费心思寻找。只要你成为优秀的队长，自然会招募到优秀的队员。", 36, 9401021, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(65402, "");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65402.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk_Bottom("真棒，已经找到这么多同伴了啊。", 36, 9401021, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我为了你这样受队员尊敬的队长，准备了适合你的礼物。\r\n\r\n#b   #i2631680:# #t2631680:##k\r\n\r\n#e#b※ 此任务奖励世界内只可以领取最多#r1个#b。#r(剩余个数：1个)#k\r\n#e#b※ 世界内固定数量全部被领取后，使用其它角色完成任务后，将代替发放#t2450116:#道具。#k", 132, 9401025, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("这是本部特别准备的礼物，希望你务必收下。\r\n\r\n\r\n#b   #i2631680:# #t2631680:##k", 36, 9401021)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(65402);
                        cm.updateInfoQuest(500973, "c1=1");
                        cm.forceStartQuest(65403, "");
                        cm.sendNormalTalk_Bottom("这是我们之前说好的礼物。祝你冒险愉快。", 36, 9401021, false, true);
                        cm.gainItem(2631680, 1)
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};