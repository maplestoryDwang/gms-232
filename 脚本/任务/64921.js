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
            cm.sendNormalTalk_Bottom("你又在这里折磨智能机器人！\r\n你这回又想搞什么鬼名堂？", 36, 9401071, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("杰斯先生，你恐怕对我的善意，以及想打造更美好世界的心意有所误解。", 36, 9401087, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("总得有人当领头羊，技术才会发展，人类的生活才会更加便利。\r\n真不知道你为什么要一直责怪我。", 36, 9401087, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你要跟我们一起离开这里。", 56, 9401118, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("不可能。你不知道我在这片荒地里能成就多少事业……", 36, 9401087, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("警卫！请消灭这些烦人的家伙！", 36, 9401087, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo_Bottom("#h0#！是克拉尼亚的警卫兵！\r\n你可以在消灭他们后，再与克拉尼亚对话吗？", 36, 9401071)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(64921, "");
                                        cm.dispose();
                                        cm.openNpc("拟真机器人S3_清理警卫")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64921.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("这下可以走了吧。", 56, 9401118, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哼……", 36, 9401087, 1, 1)
            } else {
                if (status == a++) {
                    cm.forceCompleteQuest();
                    cm.warp(867142000, 0);
                    cm.dispose()
                }
            }
        }
    }
};