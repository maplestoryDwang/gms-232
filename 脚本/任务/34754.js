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
            cm.forceStartQuest(34754, "");
            cm.sendNormalTalk_Bottom("#face0#完成了！", 36, 3002110, false, true);
            cm.gainItem(4036318, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呃！这个味道！", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你，难道！在纸飞机上放了肥料？？？？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face17#那个嘛……", 36, 3002110, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face15#哈哈哈！强大的意志力是队员必不可少的素质！", 36, 3002110, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("……", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#好了！快把这种魔法肥料撒在树上！", 36, 3002110, true, true)
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
            cm.dispose();
            cm.warp(940204116, 0)
        }
    }
};