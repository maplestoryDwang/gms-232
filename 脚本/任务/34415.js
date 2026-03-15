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
            cm.sendNormalTalk("难道是这个吗，昨天录音的……", 0, 1052211, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b（#t4036023:#传出了用来交给经纪公司的练习曲目……不过，这个旋律有点熟悉啊？）#k", 2, 1052211, true, true);
                cm.effect_Voice("SoundEff.img/kurningTower/humming", 100)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("#b（这么说来阿米说确定的地方……要不要试试提起有关阿赫的事情。）#k", 2, 1052211)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(34415, "");
                        cm.sendNormalTalk("#b（既然能够知道阿赫早期的歌曲，肯定是他多年的粉丝了。）#k", 2, 1052211, false, false)
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