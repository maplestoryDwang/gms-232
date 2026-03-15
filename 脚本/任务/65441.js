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
            cm.sendNormalTalk_Bottom("#face0##h0#，怎么办呢？市场上的柠檬和苹果都卖完了。", 37, 9400921, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face1#好像要去其它村子的杂货店看一下了……你可以帮忙去吗？", 37, 9400921)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#谢谢你！需要买回来5个柠檬，5个苹果。", 37, 9400921, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(65441, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65441.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face1##h0#！刚好你回来了！我刚刚收到了苹果汁的订单！", 37, 9400921, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#谢谢你。", 37, 9400921, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(65441);
                    cm.gainItem(2010000, -5);
                    cm.gainItem(2010004, -5);
                    cm.dispose()
                }
            }
        }
    }
};