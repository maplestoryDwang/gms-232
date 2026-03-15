var status = -1;

function start(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("都搜集到了吗？", 4, 1501013, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这么多，应该就能把房子全部照亮了。", 4, 1501013, true, true)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.removeAll(4036500);
                    cm.updateInfoQuest(37162, "light=on");
                    cm.sendNormalTalk("切……自己说要想唱好歌，就必须得到森林之光的映照……", 5, 1501010, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我听到了。", 5, 1501013, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("…………", 3, 1501001, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(37162);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};