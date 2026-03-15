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
            cm.sendNormalTalk("你在这里啊。我都找你半天了。我不是让你别到处乱跑的吗？这次新加入的训练生真会给我添乱。让我们重新回到演武场去，学习技能攻击的方法吧。", 1, 1102102, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(20836, "");
                cm.dispose();
                cm.warp(130030105, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20836.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("刚才教你的东西，应该还没忘记吧？用Ctrl键攻击怪物的方法，是普通攻击。看你好像还没忘记的样子，我来继续教你下面的内容。\r\n准备好了吗？", 1, 1102102, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这次是技能攻击。可以用比普通攻击更强的力量攻击敌人。你先按快捷键K，打开技能窗。\r\n通过修炼让自己变得更强，就能使用更多的技能，因此勤奋修炼非常重要。", 1, 1102102, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(20836);
                    cm.effect_OnUserEff("UI/tutorial.img/7");
                    cm.dispose()
                }
            }
        }
    }
};