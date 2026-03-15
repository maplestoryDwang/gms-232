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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63086.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63086.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#b我还是不敢相信自己回到了冒险岛世界。", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b在异逝界发生的事情真的都是梦吗？那不是实际存在的世界？", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(63086);
                    cm.gainExp(1588000);
                    cm.updateInfoQuest(63086, "exp=1;first=1");
                    cm.sendNormalTalk("#b哎，我的背包为什么这么重……装了什么……？", 2, 0, true, true);
                    cm.gainItem(2436114, 1)
                } else {
                    if (status === a++) {
                        cm.openUIWithOption(0, 2);
                        cm.playerMessage(5, "背包的消耗栏里装着个奇异的礼物箱。");
                        cm.sendNormalTalk("#b咦？这奇异的礼物箱是是怎么回事？我什么时候收到的？", 2, 0, true, false)
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};