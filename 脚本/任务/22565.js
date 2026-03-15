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
            cm.sendNormalTalk("我的同族都消失了吗，主人？一个都没剩下吗？就只有我一个？几百年前，那个邪恶的人为什么要杀死我的同族呢？为什么只有我留下来了呢？我什么都不知道……", 0, 1013000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b#p1013000#……", 2, 1013000, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("不过，我绝不会放弃。我可是坚强不屈的龙。说不定有些我的同族也像我一样活在某处。我一定要找到我的同族。你会帮我的吧？\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 20966 exp ", 0, 1013000)
                } else {
                    if (status === a++) {
                        cm.gainExp(20966);
                        cm.forceStartQuest(22565, "");
                        cm.forceCompleteQuest(22565);
                        cm.updateInfoQuest(22606, "564=2;565=2");
                        cm.sendNormalTalk("嘿嘿嘿，好吧。在等待那个名叫#p1032001#的人去寻找的时候，让我们变得更强吧。让我们变得更强，成为帮助他人的英雄。", 0, 1013000, false, false);
                        cm.dispose()
                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22565.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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