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
            cm.sendNormalTalk_Bottom("队长~~~队长队长，你现在要去哪里？", 36, 9401032, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b还没决定。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("也是……就算你决定好了，我也很难跟着你吧？我们的实力差距还是太大了呢！", 36, 9401032, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b米西蒂应该很快就可以赶上我。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嘿嘿，谢谢。就算是客套话，我听着也很开心！", 36, 9401032, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("那个，我其实决定好去处了。你看这个地图，就是这里！艾利涅！", 36, 9401032, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b艾利涅？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("嗯嗯，队长应该去过吧？我遇见了一个刚去过那里的冒险家，天哪！那里居然有会说话的猫咪？！", 36, 9401032, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("世界上神奇的事情真是太多了！额哈哈", 36, 9401032, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("我在纠结艾利涅之旅结束后，下一步去哪里，队长有什么推荐吗？", 36, 9401032, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askMenu_Bottom("#b推荐的话……\r\n#L0# 建立在美丽海底下的水中城市，水下世界怎样？#l \r\n#L1# 在沙漠中央、以绿洲为中心建立的阿里安特怎样？#l \r\n#L2# 时间静止之湖上的玩具村，玩具城怎样？#l \r\n", 56, 0)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("哇塞！真的太帅啦！我要去看看多少级以后能去那里。怎么办？我已经开始激动了！", 36, 9401032, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("队长，你再等等我。我会快快成长，然后去队长所在的地方！", 36, 9401032, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#b呵呵，我会等着你的，米西蒂。", 56, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceCompleteQuest(64796);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64796.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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