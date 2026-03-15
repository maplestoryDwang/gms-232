var status = -1;
var selectionLog = [];
function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom('#face0#希纳斯女皇在听闻了你的表现之后\r\n表示想要邀请你前来此地。', 36, 3003651, false, true, 1);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#你就是传闻中的那位道士啊，\r\n我听说你为我们冒险岛世界提供了不少帮助……', 36, 3003651, true, true, 1);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('#fc0xFFbfbfbf#（虽然我假装不是，但这人直觉敏锐，\r\n难不成想掂量掂量实力？好吧，那我就先发制人。）', 56, 0, true, true, 1);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#fc0xFFbfbfbf#（神不知鬼不觉地顺走了南哈特的怀表，并从他身后出现，\r\n对方看起来有些惊慌失措。）', 56, 0, true, true, 1);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face0#！？', 36, 3003651, true, true, 1);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('……乘虚而入的计策可是我所擅长的。', 56, 0, true, true, 1);
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom('#face0#可真是有趣呢。', 36, 3003651, true, true, 1);
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom('我这人还挺讲究兴致的。', 56, 0, true, true, 1);
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom('#face0#和你相识还算挺愉快的，\r\n……不过你若敢对女皇那么做，我绝对不会轻饶你，明白了吗？', 36, 3003651, true, true, 1);
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom('不仅讲究兴致，而且眼力劲十足。', 56, 0, true, true, 1);
                                            } else {
                                                if (status === a++) {
                                                    cm.askAcceptDecline_Bottom('#face0#如果你准备好了，我就领你去觐见女皇，\r\n你愿意觐见女皇吗？', 36, 3003651, 1);
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom('#face0#女皇就在我的右手边，\r\n你可以过去和女皇慢慢谈。', 36, 3003651, false, true, 1);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(36249, '');
                                                            cm.dispose();
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
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo('');
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose();
            }
        }
    }
}
function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom('#face0#你好，啦啦，我是圣地的女皇希纳斯。\r\n我一直都很想见见你。', 36, 3003655, false, true, 1);
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(36249);
                cm.dispose();
            }
        }
    }
}