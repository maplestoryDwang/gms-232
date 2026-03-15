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
            cm.sendNormalTalk("呜，怎么还是葡萄味的糖果？都已经把这个月的零花钱给花没了，怎么办……？", 0, 2470008, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("葡萄味糖果也很好吃。", 4, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但是我想吃#r#t4033867##k。可是我把零花钱都花完了，还是不出来#r#t4033867##k。只要能吃到#r#t4033867##k……", 0, 2470008, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("阿尔法……", 4, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……现在连小朋友的糖果你也要去管啊？", 4, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(41315, "");
                                cm.forceStartQuest(41315, "");
                                cm.dispose()
                            }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41315.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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