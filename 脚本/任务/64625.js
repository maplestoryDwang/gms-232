var status = -1;
var selectionLog = [];
var npcs = [9400920, 9400921, 9401160];

function start(f, e, d) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = d;
    var c = -1;
    var b = cm.getNumberFromQuestInfo(500773, "manager");
    var a = npcs[b];
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status == c++) {
            if (b == 0) {
                cm.sendNormalTalk_Bottom("#face0##h0#~~不久前我收到了杰弗里搬家聚会的邀请函呢~~ 日期就是今天，时间是……现在！？", 37, a, false, true)
            } else {
                cm.sendNormalTalk_Bottom("#face0##h0#，不久前我收到了杰弗里搬家聚会的邀请函呢。日期就是今天，时间是……现在！？", 37, a, false, true)
            }
        } else {
            if (status === c++) {
                cm.sendNormalTalk_Bottom("#b现在？", 57, 0, true, true)
            } else {
                if (status === c++) {
                    if (b == 0) {
                        cm.sendNormalTalk_Bottom("#face3#啊啊？来不及了！现在马上就要出发！\r\n#b(※接受时将立刻移动。)", 37, a, true, true)
                    } else {
                        cm.sendNormalTalk_Bottom("#face3#糟糕，已经迟到了！必须马上出发！\r\n#b(※接受时将立刻移动。)", 37, a, true, true)
                    }
                } else {
                    if (status === c++) {
                        cm.dispose();
                        cm.forceStartQuest();
                        cm.warp(871000020, 0)
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
            cm.sendNormalTalk_Bottom("#face0#你需要什么情报？来，不要犹豫，告诉我吧。", 37, 1002104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#你好！你知道出售这张明信片的地方吗？", 37, 9400920, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯~~看这张照片我大致知道是哪里。但是情报可不是免费的，小姐。", 37, 1002104, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#多少钱？我有钱！虽然这钱不是为了用在这里才攒的，你知道吧？不过这是为了寻找妈妈的冒险，所以可以用！", 37, 9400920, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#……虽然没多少。", 37, 9400921, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯，如果你能答应我一件事。那我也能直接告诉你。对于旁边这位勇士大人来说是非常简单的委托。", 37, 1002104, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b你的委托是什么？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#你听说过在埃德尔斯坦周围生成的“机械墓地”吗？如果你能消灭那里的猎犬机器人，找到50个天线碎片就行。", 37, 1002104, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b你为什么需要那个？", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askAcceptDecline_Bottom("#face0#我只能告诉你这是另外的委托。别再问了。情报商人的生命就是秘密。", 37, 1002104)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#好的。在这位勇士大人完成委托的时候，你们两位在这里待着就可以了。你们也可以去参观明珠港。这里是个历史很悠久的地方。", 37, 1002104, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face1#哇！真的吗？#h0#，可以……吗？", 37, 9400920, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#b当然了，我去去就回，你们不要去危险的地方。", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceCompleteQuest(64627);
                                                                cm.forceStartQuest(64628, "");
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
};