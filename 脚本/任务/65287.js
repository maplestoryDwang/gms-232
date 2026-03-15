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
            cm.sendNormalTalk("\r\n我等你好久了，#b#ho##k。", 0, 9063001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("为了表彰你提前加入特殊小组的#e勇气#n，我要送你一份礼物，希望你会喜欢。", 0, 9063001, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("\r\n你想立即领取礼物吗？\r\n\r\n#e<礼物目录>\r\n#b#i2631261:# #t2631261:#\r\n\r\n\r\n#r#e※ 注意：每个ID只能领取1次GLORY预约箱。", 0, 9063001)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("礼物已经发放，请查看背包。注意，礼物箱有#e使用期限#n，请务必及时使用。", 0, 9063001, false, false);
                        cm.gainItem(2631261, 1)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65287.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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