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
            cm.sendNormalTalk("(我把从里德利那里听说的事情全都告诉了汉斯。)", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……原来如此。照你的话来看，虽然绯红里发生的大战破坏了一切，但实际上被卷入战乱的魔族人们却不知道战争的确切原因？", 5, 1032001, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("你能不能到克林逊森林城堡外面去看看？我指的是绯红的其他地区。要想搜集更多信息的话，只有这个办法。", 4, 1032001)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(31258, "");
                        cm.sendNormalTalk("那就拜托你了。\r\n(到城堡外面去吧。通过右下方的门可以出去。)", 5, 1032001, false, true)
                    } else {
                        if (status === a++) {
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31258.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("刚刚那家伙是怎么回事？真是厉害。他不像是普通的魔族，身上散发出某种奇怪的气息。", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("看样子没法继续往前走了。强力结界的力量正在把我往外推。", 17, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(31258);
                    cm.dispose()
                }
            }
        }
    }
};