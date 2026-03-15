var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("咳咳咳……")
        } else {
            if (status === a++) {
                cm.sendNext("啊……抱歉。最近事情太多，我嗓子有些不舒服。")
            } else {
                if (status === a++) {
                    cm.sendNextS("有什么我能帮忙的吗……？")
                } else {
                    if (status === a++) {
                        cm.sendNext("啊……那能麻烦你帮我收集#i4036505# #r#t4036505##k吗？")
                    } else {
                        if (status === a++) {
                            cm.sendNext("附近的#b#o3501108##k和#b#o3501109##k身上就有。\r\n请灌满我给你的小水瓶就行了。")
                        } else {
                            if (status === a++) {
                                cm.gainItem(4220196, 1);
                                cm.forceStartQuest();
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.forceCompleteQuest();
    cm.gainExp(8400);
    cm.removeAll(4036503);
    cm.removeAll(4220196);
    cm.dispose()
};