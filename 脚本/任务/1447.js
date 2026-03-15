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
            cm.forceStartQuest(1447, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/1447.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
                cm.askYesNo("同强大的飞侠达克鲁间的战斗会令你成为真正的飞侠……尽管你本人可能不希望这么早就遇上他。现在只剩下转职这一步了。你准备好成为更强大的飞侠-血刀了吗？", 0, 2020011)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(29902);
                    cm.forceStartQuest(1447, "");
                    cm.forceCompleteQuest(1447);
                    cm.teachSkill(4330009, 0, 10);
                    cm.teachSkill(4331002, 0, 10);
                    cm.updateInfoQuest(1073, "431=201;432=201;433=201;400=10;430=201");
                    cm.forceStartQuest(17905, "1");
                    cm.forceCompleteQuest(17905);
                    cm.playerMessage(5, "冒险之书任务已完成。");
                    cm.sendNormalTalk("现在起你是#b血刀#k啦。飞侠的隐藏之力，真正的血刀，去尽情施展你的力量吧。", 0, 2020011, false, false)
                } else {
                    if (status === a++) {
                        cm.gainItem(4031059, -1);
                        cm.gainItem(1142109, 1);
                        cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                        cm.teachSkill(4331002, 10, 10);
                        cm.teachSkill(4331011, 1, 0);
                        cm.teachSkill(4330009, 1, 10);
                        cm.changeJob(433);
                        cm.dispose()
                    }
                }
            }
        }
    }
};