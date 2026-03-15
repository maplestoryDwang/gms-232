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
            cm.sendNormalTalk("呃……手好疼。看来我是没办法了。没有谁能帮帮我吗？嗯？什么事情？#p2152009#有个姐姐。她长得非常非常漂亮，而且又很聪明，因此一直很忙。不过她是个善良的姐姐。", 0, 2152009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不久之后就是姐姐的生日了。我总不能什么都不做吧？所以我想做个蛋糕，为姐姐举办一个隆重的生日晚会。但是……没想到让奶油发泡这么难。我的手好疼……喂，有空的话，你能帮帮我吗？", 0, 2152009, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("只要用普通攻击不断地攻击碗的两边，就可以制造出泡沫。把完成的泡沫交给我就行了。怎么样？应该没问题吧？如果你愿意帮我，我就把你送到做奶油的厨房里去。", 0, 2152009)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(23928, "");
                        cm.playerMessage(5, "用普通攻击启动泡沫机，制作鲜奶油吧。");
                        cm.dispose();
                        cm.warp(931010020, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23928.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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