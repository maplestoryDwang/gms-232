function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("我真的好久没到实验室外面来了……", 1, 2159007, false, false)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哼，那些该死的东西……竟敢逃走？", 1, 2159008, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊，被发现了！", 3, 2159008, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("再逃也逃不过我的手掌心。不要做无谓的反抗，快投降吧。实验体能到哪里去呢……咦？虽然后面的家伙看上去很可疑……不过你好像不是实验体啊！什么？是村里人吗？", 1, 2159008, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是的！我是埃德尔斯坦的居民！", 3, 2159008, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("切……我好几次叮嘱这里的人不要让小孩子靠近矿山，他们却听不进去。愚蠢的村民……没办法。我不能让你回村里去散布和实验室有关的消息，我得把你抓起来。", 1, 2159008, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("什么？你以为我会束手就擒吗？", 3, 2159008, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("哼，真狂妄……我倒要看看你能狂妄到什么时候。", 1, 2159008, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b(受到了席勒的攻击，体力降到了一半！该怎么办呢？正面作战的话好像没办法打败他！)#k", 3, 2159008, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("这下嘴上不敢再逞能了吧？我要建议格里梅尔在你身上做点更厉害的实验。呵呵呵……乖乖投降吧！", 1, 2159008, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("等等！", 4, 2159010, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.dispose();
                                                        cm.warp(931000021, 1, false)
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
    }
};