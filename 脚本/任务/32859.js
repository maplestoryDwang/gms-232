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
            cm.askMenu_Bottom("#h0#，你的想法呢？你觉得卡珊德拉所说的是不是真的？\r\n#b\r\n#L0#	我觉得是真的#l\r\n#L1#	我觉得她在说谎#l", 37, 1530110)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你是这么想的啊……总之，如果想要了解真相，就必须亲自前往旧楼。旧楼就是紧挨着我们学校的那个老建筑。", 37, 1530110, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("呃……我实在不敢靠近那里。想到半夜前往旧楼，我的心脏都要跳出来了。", 37, 1530110, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("拜托你了。你能替我前往旧楼，查明传闻是否属实吗？", 37, 1530110)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("不会有什么问题的。\r\n#b（前往旧楼，察看下情况吧）#k", 37, 1530110, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32859, "");
                                cm.getTopMsgFont("前往街心, 就能进入学校旁边的旧楼了. ", 3, 20, 20, 0);
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
            cm.sendNormalTalk_Bottom("快过来，#h0#。我感觉你在做什么有趣的事情，于是跟着你来到了这里。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("什么？传闻说这里原本是墓地？\r\n啊哈哈哈，原来每个学校都有类似的传闻啊。我以前上学时，也听说过这样的传闻。那时好像有人说只要挖开地面，就能看到骸骨了？", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("为了看到骸骨，我和朋友们拼命练习了一个月的挖地的魔法。\r\n最终我们挖开了地面，结果别说骸骨了，连根狗骨头都没看见！", 37, 1530030, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……不过，我们挖出了石油，我们校长因此变成了富豪。", 37, 1530030, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……你们究竟挖得有多深啊？", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("这个么，只怪我们当时不肯服输，所以在不知不觉中就……\r\n哈哈，这已经是很久前的事情了。", 37, 1530030, true, true)
                            } else {
                                if (status === a++) {
                                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                                    cm.forceStartQuest(32859, "");
                                    cm.forceCompleteQuest(32859);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};