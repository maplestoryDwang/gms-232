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
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31532.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哎……糟糕了。", 0, 3001100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b嗯？有什么事吗？难道圣物出事了？……", 2, 3001100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("对……很遗憾，那些圣物……", 0, 3001100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(咕噜)", 2, 3001100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("圣物全都完美地拼合起来啦。", 0, 3001100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b呃……", 2, 3001100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("真是太令人高兴了。是一个栩栩如生的龙形印章。说起来这拼合后的圣物……没我想象的独特，非常地普通啊。", 0, 3001100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("好了，现在……到了教训#r麦格纳斯#k的时间了。先收着这件圣物吧，这将会是进入他房间的钥匙。不过合并圣物需要费些功夫，我先休息一会儿再跟你说吧。", 0, 3001100, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(31532);
                                            cm.gainExp(75000);
                                            cm.gainItem(4033406, 1);
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
};