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
            cm.teachSkill(80002725, 3, 3);
            cm.forceCompleteQuest(100249);
            cm.playerMessage(-1, "新复古战士技能的等级上升了");
            cm.addPopupSay(9062179, 2000, "龙骑士海利尔！\r\n期待已久的最后一名战士终于到来了！", "", 0);
            cm.addPopupSay(9062171, 2000, "你堪称是勇猛骑士的榜样啊。", "", 0);
            cm.addPopupSay(9062171, 2000, "我以骑士的荣誉发誓，会忠诚追随你。", "", 0);
            cm.setPartner(1, 9062171, 80002729, 0);
            cm.技能跟随队友(9062171, 80002729, 0);
            cm.playerMessage(5, "从现在起，龙骑士海利尔将与勇士一起作战。");
            cm.effect_OnUserEff("Effect/EventEffect.img/16thNW/2");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100249.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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