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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(少年仔细察看了出口与房间里的物品，\r\n发现了王冠上刻的字句。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#……成大事者不拘小节。\r\n你是否具备成王的资格呢？", 36, 3001952, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face4#那道门虽然是轻轻一推就能打开的旋转门，\r\n但只要有一个人出去，就再也打不开了。", 36, 3001952, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#只有一个人能把宝物带出去。\r\n其余人都会被关在这里……变成那样吗？", 36, 3001952, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(布乌可以变身，无需担心……还是我留下吧。\r\n没有要保护的同伴，我直接破门出去就行。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#(等周围安静下来，就可以趁机逃出去。\r\n去告诉少年先带着布乌出去吧。)\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001951 - cm.getPlayer().getGender(), 1)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(993162073, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39640.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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