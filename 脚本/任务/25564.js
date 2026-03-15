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
            cm.sendNext("干嘛这样？我没话好说了。\r\n\r\n#b#L0#那是你的问题。我还有问题要问。#l", 1032100)
        } else {
            if (status == a++) {
                cm.sendNext("要是总这样我就可嚷嚷了！\r\n\r\n#b#L0#试一次吧。哈哈。#l", 1032100)
            } else {
                if (status == a++) {
                    cm.sendNext("(啊……这是什么感觉？突然感觉浑身一颤。)我到底干了什么？\r\n\r\n#b#L0#真的想知道吗？真想知道的话，我可以告诉你。#l", 1032100)
                } else {
                    if (status == a++) {
                        cm.sendNext("……没有，你说有问题想问我？\r\n\r\n#b#L0#附近有没有精通魔法和神秘力量的人？#l", 1032100)
                    } else {
                        if (status == a++) {
                            cm.askAcceptDecline("那你到魔法密林的#b魔法密林图书馆#k去看看吧。那里的馆长汉斯常年研究魔法，是帮助其他魔法师进行转职的了不起的魔法师。#l", 1032100)
                        } else {
                            if (status == a++) {
                                cm.forceStartQuest();
                                cm.dispose()
                            }
                        }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25564.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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