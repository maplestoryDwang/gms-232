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
            cm.sendNormalTalk_Bottom("#face0#哇！这里的建筑长得跟利奥一样~~~？", 36, 3001312, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#通过扫描建筑发现，玛奇那和建筑的相似性高达95%以上。", 37, 3001300, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#才不是呢~！我跟你更像吧~？", 37, 3001312, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#那、那个你们……你们该不会在吵架吧？", 37, 3001310, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#通往古代神之圣所的大门，应该就在这里啊……", 37, 3001308, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face4#说不定这次能找到。大家加油啊。", 37, 3001354, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(34854, "");
                                    cm.forceCompleteQuest(34854);
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
            cm.dispose()
        }
    }
};