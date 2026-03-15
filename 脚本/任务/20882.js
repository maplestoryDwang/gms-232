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
            cm.sendNormalTalk("到底是什么书啊……啊，这到底是……我还是头一次看见这种文字。一个字都看不懂……", 3, 1104302, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("好像是非常重要的东西，必须尽快送到圣地去。", 3, 1104302, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("怎么感觉阴森森的……", 2, 1104302, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(20882, "");
                        cm.killAllMob();
                        cm.spawnMobLimit(9300741, 1, -371, -29, 100);
                        cm.spawnMobLimit(9300741, 1, -371, -29, 100);
                        cm.spawnMobLimit(9300741, 1, -371, -29, 100);
                        cm.spawnMobLimit(9300741, 1, -371, -29, 100);
                        cm.spawnMobLimit(9300741, 1, -371, -29, 100);
                        cm.spawnMobLimit(9300741, 1, -371, -29, 100);
                        cm.spawnMobLimit(9300741, 1, -371, -29, 100);
                        cm.spawnMobLimit(9300741, 1, -371, -29, 100);
                        cm.spawnMobLimit(9300741, 1, -371, -29, 100);
                        cm.spawnMobLimit(9300741, 1, -371, -29, 100);
                        cm.sendNormalTalk("咦，怎么突然有人出现了？！难道是想把书抢走吗？不行！不能让黑色之翼抢走。来吧！！！", 0, 1104302, true, false);
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20882.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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