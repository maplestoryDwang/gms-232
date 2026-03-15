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
            cm.sendNormalTalk_Bottom("#face9##b#h0##k，\r\n等下，你没事吗？", 37, 1531001, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("#face9#如果你时间方便，我有些事要跟你说，你能来据点一趟吗？\r\n#b(如果答应就自动前往据点。)#k", 36, 1531001)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#哎哟？#b#h0##k，你已经来据点了啊？你倒是也有点动静啊。", 36, 1531001, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(22830, "");
                        cm.warp(331001000, 0);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22830.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("#b#h0##k，你有没有……买点纪念巧克力……或是类似的东西来啊？", 37, 1531001, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face2#我修炼到一半，好不容易赶在时间内过来了……你是看过最近没什么太大的动静，觉得无聊了吗？", 37, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#fs12#……无情的凯内西斯，\r\n#fs16#嗯，总之，我是有话要说才叫你过来的。\r\n等我先把这个保存好，你先等我一下。", 37, 1531001, true, true)
                } else {
                    if (status === b++) {
                        cm.forceCompleteQuest(22830);
                        cm.gainExp(41400);
                        cm.dispose()
                    }
                }
            }
        }
    }
};