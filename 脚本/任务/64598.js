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
            cm.sendNormalTalk_Bottom("#b那个……你好！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你好！米兰达 ", 37, 9400920, true, true)
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
                                            cm.forceStartQuest(64598, "");
                                            cm.sendNormalTalk_Bottom("#face0#好吧，不过现在没多少商品可供挑选。", 37, 9400924, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.openShop(9400952);
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
            if (!cm.haveItem(2671002)) {
                cm.openShop(9400952);
                cm.dispose()
            } else {
                cm.sendNormalTalk_Bottom("#face0#怎么样？", 37, 9400924, false, true)
            }
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b嗯……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#米兰达！这真是太帅了，这个完全表现出了木头原本的味道呢？你的实力好像越来越出色了。", 37, 9400920, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#呼。\r\n(似乎在看我。) ", 37, 9400924, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b很……很帅气！", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#以后如果有了新商品，你们再来看看吧。", 37, 9400924, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b谢谢，那就下次见吧！", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1##h0#，现在回家吧。", 37, 9400920, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(64598);
                                            cm.OnStartNavigation(871000000, 0, "goHome", 0);
                                            cm.dispose()
                                        } else {
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
};