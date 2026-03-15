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
            cm.sendNormalTalk("……还不够吗？经常接触时间碎片并不好。对两位来说，更是…… 因为两位还不是超越者。", 32, 2470000, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("这次是最后一次了。如果这次还不能见到女神的话，就请放弃吧…… 那么，我就将你们送到女神所在的空间吧。", 32, 2470000)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(40605, "");
                    cm.forceStartQuest(40605, "");
                    cm.dispose();
                    cm.warp(327090330, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40605.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#b(得说些什么呢？亲眼见到，我都不知道该说些什么了……)", 44, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("女神…… 女神为什么那么想要拯救冒险岛？", 44, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那是…… 因为我很爱冒险岛。我真的很希望你们也能喜爱冒险岛。", 32, 2470022, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face11#你知道我们是谁吗？创造我们…… 你不觉得后悔吗？", 44, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("…………", 32, 2470022, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("请记住。#b所有人都能改变自己的未来，但是时间超越者却无法改变#k。时间超越者所看到的未来是固定了的…… 那就是时间超越者的宿命。", 32, 2470022, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("你们的选择绝对不会改变。所以请不要忘记你们应该做的事情……", 32, 2470022, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face1#……等下！我问的不是这个……！", 44, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face1#空间正在关闭！", 44, 2400005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(40605);
                                                cm.forceCompleteQuest(40963);
                                                cm.gainExp(37900800);
                                                cm.dispose();
                                                cm.warp(327000000, 10, false)
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