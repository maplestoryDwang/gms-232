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
            cm.sendNormalTalk_Bottom("#h0#，你着急忙慌的，去哪儿了？我找你半天了。", 37, 1530080, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这个，那个……#b（讲述了事情的来龙去脉）#k", 57, 1530080, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("命运？差三岁可以直接结婚？这种荒唐可笑的话老师也会相信？真没想到你这么会撒谎。", 37, 1530080, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("现在可不是没事闲得开玩笑的时候。\r\n现在该到最后一搏的时候了。", 57, 1530080, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("最后一搏？", 37, 1530080, true, true)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.warp(330002317, 0)
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
            cm.warp(330002309, 0)
        }
    }
};