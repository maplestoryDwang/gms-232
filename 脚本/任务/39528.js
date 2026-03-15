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
            cm.askAcceptDecline_Bottom("#face2#我总觉得那个俊秀法师很古怪，\r\n为了展开调查，现在就立刻前往俊秀法师的#r#m410000230##k。", 36, 3001674 + cm.getPlayer().getGender())
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face5#都说长得好看就要对得起这张脸……居然一直以来都在招摇撞骗？\r\n那什么，当然我虎影是个例外。", 36, 3001674 + cm.getPlayer().getGender(), false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#呵呵……原来是长得难看要对得起这张脸啊。", 36, 3001651, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#才不是好不好！？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(993160136, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39528.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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