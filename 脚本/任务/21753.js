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
            cm.sendNormalTalk("刚才听到#m300000011#里面有什么声音传出来……是你吗，战神？封印石找到了吗？", 8, 2131000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(讲述#m300000011#里发生的事情。)#k", 2, 2131000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……那些家伙竟然在这里出现……对不起，战神。我应该好好保管的……", 8, 2131000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#p2131000#，不是你的错。", 2, 2131000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你还是老样子。不过……你提到封印石的事情，让我想起了一个线索。", 8, 2131000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("线索？", 2, 2131000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("是的，我发现了一封你过去写的信，里面有和封印石有关的线索。你想看看吗？", 0, 2131000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("……嗯？信……", 9, 2131000, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b#i4032327#(无法拿到信。信通过了手，掉到了地上。)#k", 3, 2131000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("……虽然我不太清楚时间法则……但我不能把这封信交给你的原因，应该是#b因为我们属于两个不同的时空#k……真让人伤感。不久之前我们还是同伴……", 9, 2131000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("……你也知道，我们妖精可以活很长时间。虽然你成为了几百年以后的人，但我应该也能活到那个时候。战神，#b我会好好保管这封信，请你在你的那个时代过来找我。#k", 9, 2131000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("虽然过了几百年时间，但我想你应该不会忘记这个约定。让我们以后再见吧。我会等着你的。", 9, 2131000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.askYesNo("#b（回到#p1201000#所存在的时间，去找找#p2131000#吧。请求#p1002104#肯定可以找到#p2131000#的。）#k#r（接受后立刻前往#m104000004#。）#k", 2, 2131000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.dispose();
                                                                cm.forceStartQuest(21753, "");
                                                                cm.warp(104000004, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21753.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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