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
            cm.sendNormalTalk_Bottom("哦，你是#h0#吗？没错，就是你！哎哟～很高兴见到你！你跟我听说的一模一样嘛。", 36, 9401023, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哎呀呀，我忘记自我介绍了。我是来自深渊远征队本部的大叔，啊不是，罗伯特。大家都叫我大叔，连我都搞不清自己是大叔还是罗伯特了。", 36, 9401023, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哦哦～～你不用对我抱有太重的警惕心。我是受人介绍，好不容易才找到你的。", 36, 9401023, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b…受谁的介绍？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("那个谁～一直在前哨基地关注着#h0#。就是他把你夸得天花乱坠，向我极力推荐由你来负责这件事……那家伙叫什么来着……算了，叫什么不重要！哈哈 ", 36, 9401023, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("回到正题，不知道你有没有听说过冒险岛世界最近出现的巨大陷坑？", 36, 9401023, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b陷坑？没有，没听说过。", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("哦，好的。这是最新时事，不知道也是正常的。现如今，冒险岛世界与格兰蒂斯合体，有人在金银岛与神秘岛大陆之间的一座小岛屿上，发现了一个巨大的陷坑。许多冒险家们被“新大陆！”、“未知领域！”等词语所吸引，正聚集而来组成远征队。", 36, 9401023, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b深渊… ", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("哈哈，现在让我再次向你做一次自我介绍吧。我是在深渊远征队中担任人事队长的大叔！呃嗯……好吧，你就叫我大叔吧。我是为了邀请你成为远征队队长而来的！铛铛！", 36, 9401023, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b远征队队长？", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.askAcceptDecline_Bottom("哦吼～你似乎有些好奇？好奇心就是感兴趣的标志！快去远征队总部了解详细内容吧。想跟我一起吗？\r\n#b（※ 领取后前往深渊远征队总部，可通过传送口返回当前所在地。）", 36, 9401023)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("哦吼！很好，这个开始不错。远征队本部一定会合你的心意！我可以保证！", 37, 9401023, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(64760, "");
                                                                cm.updateInfoQuest(64759, "rMap=" + cm.getMapId());
                                                                cm.dispose();
                                                                cm.warp(867147001, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64760.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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