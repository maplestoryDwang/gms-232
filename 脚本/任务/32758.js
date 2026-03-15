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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32758.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("你回来啦。卫生都打扫干净了吗？", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("是的，都打扫干净了。", 57, 1530076, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#还真会睁眼说瞎话。我听说你威胁学生们，让他们帮你干的活？", 37, 1530070, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("！！我没让，都是他们自愿的……", 57, 1530076, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#别狡辩了。我不是说过吗？我会关注你的一举一动的。", 37, 1530070, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("看来我得特别注意你了。等着瞧吧，谎。话。精。转校生。", 37, 1530070, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("呃呃，我冤枉啊……！！", 57, 1530076, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.dispose();
                                        cm.warp(330002105, 0)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};