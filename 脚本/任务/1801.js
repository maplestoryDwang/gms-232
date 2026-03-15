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
            cm.sendNormalTalk("感谢你来到埃德尔斯坦。因为必须告诉联盟下属的各位，所以才突然和你联系。我就简单地为你说明一下埃德尔斯坦地下矿山发生的事情。首先……你知道左边的人是谁吗？", 1, 2151003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……那个人是……！", 3, 2151003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你的猜测是对的。是的，她就是黑色之翼的创始人和领导者，黑魔法师的军团长……", 1, 2151003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("奥尔卡？", 3, 2151003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是的，他就是占领埃德尔斯坦并夺取能源，在冒险岛世界各地夺取封印石，攻击联盟成员双弩精灵的人……军团长奥尔卡。", 1, 2151003, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我说后来她怎么就销声匿迹了……看来是有原因的。黑色之翼内部，以及军团长的构成都发生了巨大的变化。", 1, 2151003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("老实说，我们也没有完全掌握所有的情况……根据军团长奥尔卡的陈述和在地下矿山研究所中发现的痕迹，我们推测出了一些情况，所以才将联盟的人召集了起来。", 1, 2151003, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("好了，我来为你说明一下，军团长奥尔卡到底发生了什么事，以及我们所了解到的事件的真相。说明可能会有点长……但是这是非常重要的事情，希望你能注意听。", 1, 2151003, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(1801, "");
                                            cm.dispose();
                                            cm.warp(957020001, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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