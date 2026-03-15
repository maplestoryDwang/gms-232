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
            cm.sendNormalTalk_Bottom("#face1##h0#！我想了一下，这里应该要有个桌子才行。要是有一些能够装饰在墙上的装饰品就更好了！", 37, 9400921, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b那样应该会很棒呢！在哪里能找到桌子和装饰品呢？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#装饰品在广场上的米兰达的跳蚤市场就能买到。", 37, 9400921, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#家具得去其他村子的工坊买，但是现在没多少时间了，就拜托一下艾丹吧。", 37, 9400921, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#我去找艾丹，你和艾米一起去米兰达的跳蚤市场买装饰品吧？", 37, 9400921, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b我知道了！", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(64597, "");
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
            cm.sendNormalTalk_Bottom("#b那个……你好！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你好！米兰达。", 37, 9400920, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#…？", 37, 9400924, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b现在跳蚤市场还没开吗？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#正如你所见，我正在思考新的商品。", 37, 9400924, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯~~这下可麻烦了，为了庆祝#h0#搬来，我们正打算办搬家聚会呢，可是墙上实在太空了呢！", 37, 9400920, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#如果能将米兰达的特别~作品装饰在墙上，肯定会很棒的，所以我们才来到了这里呢！", 37, 9400920, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#… ", 37, 9400924, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#好吧，不过现在没多少商品可供挑选。", 37, 9400924, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(64597);
                                                cm.forceStartQuest(64598, "");
                                                cm.dispose();
                                                cm.openShop(9400952)
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