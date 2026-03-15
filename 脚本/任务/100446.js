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
            cm.sendNormalTalk("怎么了？你想起什么了吗？", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("从刚刚起就一直有一种熟悉的感觉。", 4, 9062243, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("去#b画舫#k的话，应该能找到#b说服#k微笑的假面的东西。", 4, 9062243, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不过，画舫里应该有不少#r鬼魂#k……", 4, 9062243, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("能否帮忙消灭50只在#b画舫#k的#r鬼魂#k？", 4, 9062243)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(100446, "");
                                cm.OnStartNavigation(993175420, 0, "pt_go993175400", 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100446.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你把鬼魂都抓住了啊。\r\n那么现在……来，都好了。", 4, 9062243, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#h0#，我去把#b微笑的假面#k找来。", 4, 9062243, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(993175521, 0, false)
                }
            }
        }
    }
};