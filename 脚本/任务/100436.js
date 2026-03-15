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
            cm.sendNormalTalk("搞什么。什么都没有啊？", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这封#b信#k是怎么回事……？", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b#h0##k，感谢您接受邀请。\r\n为了成功举行#b舞会#k，我们非常需要您的帮助。\r\n请您找到在#b客房1#k的客人并帮助他。", 4, 9062265, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("搞什么。什么都没有啊？", 2, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("这封#b信#k是怎么回事……？", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b#h0##k，感谢您接受邀请。\r\n为了成功举行#b舞会#k，我们非常需要您的帮助。\r\n请您找到在#b客房1#k的客人并帮助他。", 4, 9062265, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("是邀请我的人留下的吗？\r\n总之，先照这信上说的去#b客房1#k的话，应该能知道些什么吧，去看看吧？", 16, 0)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(100436, "");
                                        cm.OnStartNavigation(993175400, 0, "pt_go993175410", 0);
                                        cm.npc_LeaveField("oid=441464");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100436.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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