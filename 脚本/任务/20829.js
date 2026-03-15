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
            cm.askYesNo("我是负责战斗训练的奇赞。你叫#h0#，对吧？\r\n希望你能继续努力。你想现在开始吗？", 0, 1102102)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我先来教你最基本的攻击方法。最基本的攻击方法是#r使用Ctrl键的普通攻击#k。走到怪物附近，按Ctrl键，就可以发动攻击。不消耗血量和魔量。你去试试看吧。在演武场中#b消灭3个#o9300730##k。", 1, 1102102, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(20829, "");
                    cm.spawnMobLimit(9300730, 1, -364, -7, 100);
                    cm.spawnMobLimit(9300730, 1, -364, -7, 100);
                    cm.spawnMobLimit(9300730, 1, -364, -7, 100);
                    cm.spawnMobLimit(9300730, 1, -364, -7, 100);
                    cm.spawnMobLimit(9300730, 1, -364, -7, 100);
                    cm.spawnMobLimit(9300730, 1, -364, -7, 100);
                    cm.effect_OnUserEff("UI/tutorial.img/4");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20829.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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