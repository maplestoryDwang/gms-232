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
            cm.forceStartQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/24068.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你来找我，是想成为弓箭手吗？嗯？好像不是的样子……熟悉的面孔……你……你……！", 0, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("双弩精灵！", 0, 1012100, true, true)
            } else {
                if (status === a++) {
                    cm.onScriptMessage_显示教程引导图片(["UI/tutorial/mersedes/0/0"])
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你还活着啊！我就知道你会活下来的！我一直这么坚信着！坚信…………身为王的你绝不会死在魔法师的手中！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 3800 exp", 0, 1012100, false, true)
                    } else {
                        if (status === a++) {
                            cm.gainExp(3800);
                            cm.forceCompleteQuest(24068);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};