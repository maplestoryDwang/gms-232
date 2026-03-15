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
            cm.forceStartQuest(1440, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1440.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("见到了#b其他次元的赫丽娜#k，感觉如何？是不是很吃惊？这就是#b神圣的石头#k所拥有的惊人力量。可以在其他次元召唤出分身战斗的力量。据说这是#b赫丽娜#k特地为你准备的。", 0, 2020010, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("和真正的弓箭手赫丽娜的战斗，会把你引上真正的弓箭手之路……你感觉到自己成长了吗？现在剩下的事情就是转职了。做好成为更强的弓箭手——游侠的准备了吗？", 0, 2020010)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(29902);
                    cm.forceStartQuest(1440, "");
                    cm.forceCompleteQuest(1440);
                    cm.updateInfoQuest(1073, "300=10;320=201;321=201");
                    cm.forceStartQuest(17905, "1");
                    cm.forceCompleteQuest(17905);
                    cm.playerMessage(5, "冒险之书任务已完成。");
                    cm.changeJob(cm.getJob() + 1);
                    cm.sendNormalTalk("现在起你是#b游侠#k啦。#b弩#k的大师，真正的游侠，去尽情施展你的力量吧。", 0, 2020010, false, false)
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