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
            cm.sendNormalTalk_Bottom("A组到了。", 36, 2052013, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("B组到了。", 36, 2052015, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("C组到了。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我这就把降落伞传送过去，各组从现在的位置降落到#b操纵室#k就好。", 36, 2052006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#嗯……？糟糕，#r干扰电波#k突然变强了。", 36, 2052006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b外星章鱼闪电棒#k正在释放出新形态的强大电波。", 36, 2052013, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#没办法了，赶紧解决掉，继续展开作战吧。", 36, 2052006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("来，那就先处理掉#b200个外星章鱼闪电棒#k吧！来，开始！", 36, 2052015, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("这次我可不会输！", 36, 2052014, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo_Bottom("#face0#干什么呢！突击！", 36, 2052014)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(3490, "");
                                                    cm.setPartner(1, 2052037, 80002246, 0);
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
            cm.sendNormalTalk_Bottom("C组200个完毕！！", 36, 2052014, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#糟糕，没想到这干扰电波这么厉害，到现在还有残留……", 36, 2052006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("大家伙，看来我们得接着去消灭这些家伙了……", 36, 2052010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("240个！241个！！哈哈哈，我已经开始啦！\r\n大家也别磨蹭了。", 36, 2052015, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我不能输！", 36, 2052014, true, true)
                        } else {
                            if (status === a++) {
                                cm.gainExp(11004938);
                                cm.forceCompleteQuest(3490);
                                cm.dispose();
                                cm.warp(221030731, 0)
                            }
                        }
                    }
                }
            }
        }
    }
};