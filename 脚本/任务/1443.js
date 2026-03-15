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
            cm.forceStartQuest(1443, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1443.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你顺利通过了考试……很不错嘛？虽然#b其他次元的达克鲁#k只是分身，但我没想到你能战胜他。达克鲁让我通过#b神圣的石头#k召唤分身，我还说干嘛兴师动众的，看来达克鲁的话没错。", 0, 2020011, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("和真正的飞侠达克鲁的战斗，让你变成了真正的飞侠……虽然你自己还没感觉到。现在剩下的事情就只有转职了。做好成为更强的飞侠——独行客的准备了吗？", 0, 2020011)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(29902);
                    cm.forceStartQuest(1443, "");
                    cm.forceCompleteQuest(1443);
                    cm.updateInfoQuest(1073, "400=10;420=202;421=203");
                    cm.forceStartQuest(17905, "1");
                    cm.forceCompleteQuest(17905);
                    cm.playerMessage(5, "冒险之书任务已完成。");
                    cm.changeJob(cm.getJob() + 1);
                    cm.sendNormalTalk("现在起你是#b独行客#k啦。#b短剑#k的大师，真正的独行客，去尽情施展你的力量吧。", 0, 2020011, false, false)
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