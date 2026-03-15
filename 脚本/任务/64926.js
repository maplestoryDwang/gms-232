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
            cm.sendNormalTalk_Bottom("所以怎么样才能开启#r自爆方案#k呢？", 56, 9401118, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("阿特利埃#b工厂各处#k有秘密电闸。\r\n把它们#b全部开启#k后，得到#b中央控制室#k的#b阿特利埃工作人员#k的许可后就可以运行了。", 36, 9401087, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("在你们逃离这里前，我会为你们争取时间的。\r\n一定要离这里越远越好。", 36, 9401087, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("太好了……那我去#b中央控制室#k！\r\n#h0#，请你开启工厂中的#b全部电闸。#k", 36, 9401071, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("知道了，我们在中央控制室见。", 56, 9401118, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("克拉尼亚，你在这里呆着，哪儿都别去。\r\n触发方案后，我会回来带你出去的。", 56, 9401118, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(64926, "");
                                    cm.dispose();
                                    cm.warp(867143400, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64926.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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