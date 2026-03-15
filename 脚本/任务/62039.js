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
            cm.sendNormalTalk_Bottom("我的老朋友#p9310053#居然变成了妖怪……他为何什么都不告诉我。他肯定非常痛苦。", 37, 9310598, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#p9310053#肯定也没想到会变成这样。他肯定没料到微小的野心和恶行在不断堆积后竟把自己变成了妖怪。", 57, 9310598, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("妖怪现在依然侵扰着藏经阁内部。虽然方丈大师的肉身消失了，但妖怪依旧以鬼魂的形态在此徘徊。\n以后，你可以通过守卫在藏经阁入口处的#p9310051#，进入<首领怪：方丈大师>。当然了，如果你挑战时足够努力，就可以获得与之相对应的奖励。", 37, 9310598, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我会暂时待在这里，并努力帮助少林寺变回从前的样子。你可以随时来这里找我。", 37, 9310598, true, true)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                            cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                            cm.forceCompleteQuest(62039);
                            cm.gainItem(1142912, 1);
                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                            cm.playerMessage(5, "获得<少林寺之拯救者>勋章");
                            cm.playerMessage(-1, " 获得<少林寺之拯救者>勋章");
                            cm.forceCompleteQuest(62044);
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