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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31827.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("毛皮你都搜集到了吗？", 0, 3001004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b嗯，都搜集好了。共100张。", 2, 3001004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不错，只要稍微处理一下，估计能卖个大价钱。我这就给你第三个情报。(托内罗用悄悄话提供了第三个情报。)", 0, 3001004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("呵呵，你已经把三个情报都集齐了啊。跟守护者相比，你家伙运气挺好，异族人……嘿嘿。", 0, 3001004, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("接下来你只要返回#b#p3001002##k老头那里，把情报传达给他就行。辛苦啦，呵呵，以后我们会再见面的。", 0, 3001004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("后会有期！", 0, 3001004, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(31827);
                                    cm.forceCompleteQuest(31575);
                                    cm.gainExp(200000);
                                    cm.gainItem(4000741, -100);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};