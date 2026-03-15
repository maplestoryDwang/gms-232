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
            cm.sendNormalTalk("把果汁倒到书上看看吧。\r\n\r\n（获得#i4220199# #b被诅咒的魔道书和#i2630360#攻击兵果汁。）", 4, 1013440, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(35973, "0");
                cm.sendNormalTalk("被诅咒的魔道书……。看上去和三胞胎制作的黑暗预言书没什么两样。虽然内容很可怕，但字体看上去非常稚嫩，就像是出自孩子之手。\r\n\r\n（#b在其他窗中使用#r被诅咒的魔道书#k后，把#b攻击兵果汁#k洒上去。）", 2, 1013417, true, true);
                cm.gainItem(4220199, 1);
                cm.gainItem(2630360, 10)
            } else {
                if (status === a++) {
                    cm.dispose()
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
            cm.sendNormalTalk("哦……行了吗？上面画了个火炉！", 4, 1013441, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("看！我说能行吧！", 4, 1013442, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("为什么能行呢？", 4, 1013440, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不知道……", 4, 1013441, true, true)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                            cm.sendNormalTalk("那是因为果汁起到了显影剂的作用。墨水的酸性……", 4, 1013447, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那位大叔好像很悠闲嘛。", 4, 1013441, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("别管他。进去之后再说。", 4, 1013441, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("！！", 4, 1013447, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(35973);
                                            cm.gainExp(713849);
                                            cm.removeAll(2630360);
                                            cm.gainItem(4220199, -1);
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