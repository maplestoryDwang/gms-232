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
            cm.sendNormalTalk_Bottom("喂？#h0#？特大消息！", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我刚刚在旧楼那里听到了奇怪的声音。旧楼空无一人，怎么会传来孩子的哭声……你难道不觉得奇怪吗？我都快被吓死了！", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("难道这次卡珊德拉说的都是真的？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("嗯？卡珊德拉说了什么？", 37, 1530030, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("据说看门大叔每晚都在旧楼进行召唤鬼怪的恶魔仪式。", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("什么？就是那个看起来要吃人的看门大叔？\r\n他刚刚听到孩子的哭声后，就笑嘻嘻地进入了建筑物内部！", 37, 1530030, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("呃呃，我好怕。会不会真出什么事情啊？\r\n你能到我这里来一趟吗？我就在旧楼正门前。", 37, 1530030, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("快过来，我好怕~\r\n#b（前往旧楼正门吧）#k", 37, 1530030, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(32865, "");
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
            cm.sendNormalTalk_Bottom("你来啦，#h0#。那个没用的埃尔文说他害怕，就先回去了。", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我吗？我一点都不怕鬼。倒是挺怕虫子的。", 37, 1530050, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32865, "");
                    cm.forceCompleteQuest(32865);
                    cm.updateInfoQuest(32720, "sms=161");
                    cm.dispose()
                }
            }
        }
    }
};