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
            cm.sendNormalTalk_Bottom("喂！快来帮帮我！", 37, 3003252, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#方便来一下#b据点#k吗？\r\n#r（同意后立即移动。）#k", 36, 3003209)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(34377, "");
                        cm.dispose();
                        cm.warp(450003100, 0, false)
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34377.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk_Bottom("来得正好，快过来。#h0#！", 37, 3003252, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("有什么事吗？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("多亏你击退了路西德，笼罩着这个城市的噩梦的威力正在慢慢减弱。可是……", 37, 3003252, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("之前路西德撒在全城的催眠粉还没有完全消失。\r\n因为那些粉末附在了周围怪物的身上，仍在被四处传播。", 37, 3003252, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("如果你能处理掉怪物和附在它们身上的催眠粉，\r\n将会对消除笼罩着这座城市的噩梦大有帮助。", 37, 3003252, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("实在是惭愧，但我还是想拜托你件事。\r\n#b报酬#k自然不会让你失望。", 37, 3003252, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("只要我能帮上忙，必定义不容辞。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("谢谢你。原来每天有#b3个#k请求。\r\n当然，在这个被噩梦笼罩的城市里，还有很多要做的事，也有很多其他的请求。", 37, 3003252, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("如果你准备好了，随时告诉我。", 37, 3003252, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(34377);
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
};