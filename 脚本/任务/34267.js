var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("都结束了吗……", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#咳咳！！！咳咳！！还没有，还没有。#h0#。", 36, 3003406, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(34271, "20=h1;30=h0;21=h0;31=h0;32=h0;23=h0;33=h1;34=h0;52=h0;53=h0;35=h0;54=h0;18=h0;36=h0;28=h0;29=h0");
                    cm.sendNormalTalk_Bottom("江？！！你还活着？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#是我啊……飞鱼……", 36, 3003406, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("什么？！！", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#我不是说了嘛。还有#b一次机会#k。", 36, 3003406, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#本以为进入江的身体还不错……可没想到竟然失去了自我……", 36, 3003406, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("你还好吧？", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face2#我是艾尔达的意志……不会那么容易就死的。虽然行动有点困难……", 36, 3003406, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face2#并且，咳咳！\r\n快去塔那边……那里还有一个魔法阵……\r\n阿卡伊勒往那边去了。", 36, 3003406, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face2#你先走。我随后跟上。", 36, 3003406, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(34267, "");
                                                        cm.OnStartNavigation(450006400, 0, "", 0);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};