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
            cm.sendNormalTalk("有了那个，你们就能大概了解有关黑色之翼干部们的事情了。", 1, 1520014, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("有关黑色之翼干部的报告书？", 3, 1520014, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这不是反抗者的机密文件吗？这是从哪里弄来的？你到底是谁？", 5, 1520013, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我只是一个路过的反抗者罢了。那么，再见了。", 1, 1520014, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32361, "");
                            cm.sendNormalTalk("?! 又消失了？", 3, 1520014, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("不过，这埃德尔斯坦既是黑色之翼的根据地，又是反抗势力--反抗者的根据地。随便抓了个人，竟然就遇到了反抗者，而非黑色之翼，看来我们的运气真好啊。", 5, 1520013, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("很好，我们好像已经获得了需要的资料。你能不能先把这个交给赫丽娜呢？既然事已至此，我应该戴着这顶黑色之翼的帽子进到矿山里去看看。", 5, 1520013, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你把那个文件转交给赫丽娜吧。你得赶紧去，不能让冒险家们再互相猜疑。", 5, 1520013, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(32285, "");
                                            cm.npc_LeaveField("oid=1672683");
                                            cm.dispose();
                                            cm.warp(100000201, 1, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32285.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};