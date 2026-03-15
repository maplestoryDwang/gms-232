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
            cm.sendNormalTalk("好久不见。我从克洛乌那里听说了你在玛加提亚的活动。能得到吝啬鬼克洛乌的中意，看来你非比寻常啊？", 0, 9073015, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("和玛加提亚一样，神木村也出现了很多时空门。雪上加霜的是，从时空门中还有黑暗气息流出，所以我想尽快处理一下，无奈最近大家都实在太忙了。我想请你再帮我一次，可以吗？", 0, 9073015)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(1652, "alert=1");
                    cm.forceStartQuest(1629, "");
                    cm.sendNormalTalk("谢谢你。你调查了#r#m240010200##k的时空门后，如果出现什么可疑怪物的话，就一并将它们消灭吧。我会在#b神木村#k等你回来。", 1, 9073015, false, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_ScreenMsg("crossHunter/chapter/start2");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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