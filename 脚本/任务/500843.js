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
            cm.sendNormalTalk("嗯嗯……你正在享受#b日冕庆典#k吗？\r\n如果能适当地使用你得到的#b日冕技能#k，就能让庆典变得更加有趣哦。", 4, 9400965, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("但是，我听说……有些愚蠢的年轻人#r用错了技能点#k，没能好好使用日冕技能呢！", 4, 9400965, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("制定了计划后就要慎重执行，你真是愚蠢啊！！这么随心所欲地做事可不行哦？", 4, 9400965, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("所以我将给大家#b仅此一次，能够初始化日冕技能#k的机会！\r\n如果你选错了日冕技能，那么趁这次机会，就初始化后再慎重地选择一次吧！", 4, 9400965, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("如果你也想#b初始化日冕技能#k，那就告诉我吧。\r\n#r※ 每个世界只能使用1次，找庆典现场的莫哈莫德就能初始化日冕技能。", 4, 9400965, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(500843);
                                cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
                                cm.effect_OnUserEff("Effect/BasicEff.img/QuestClear");
                                cm.dispose()
                            }
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