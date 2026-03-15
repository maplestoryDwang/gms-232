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
            cm.sendNormalTalk_Bottom("可是为什么你们俩会在一起呢？你们什么时候成为这么要好的朋友了？", 37, 1530110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哈哈哈，我正在给新来的#h0#介绍我们的城市呢。", 37, 1530060, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#怎么看都觉得你像是被介绍的那个？", 37, 1530120, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("呃……不是的。都说了是我在介绍嘛。", 37, 1530060, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你们要是想去有趣的地方，不妨到#b天桥对面#k看看怎么样？那里有个用塔罗牌算卦的地方，听说很准呢。", 37, 1530110, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("真的吗？谢谢你，奥兹！#h0#，我们到天桥对面去吧。", 37, 1530060, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(32743, "");
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
            cm.sendNormalTalk_Bottom("希纳斯小姐，还有转校生……？真是个奇妙的组合。你们来这里有什么事吗？", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你说我吗？没什么特别的事。只是最近对研究占星术产生了兴趣。", 37, 1530070, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32743);
                    cm.dispose()
                }
            }
        }
    }
};