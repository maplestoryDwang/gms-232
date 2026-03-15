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
            cm.sendNormalTalk_Bottom("#h0#，你没忘记今天是演出的日子吧？", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("(当然没忘。)", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("好，我们现在都在讲堂的待机室，你快点来。还有……", 37, 1530100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("还有？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你来的时候带一个……不，没什么。你就当没听见吧，快点来！", 37, 1530100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b(通过新楼后院前往讲堂待机室。)", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(33518, "");
                                        cm.updateInfoQuest(32719, "sms=0;gal=1;add=0");
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
            cm.sendNormalTalk_Bottom("你来，来，来，来了啊，#h0#？", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("怎么办……如果我毁了布吉的歌可怎么办……", 37, 1530120, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊……练习……", 37, 1530100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("胡克你在用左手弹吉他？！", 37, 1530110, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("大家都别紧张了。", 37, 1530090, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("伊卡尔特你现在弹的是反的！", 37, 1530100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("但是布吉怎么还没来？", 37, 1530120, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                                        cm.forceCompleteQuest(33518);
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
};