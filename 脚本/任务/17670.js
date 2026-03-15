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
            cm.sendNormalTalk("特来敏小姐。是这个结界吗？", 0, 9390236, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("应该就是这里。从这儿能感觉到强烈的不好的气息。", 4, 9390205, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("嗯…… 原来如此。进去看看吧。#h0#，赶紧进去调查调查吧", 0, 9390236)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(17670, "");
                        cm.sendNormalTalk("好吧。但是就我一个人进去。你留在这里。", 2, 9390236, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯？你干嘛要一个人进去啊？", 0, 9390236, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("谁知道里面有什么。而且你一起进去的话我不放心克莱尔的安全。", 2, 9390236, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("嗯。好吧，知道了。但是如果发生什么事的话，你不要逞强马上出来。", 0, 9390236, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("嗯，知道了。好了，那我进去喽。", 2, 9390236, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.dispose();
                                            cm.warp(865030400, 2)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17670.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("呃，非同一般的杀气。好像胸口被压着一样的压迫感。里面貌似有什么强大的东西。", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("先撤吧。现在首先要洗脱嫌疑。", 17, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呼呼，从结界出来好像活过来了。", 17, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(17670);
                        cm.dispose();
                        cm.warp(865030300, 2)
                    }
                }
            }
        }
    }
};