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
            cm.sendNormalTalk("有事吗？现在暂时没有竞技大会。快走吧，别挡了我的路。", 0, 3001237, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啧，是肯恩支部的家伙啊……你们不会想搞什么小动作吧？\r\n", 0, 3001237, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我、我们是来提前登记，参加竞技大会的。我、我们本来就是这样的性格，什么事情都想要快人一步，哈哈……", 4, 3001206, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("噢，是这样啊……你来报名参加竞技大会吗？那要先交参加费，#i4036147:# #b15条摇尾#k。\r\n", 0, 3001237)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34626, "");
                            cm.sendNormalTalk("虽然你可能不太情愿缴纳参加费用，不过请相信，我们所做的一切都是为了保护选手。咳咳，这就是Mr.哈扎尔大人的人道主义之心吧？\r\n", 0, 3001237, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#i4036147:# #b摇尾#k可以从#b斗狗场1#k中的#r幽灵野狗#k处获得。只要你们足够强大，这点事情还不是小菜一碟？\r\n", 0, 3001237, true, true)
                            } else {
                                if (status === a++) {
                                    cm.OnStartNavigation(402000310, 0, "", 34626);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34626.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("嗬，你真把15条摇尾弄来了。这下我可以去向曼格夫交差了，喀喀！\r\n", 0, 3001237, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("诶嘿，你们已经有足够的资格参与竞技大会了！进去看看吧。\r\n", 0, 3001237, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(34626);
                    cm.forceCompleteQuest(34655);
                    cm.gainExp(11161);
                    cm.sendNormalTalk("眉开眼笑地走了呢。总、总觉得是把自己该做的事情推给我们了……\r\n", 4, 3001251, true, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(4036147, -15);
                        cm.sendNormalTalk("无论如何，能进场就行了……不过，你打算拿摇尾做什么呢？\r\n", 4, 3001251, true, true)
                    } else {
                        if (status === a++) {
                            cm.OnStartNavigation(402000301, 0, "south00", 0);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};