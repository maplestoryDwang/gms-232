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
            cm.askYesNo_Bottom("#face1#我是生怕你不知道该做什么才告诉你的，你先去抓200个骷髅犬吧，等你抓回来就能明白修炼的方法了。", 36, 1531003)
        } else {
            if (status === a++) {
                cm.forceStartQuest(22811, "");
                cm.warp(102040300, 0);
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22811.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face1#辛苦你了，现在是不是觉得做了点准备运动啊？之前我也曾经说过，你可别忘了向导，当你某些时候想要前往适当的猎场时，那可是很管用的。", 36, 1531003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#……不过超能力者可真是厉害，\r\n现在就算我不帮忙，你也能成长得很好了。", 36, 1531003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#冒险岛世界各处有许多需要超能力者帮助的地方，\r\n那就先再见咯！", 36, 1531003, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(22811);
                        cm.gainExp(107250);
                        cm.dispose()
                    }
                }
            }
        }
    }
};