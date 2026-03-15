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
            cm.sendNormalTalk_Bottom("你是上来打扫卫生的？这么快就被当成是闯祸鬼转校生啦，看来以后可有你受的了。", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("学生会长说，最近#r灰尘#k还有#r灰突突的痕迹#k特别多。", 57, 1530053, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("也许那都是怪物干的。", 37, 1530050, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("怪物？", 57, 1530053, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("详细情况我以后再和你说。现在你先通过旁边的传送口去对付怪物吧？", 37, 1530050, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我会在这儿等你的。\r\n\r\n#b（进入传送口并消灭怪物，然后获得50个奇妙的尘粒吧。）#k", 37, 1530050, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(32736, "");
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
            cm.sendNormalTalk_Bottom("辛苦你啦。你刚刚消灭的那些怪物……以后我们就简称其为#r尘土怪#k吧。", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(330002104, 0)
            }
        }
    }
};