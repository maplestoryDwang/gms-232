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
            cm.sendNormalTalk_Bottom("真羡慕你呀。能和气味相投的同伴一起冒险，是一件被祝福的事情。", 36, 9401021, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我为了你这样受队员尊敬的队长，准备了适合你的礼物。\r\n\r\n#b   #i2631682:# #t2631682:##k\r\n\r\n#e#b※ 此任务奖励世界内只可以领取最多#r1个#b。#r(剩余个数：1个)#k\r\n#e#b※ 世界内固定数量全部被领取后，使用其它角色完成任务后，将代替发放#t2450116:#道具。#k", 132, 9401025, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("这是本部特别准备的礼物，希望你务必收下。\r\n\r\n\r\n#b   #i2631682:# #t2631682:##k", 36, 9401021)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(65404);
                        cm.updateInfoQuest(500973, "c1=1;c2=1;c3=1");
                        cm.forceStartQuest(64791, "");
                        cm.sendNormalTalk_Bottom("这是我们之前说好的礼物。祝你冒险愉快。", 36, 9401021, false, true);
                        cm.gainItem(2631682, 1)
                    } else {
                        if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65404.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};