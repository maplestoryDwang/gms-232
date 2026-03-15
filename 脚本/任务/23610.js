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
            cm.sendNormalTalk("你好？你是#b#h0##k，对吧？我叫托内罗, 这次我的任务是把反抗者的秘密指令交给你。来，拿着。", 4, 3001004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你是谁？", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你不必知道那些。那么，我可是把#b反抗者的秘密指令#k转交到你这里了。至于内容嘛，呃……等我离开后，你自己来确认吧。", 4, 3001004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("？！瞬间消失了。\r\n反抗者的秘密指令？要看看是什么内容吗？", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你好，#b#h0##k。最近过得怎么样？找到你可真不容易。不过要想避开格里梅尔的追踪，这也是没办法的事。因此这封信专门通过我这个世界上最专业的人送达。他们虽然是群奇怪的人，但在这件事情上，他们是可以相信的……先说这么多，让我们进入主题吧。", 4, 2159390, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这段时间，反抗者为了对冒险岛世界发生的异常现象进行研究，秘密地派出了研究员。随着最近异常事件越来越多，我们需要更加系统的情报。在联盟的支持下，我们成立了#b新的研究机构#k。但是由于刚刚创建，那边非常缺少人手。可以的话，你能到那里去帮助他们吗？", 4, 2159390, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我想他们也许会为你的问题找到解决方法。因此这件事不仅是反抗者的委托，也是我个人的委托。祝你好运。", 4, 2159390, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askAcceptDecline("……可以解决我的问题？\r\n是说他们能帮助我不被#p2154009#追踪吗？总之请你快点到秘密研究机构去看看吧。\r\n\r\n#r(接受后立即移动。)#k", 16, 0)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(23610, "");
                                            cm.forceCompleteQuest(23610);
                                            cm.gainExp(4000);
                                            cm.dispose();
                                            cm.warp(230050000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23610.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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