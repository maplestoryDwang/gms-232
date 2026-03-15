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
            cm.sendNextS("我还…… 还是无法相信。在见到那个家伙的坟墓之前，在亲自见到他死去的人出现之前，我都不相信那家伙已经死了。无论别人怎么说，我都坚持…… 弗里德仍然活着。")
        } else {
            if (status == a++) {
                cm.askAcceptDeclineS("如果那家伙还活着的话，如果他在几百年时间里一直一个人生活的话，那他一定在某个地方的海边。因为他很喜欢看海。把信装在玻璃瓶里漂流到海上的话，他会不会收到呢……")
            } else {
                if (status == a++) {
                    cm.forceStartQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38039.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("…………应该写点什么呢？", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.askTextSpecialUI(3, 0, 0, "", 30, 6, 14, 7)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("详细内容我们见面再说吧。见面…………当着你那傻瓜一样的脸直接说。所以你一定要活着。", 16, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(38039, "");
                        cm.forceStartQuest(38039, "300");
                        cm.forceCompleteQuest(38039);
                        cm.gainExp(7000);
                        cm.dispose()
                    }
                }
            }
        }
    }
};