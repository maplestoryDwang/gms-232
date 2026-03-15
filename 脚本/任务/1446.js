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
            cm.forceStartQuest(1446, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1446.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你顺利通过了考试……很不错嘛？在那个地方见到#b凯琳#k，是不是很吃惊？虽然#b其他次元的凯琳#k只是分身，但是应该也很强……凯琳把你托付给我，看来她没有看错人。", 0, 2020013, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("和真正的海盗凯琳的战斗，使你成为了真正的海盗。感觉到了吗？现在剩下的就是转职了。做好成为更强的海盗——大副的准备了吗？", 0, 2020013)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(29902);
                    cm.forceStartQuest(1446, "");
                    cm.forceCompleteQuest(1446);
                    cm.updateInfoQuest(1073, "521=201;500=10;520=201");
                    cm.forceStartQuest(17905, "1");
                    cm.forceCompleteQuest(17905);
                    cm.playerMessage(5, "冒险之书任务已完成。");
                    cm.changeJob(cm.getJob() + 1);
                    cm.sendNormalTalk("现在你是#b大副#k啦。#b枪#k的大师，真正的大副，去尽情施展你的力量吧。", 0, 2020013, false, false)
                } else {
                    if (status === a++) {
                        cm.gainItem(4031059, -1);
                        cm.gainItem(1142109, 1);
                        cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                        cm.dispose()
                    }
                }
            }
        }
    }
};