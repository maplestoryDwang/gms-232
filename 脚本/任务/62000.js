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
            cm.sendNormalTalk_Bottom("#fs25#(嵩山镇的#b#p9310049##k寄来了书信。)", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你可能记不得我和#b#m701210000##k了。但是，现在能够帮助我们的人就只有#h0#了。", 37, 9310049, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("我希望能够当面和你说说详细情况，你能来#b#m701210000##k吗？", 37, 9310049)
                } else {
                    if (status === a++) {
                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 16);
                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 16);
                        cm.forceCompleteQuest(62000);
                        cm.sendNormalTalk_Bottom("谢谢你能这么爽快地答应下来。情况紧急，请你现在就出发吧。请你到#b#m701210000##k来找我吧。", 37, 9310049, false, true)
                    } else {
                        if (status === a++) {
                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                            cm.dispose();
                            cm.warp(701210000, 0)
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