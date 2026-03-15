var status = -1;
var selectionLog = [];

function start(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            if (cm.haveItem(1103191) && cm.haveItem(1053436) && cm.haveItem(1005361) && cm.haveItem(1702923)) {
                cm.askYesNo_Bottom("\r\n完成该任务后，可以消耗#b800个新复古币#k领取以下物品，#r每个世界限领1次#k。\r\n\r\n#b#i2630511:# <#t2630511:#>#k\r\n#b#i2630531:# <#t2630531:#>#k\r\n#b#i2630532:# <#t2630532:#>#k\r\n#b#i2630533:# <#t2630533:#>#k\r\n#b#i2630534:# <#t2630534:#>#k\r\n\r\n#r※ 注意：当前拥有的4种新复古装备将被删除。#k\r\n\r\n确定要用这个角色进行吗？", 128, 9062172, 3)
            } else {
                cm.sendNormalTalk_Bottom("\r\n不集齐#r4种新复古装备#k的话，是无法与#r魔王皮洛克#k对抗的。", 36, 9062172, false, true, 3)
            }
        } else {
            if (status === a++) {
                cm.dispose();
                if (cm.haveItem(1103191) && cm.haveItem(1053436) && cm.haveItem(1005361) && cm.haveItem(1702923)) {
                    var d = cm.getNumberFromQuestInfo(100246, "point");
                    if (d < 800) {
                        cm.sendOk_Bottom("\r\n需要#b800个新复古币#k才能进行升级。你现在只有#b" + d + "个新复古币#k啊。", 128, 9062172, 3);
                        return
                    }
                    cm.addNumberForQuestInfo(500728, "lv", 1);
                    cm.setStringForQuestInfo(500728, "last", cm.getNowTimeString("yyMMdd"));
                    cm.addNumberForQuestInfo(100246, "lv", 1);
                    cm.addNumberForQuestInfo(100246, "point", -800);
                    cm.forceCompleteQuest(500732);
                    cm.teachSkill(80000586, 3, 0);
                    cm.teachSkill(80000586, 4, 4);
                    cm.gainItem(1103191, -1);
                    cm.gainItem(1053436, -1);
                    cm.gainItem(1005361, -1);
                    cm.gainItem(1702923, -1);
                    cm.gainItem(2630511, 1);
                    cm.gainItem(2630534, 1);
                    cm.gainItem(2630533, 1);
                    cm.gainItem(2630532, 1);
                    cm.gainItem(2630531, 1);
                    cm.dispose();
                    cm.warp(993110700, 0, false)
                } else {
                    cm.sendNormalTalk_Bottom("\r\n你备齐以下装备再来吧！\r\n\r\n#b#i1103191:# #t1103191:##k\r\n#b#i1053436:#  #t1053436:##k\r\n#b#i1005361:# #t1005361:##k\r\n#b#i1702923:# #t1702923:##k\r\n\r\n#r ※ 如果正穿着相关装备，请解除装备再重新对话。", 132, 9062172, true, false, 3)
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500732.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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