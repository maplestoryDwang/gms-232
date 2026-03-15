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
            cm.askYesNo("去试试捡到的钥匙是否能打开门锁吧~", 4, 9400205)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(63032, "start=1;click=0");
                cm.forceStartQuest(63032, "");
                cm.sendNormalTalk("如果你背包里带着合适的钥匙，双击门锁即可打开！", 4, 9400205, false, false)
            } else {
                if (status === a++) {
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63032.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#b唉……一把锁也没打开。", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.askMenu("这很正常。哪那么容易就找到？嘿嘿，我早料到了~~！\r\n#L0##b阿依赖，你把我送回原先所在的地方吧。#l", 4, 9400205)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好，那我重新把你送回“#m867113200#”。", 4, 9400205, false, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(63032);
                        cm.gainExp(158800);
                        cm.updateInfoQuest(63032, "start=1;exp=1;click=12");
                        cm.dispose();
                        cm.warp(867113200, 0, false)
                    }
                }
            }
        }
    }
};