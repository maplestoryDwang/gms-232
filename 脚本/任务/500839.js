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
            cm.sendNextS("……这是什么？")
        } else {
            if (status == a++) {
                cm.sendNextPrev("77是幸运的数字嘛！")
            } else {
                if (status == a++) {
                    cm.sendNextPrev("既然77次获得了满月神圣气息，那么幸运也一定会随之而来！")
                } else {
                    if (status == a++) {
                        cm.sendNextPrev("所以我会将#i2630976##z2630976##r777个#k作为礼物送给你！")
                    } else {
                        if (status == a++) {
                            cm.askYesNo("现在要收下#i2630976##z2630976##r777个#k吗？\r\n\r\n#r※ 奖励只可以获得1次。\r\n※ 鬼怪铜币#e不可交换#n，通过包裹获得的鬼怪铜币不包含在今天获得的鬼怪铜币数内。")
                        } else {
                            if (status == a++) {
                                cm.gainItem(4310275, 777);
                                cm.forceCompleteQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500839.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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