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
            cm.sendNormalTalk_Bottom("#face0##h0#，妖怪从来都很贪心。", 37, 9111002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#尤其是对金钱的欲望特别强烈！", 37, 9111002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不是只有妖鬼才这样吗……？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#嗯？才不是呢，你别不信我。你要是给那守护者送个上亿金币，他保证马上从家里冲出来。", 37, 9111002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……可是我没有那么多钱……", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯……没关系，有一千万金币应该够了。", 37, 9111002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("没有。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#一百万呢。", 37, 9111002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("……没有。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#唉……五万金币。不能再少了。", 37, 9111002, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("哎，价格怎么是由你定的啊", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face1#看样子是有这么多钱哦。\r\n总之先准备这么多，我也跟你一起去见他。", 37, 9111002, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("到底……", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceCompleteQuest(58784);
                                                                cm.sendNormalTalk_Bottom("唉……", 57, 0, true, false)
                                                            } else {
                                                                if (status === a++) {
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58784.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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