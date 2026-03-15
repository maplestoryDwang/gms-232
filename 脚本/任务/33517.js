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
            cm.sendNormalTalk_Bottom("那个少女是？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("3年级的布吉。原本因为身体不好，经常不能来上学……最近一直勉强自己来上学，就变成了那个样子。而且她精神上还受到了打击。", 37, 1530070, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("精神上的打击？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("说来话长……正好校医不在，你能在附近找找退烧药吗？", 37, 1530070, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("以我的眼睛来说是找不到的，看来我还是得去配副眼镜了。\r\n\r\n#b(消灭尘土，搜集10个退烧药)#k", 37, 1530070, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(33517, "");
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
            cm.sendNormalTalk_Bottom("你搜集到退烧药了吗？", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我到处找都没找到，你是怎么找到的呢？真是神奇啊。", 37, 1530070, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(330002614, 0)
                }
            }
        }
    }
};