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
            cm.forceStartQuest(31366);
            cm.gainItem(4036091, 1);
            cm.dispose()
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
            cm.sendNormalTalk("我的天啊！！吓我一跳！你是谁啊？", 1, 2192011, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊~是多洛米的朋友啊……我没想到他还有勇士朋友？", 1, 2192011, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b(递上蝴蝶结胸针，转述多洛米的叮嘱。)#k", 3, 2192011, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哇！给我的吗？这可真是，怎么还给我这个啊。", 1, 2192011, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("他是怎么知道多檀智喜欢蝴蝶结的，嘿嘿。", 1, 2192011, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(31389, "ex=2");
                                cm.openUI(1151);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/heart", 128);
                                cm.forceCompleteQuest(31366);
                                cm.sendNormalTalk("瞧瞧~！蝴蝶结戴好啦，多洛米~", 1, 2192011, true, true);
                                cm.gainItem(4036091, -1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b(可以知道多檀智的心跳了，去和#p2192003#对话。)#k", 3, 2192011, true, false)
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
};