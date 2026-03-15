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
            cm.sendNormalTalk_Bottom("不过，#h0#，我听说你昨天在巴士上和奥尔卡一起聊天了？是真的吗？你们是怎么变得那么亲近的？", 37, 1530110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那个……\r\n\r\n#b（简单讲述了和奥尔卡的对话内容）#k", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……什么，居然聊得那么深刻……无意中就变得亲近了？", 37, 1530120, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我以为只是她的性格不太好，没想到心里还有那么深的伤痛……原来她是个那么害怕孤独的姑娘呢。", 37, 1530110, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("虽然我还是不太喜欢她……但现在感觉她还是挺有人性的。", 37, 1530120, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("……我都做了什么啊？太没出息了……现在不是看着照片嬉笑的时候！因为就在此时，她也正承受着无尽的痛苦啊！", 37, 1530140, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#终于认识到自己的没出息啦。", 37, 1530120, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("反应可真慢。", 37, 1530110, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("很好，我决定了！只要能抚慰她的伤痛，我不会再有任何恐惧！我现在就要向她告白！！", 37, 1530140, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(32785, "");
                                                cm.forceCompleteQuest(32785);
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
            cm.sendNormalTalk_Bottom("哎呦喂，我要死了……你把照片带回来了吗？", 37, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("没错，我想要的正是这个！竟然是雨中的奥尔卡……实在是太棒了~！", 37, 1530140, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32784, "");
                    cm.forceCompleteQuest(32784);
                    cm.dispose()
                }
            }
        }
    }
};