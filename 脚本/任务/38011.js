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
            cm.sendNormalTalk("你这是怎么回事？全身都是伤。是在哪里受的伤？是被人打了吗？是谁？快告诉我！居然有人欺负这么可怜的人。到底是谁？", 0, 3002000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("什么？只是抓了几只#o2400203#，就变成了这个样子？你为什么不经我的允许，就去抓#o2400203#啊？只要跟我说一声……我都可以帮你搞定！答谢？为什么要准备那种东西？为什么？", 0, 3002000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("隐月真是个傻瓜！真讨厌！真的……真的……很讨厌！", 0, 3002000, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(38011, "");
                        cm.forceStartQuest(38011, "");
                        cm.sendNormalTalk("啊，这次我又做错什么了吗？狐狸们的感情波动怎么这么厉害啊？哈，是不是应该先说声道歉呢？她往那个方向跑过去了，好像是去了#r#m410000002##k……应该跟过去吧？", 2, 3002000, true, false);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38011.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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