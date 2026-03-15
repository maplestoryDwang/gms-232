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
            cm.sendNormalTalk_Bottom("#face0#小荳啊！", 37, 2074100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哦，姐姐？你怎么会在这里……", 37, 2074143, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#搞什么，这是怎么回事，\r\n你为什么会在这里？郡守怎么样了？\r\n还有衣服又去哪儿了？小荳啊，这是怎么回事啊？", 37, 2074100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("啊……那个，姐姐，对不起，\r\n事情，变得稍微有点复杂了呢？", 37, 2074143, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#搞什么？难道是郡守甩了你吗？\r\n我立刻去把那家伙！", 37, 2074100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("不是，不是，姐姐，其实……", 37, 2074143, true, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(224000053, 20)
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
            cm.warp(224000056, 27, true)
        }
    }
};