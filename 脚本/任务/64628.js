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
            cm.sendNormalTalk_Bottom("#face0#噢噢，你回来了啊。", 37, 1002104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#一，二，三……数量是对的，很好。", 37, 1002104, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#很可惜，那个明信片里面的椰子树并不是明珠港的椰子树。", 37, 1002104, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#应该就是在金海滩或者凯梅尔兹这两个地方之一，这能帮到你们吧？", 37, 1002104, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#哎呀，这就完了？我们早就知道这两个地方了啊~！你就没有更准确的情报了吗？", 37, 9400920, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#……可惜。要想知道具体位置，需要多花一些时间。", 37, 1002104, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#哼，真是没意思。", 37, 9400920, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face3#艾米，别这么大声地说出来。", 37, 9400921, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b谢谢你，特鲁，反正我们本来也打算要去这两个地方，我们会去确认的。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#这可真是让人难堪呢。这个嘛……那么，要不这样吧？我马上把你们送到金海滩。", 37, 1002104, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#好的！", 37, 9400920, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b好极了！", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#好的，前往金海滩的传送卷轴……在这里！那我马上把你们送过去，请你们好好找找吧。", 37, 1002104, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceCompleteQuest(64628);
                                                                cm.gainItem(4036537, -50);
                                                                cm.dispose();
                                                                cm.warp(120040000, 2)
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