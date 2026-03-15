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
            cm.askYesNo("饮料的味道还不错吧？不知道合不合你胃口。那是我们哔吆非常喜欢的果汁。\r\n好了，让我们重新开始训练吧？这次是复习！刚才学习的内容你还没忘记吧？\r\n你去消灭3个#o9300730#，搜集3个#t4000489#。", 0, 1102102)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("普通攻击！按Ctrl键攻击怪物。嗯？怎么拾取羽毛？哎呀，我没告诉你吗？不好意思。按Z键，就可以把道具捡起来。", 1, 1102102, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(20831, "");
                    cm.spawnMobLimit(9300730, 1, -364, -7, 100);
                    cm.spawnMobLimit(9300730, 1, -364, -7, 100);
                    cm.spawnMobLimit(9300730, 1, -364, -7, 100);
                    cm.spawnMobLimit(9300730, 1, -364, -7, 100);
                    cm.spawnMobLimit(9300730, 1, -364, -7, 100);
                    cm.spawnMobLimit(9300730, 1, -364, -7, 100);
                    cm.effect_OnUserEff("UI/tutorial.img/5");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20831.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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