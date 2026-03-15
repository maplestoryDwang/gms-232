var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("超能力者，我希望你能帮忙做的事情是……", 36, 1531004, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("就算你不说我也知道是什么了，你是希望我去其他地方也找到次元崩塌的征兆吧？", 36, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("……没错，这次我们在尼哈沙漠感知到了异常现象。", 36, 1531004, true, true)
                } else {
                    if (status === b++) {
                        cm.askYesNo_Bottom("所以要去尼哈沙漠找到3个#b崩塌的次元碎片#k，你能做到吗？\r\n#b(如果答应就前往尼哈沙漠。)#k", 36, 1531004)
                    } else {
                        if (status === b++) {
                            cm.forceStartQuest(22845, "");
                            cm.forceStartQuest(22846, "");
                            cm.forceStartQuest(22847, "");
                            cm.forceStartQuest(22848, "");
                            cm.dispose();
                            cm.warp(260010000, 0, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22845.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("辛苦你了，\r\n多亏了你也至少算是有了权宜之计……", 36, 1531004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("陷坑的暴走渐渐越来越厉害了，\r\n那地方就是造成你力量根源的地方，也只有你能介入解决了。", 36, 1531004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("加把劲努力成长吧，到了100级我就再没有什么可以教你的了。\r\n#b(达到100级。)#k", 36, 1531004, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(22845);
                        cm.gainExp(240975);
                        cm.dispose()
                    }
                }
            }
        }
    }
};