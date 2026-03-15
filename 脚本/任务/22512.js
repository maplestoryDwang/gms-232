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
            cm.sendNormalTalk("主人！我非常感动！主人真是个善良的人！看到你经常帮助那个年纪很大的人，我就很感动！我们以后必须帮助那些遇到困难的人！那是我们的使命！", 0, 1013000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b嗯？怎么突然这么说？使命？", 2, 1013000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯！主人和我现在拥有了强大的力量，不是吗？我们之所以能够拥有那种力量，是为了帮助其他人！我是这么想的。作为龙神，这是你必须做的事情！", 0, 1013000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b作为龙神必须做的事情？", 2, 1013000, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("是的！让我们去帮助那些有困难的人吧！在什么地方，一定有人在期待得到主人的帮助！", 0, 1013000)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(22512, "");
                                cm.sendNormalTalk("#b#b(答应了以龙神的身份去帮助别人。嗯……感觉自己很帅。好的！去#m100000000#看看有没有人正在为无法解决的事情而苦恼吧。现在我应该可以去帮助别人了。)", 2, 1013000, false, true)
                            } else {
                                if (status === a++) {
                                    cm.OnStartNavigation(100000003, 1, "1010100", 22512);
                                    cm.dispose()
                                }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22512.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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