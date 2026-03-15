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
            cm.askMenu("#b#e<帮帮短中分勇士！>#n#k\r\n老师，你有什么问题吗？\r\n\r\n\r\n#L1# 课程奖励#l\r\n#L2# 当前课程进度#l", 4, 9062054)
        } else {
            if (status === a++) {
                switch (b) {
                    case 1:
                        cm.sendNormalTalk("#e<课程奖励>#n\r\n#e<1学时>#n\r\n#i1122215:# #b#t1122215:# 1个#k\r\n#e<2学时>#n\r\n#i4001832:# #b#t4001832:# 500个#k\r\n#e<3学时>#n\r\n#i2049447:# #b#t2049447:# 1个#k\r\n#e<4学时>#n\r\n#i2593001:# #b#t2593001:# 5个#k\r\n#e<5学时>#n\r\n#i2711001:# #b#t2711001:# 5个#k\r\n#e<6学时>#n\r\n#i2433604:# #b#t2433604:# 1个#k\r\n#e<7学时>#n\r\n#i2049710:# #b#t2049710:# 1个#k\r\n#e<8学时>#n\r\n#i2436782:# #b#t2436782:# 1个#k\r\n#e<9学时>#n\r\n#i4001839:# #b#t4001839:# 100个#k\r\n#e<10学时>#n\r\n#i3700486:# #b#t3700486:# 1个#k", 4, 9062054, false, false);
                        break;
                    case 2:
                        cm.sendNormalTalk("#e<当前课程进度>#n\r\n还未开始授课。", 4, 9062054, false, false);
                        break
                }
            } else {
                if (status == a++) {
                    cm.dispose()
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