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
            cm.sendNormalTalk_Bottom("糟糕，手机居然关机了？你知道希纳斯小姐要去的约会场所是哪儿吗？", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("该死！我本该问问约会地点是哪儿的！这样下去的话……希纳斯小姐……希纳斯小姐！", 37, 1530070, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(330002114, 0)
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
            cm.sendNormalTalk_Bottom("#h0#，我在这儿呢，这儿！", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("莉莉，你看见希纳斯了吗？", 57, 1530058, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("怎么会没看见呢？她刚刚才从这条路过去。不过话说回来，#h0#，我对你搜集回来的奇妙的尘粒进行了分析，结果发现了非常有趣的事实呢。", 37, 1530050, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("尘土怪是从一个人的阴暗内心中衍生出的怪物。讨厌他人的心理，嫉妒他人的心理……尘土怪就是一点点吞下人们这样的心理而逐渐长大的。", 37, 1530050, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("而且，当这种阴暗的心理被什么人激发到最大时，尘土怪就会变得极其巨大。而且也不会继续隐藏，而是跑出来肆意攻击人类。那正是#r闹事者#k。", 37, 1530050, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(32752);
                                cm.updateInfoQuest(32719, "gal=1;sms=1;add=0");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};