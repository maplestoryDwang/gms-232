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
            cm.forceStartQuest(23951, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23951.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("啊？有什么事吗？", 0, 2154005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，这个……那个，没有职位更高的人了吗？", 2, 2154005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你是在嘲笑我是兔子吗？就算是兔子，我的地位也比你高！快点用敬语，冷静地把准确的情况告诉我！", 0, 2154005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("里面发现了被破坏的#o6150000#！有入侵者！", 2, 2154005, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("你说什么？怎么现在才说？我们赶紧去看看！跟着我！", 0, 2154005)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(23951);
                                cm.gainExp(99395);
                                cm.gainItem(4000608, -30);
                                cm.dispose();
                                cm.warp(310050200, 1, false)
                            }
                        }
                    }
                }
            }
        }
    }
};