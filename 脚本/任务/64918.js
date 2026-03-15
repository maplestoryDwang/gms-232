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
            cm.dispose();
            cm.warp(867142004, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64918.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("啊，终于连接了！奥利弗、#h0#！你们成功了！", 36, 9401071, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("能找到备份文件吗？", 56, 9401090, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("请稍等……我找一下……", 36, 9401071, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("啊，是杰斯的声音。\r\n赛恩超级讨厌的杰斯，哈哈哈哈。", 36, 9401085, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("欸？#h0#旁边的是谁？", 36, 9401071, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("啊……我们在这里发现了一个奇怪的家伙……", 56, 9401090, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("什么奇怪啊，真伤人心。#h0#，我还以为我们现在已经是朋友了呢。", 36, 9401085, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("离我远点，你身上有股老旧的汽油味儿。", 36, 9401084, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#奥利弗，没想到你这么小心眼，现在还在生气啊。", 36, 9401085, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("找到了。奥利弗最近的备份文件。\r\n这里写着……#b秘密文件#k在#b克拉尼亚的密室#k里。", 36, 9401072, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b密室#k？在哪里？", 56, 9401090, 1, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("奥利弗的记忆恢复后就会上传。那奥利弗应该会知道！\r\n请再稍等片刻。", 36, 9401071, 1, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                                            cm.forceCompleteQuest(64918);
                                                            cm.dispose()
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
                }
            }
        }
    }
};