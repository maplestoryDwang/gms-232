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
            cm.sendNormalTalk_Bottom("#face0#还是走吧，饕餮，现在差不多可以开始计划了。", 36, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#你总该告诉我那到底是什么吧！？", 36, 3001651, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这……过去看看自然就知道了。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#（将有关俊秀法师的情报交出去吧，最好尽快说出去。\r\n去#k#r#m410000201##k#fc0xFFbfbfbf#方向看看吧。）", 36, 3001674 + cm.getPlayer().getGender())
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（这件事大可不必由我出马，\r\n既然都已经来到尘世了，那以后若想要以道士的身份大展拳脚，机会肯定多的是。）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(39533, "");
                                cm.OnStartNavigation(410000202, 0, "", 39533);
                                cm.addPopupSay(3001674 + cm.getPlayer().getGender(), 1500, "#face0#僻静处有点骚乱，\r\n发生什么事了？", "", 0);
                                cm.updateInfoQuest(39533, "pop=1");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39533.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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