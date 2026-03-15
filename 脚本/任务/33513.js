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
            cm.sendNormalTalk_Bottom("我听说你们在找兼职。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("等下，你怎么知道的？", 37, 1530100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("南哈特的情报能力~", 37, 1530110, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#不要惊讶。刚才王都桑大叔打电话来，冲我发了一通火。他说你们把裤子变成了抹布。", 37, 1530070, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#虽然我已经说了很多次，不过伊莉娜得更清楚自己的力量到底有多大……", 37, 1530070, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#你为什么认为是我干的？！\r\n算了，你要是没什么事，那我就挂了！哼！", 37, 1530604, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("这，看来你误会我的话了。\r\n我是打算介绍给你们适合的兼职工作呢……\r\n对不起，我先告辞了。", 37, 1530070, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("等，等，等，等下！！！", 37, 1530604, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("如果你们想要兼职，就去晚霞空地吧。嘟嘟。", 37, 1530070, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#喂？喂？\r\n你们听见了吧？那家伙刚才挂了我的电话！", 37, 1530604, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("嘿嘿嘿，但是在空地那里能有什么兼职呢？", 37, 1530110, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("我们只能先去看看了。", 37, 1530090, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#b(我们坐公交车去晚霞空地吧。)#k", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(33513, "");
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
            cm.sendNormalTalk_Bottom("你们是谁？", 37, 1530639, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哦哦，就是这个？", 37, 1530100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("谢谢，南哈特~", 37, 1530110, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(33513);
                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                        cm.dispose()
                    }
                }
            }
        }
    }
};