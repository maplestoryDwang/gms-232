var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            cm.sendNormalTalk_Bottom("你问我为什么突然要狩猎麻雀？\r\n别提了。那些#b小偷麻雀#k居然偷走了战斗用粮#b饼干和星星糖#k！", 37, 1540551, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(33165, "");
                cm.sendNormalTalk_Bottom("居然会发生如此荒唐的事，这都怪骑士团……咳咳，没什么。请你去查看一下吧。\r\n#b（在返回途中，查看一下情况吧）#k", 37, 1540551, true, false);
                cm.npc_LeaveField("oid=23641983");
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
            cm.sendNormalTalk_Bottom("嘿，你来得正好。你能帮忙劝劝这些家伙，让他们不要打架吗？", 37, 1540554, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呃……其实也不是什么大事。因为战斗用粮不见了，所有他们才发生了争执。", 37, 1540554, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这都是你们的责任。你们应该好好看守粮食仓库！", 37, 1540552, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("什么？这都怪你们没看好甲板，都是你们的错！", 37, 1540553, true, true)
                    } else {
                        if (status === a++) {
                            cm.askMenu_Bottom("……呃，大致情况就是这样。你对此怎么看？\r\n#b\r\n#L1#这是希纳斯骑士团的错#l  #L2#这是反抗者的错#l\r\n#L3#这是谁的错都不重要，重要的是一起解决问题#l", 37, 1540554)
                        } else {
                            if (status === a++) {
                                if (b == 3) {
                                    cm.sendNormalTalk_Bottom("…………", 37, 1540552, false, true)
                                } else {
                                    cm.sendNormalTalk_Bottom("……你怎么能在这种情况下偏袒一方呢？", 37, 1540554, false, false);
                                    cm.dispose()
                                }
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("…………", 37, 1540553, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("好了……听到了吗？\r\n我知道你们相互不满，但既然我们现在同乘一条船，那就应该冷静点。", 37, 1540554, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(33165);
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