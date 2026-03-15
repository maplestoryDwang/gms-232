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
            cm.sendNormalTalk_Bottom("…………", 37, 9310597, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("陌生的游客啊。你有时间吗？", 37, 9310597)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("其实，我从刚才开始就一直在关注你。如果是你的话，说不定就能为我的秘密研究提供帮助呢。", 37, 9310597, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("研究……？", 57, 9310597, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("我正在研究入侵这里的妖怪。像你这么有实力的人，应该能够找到有助于我研究的#b妖怪宝珠#k吧。", 37, 9310597, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("如果你打算为我的研究提供帮助，就再次和我对话吧。要是你能找到#b妖怪宝珠#k，我就会用珍贵的物品和你交换。", 37, 9310597, true, true)
                            } else {
                                if (status === a++) {
                                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 6);
                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 6);
                                    cm.forceCompleteQuest(62023);
                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                    cm.dispose()
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