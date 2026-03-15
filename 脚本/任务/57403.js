var status = -1;

function start(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext_Illus("啊，阁下是……")
        } else {
            if (status === a++) {
                cm.sendNextPrevS("我是土御门春秋的弟子，我名为神那。在进行本能寺攻略战的军事会议上，我们曾经有过数面之缘。不过像这样交谈还是头一次呢。毛利大人，我是刚刚才到达“这边”这个世界，并在兼续的引领下来到据点的。")
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("欢迎来到#b#m807000000##k。不知道该说是幸运还是不幸，我和我的三个儿子是最先到达“这边”这个世界的。所以我们就在联合军聚集的据点建起了#b#m807000000##k的本阵。同时，我们也在帮助之后来到“这边”这个世界的人尽快适应这里。")
                } else {
                    if (status === a++) {
                        cm.sendNextPrevS("为什么还要帮助大家适应这里啊？")
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Illus("那就请神那你先确认一下，看看现在的自己是否能够活动自如吧。")
                        } else {
                            cm.forceStartQuest();
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNextS("这是怎么回事？我完全没有力气施展法术……就好像是被什么人堵塞了自己的气脉一样……难道这就是异常情况带来的影响吗？")
        } else {
            if (status === a++) {
                cm.sendNextPrev_Illus("你总算注意到了。神那平时看起来很敏锐，没想到你也有这么迟钝的时候……", 9130081)
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("没错。在我看来，之所以我们没有办法充分发挥实力，是因为我们过去所在的日本和“这边”的世界有所差异。也就是说，两个世界的物理法则完全不同……")
                } else {
                    if (status === a++) {
                        cm.sendNextPrevS("那就麻烦了。突然来到这个未知的世界，已经让我觉得很是头疼了。没想到居然还不能发挥出原本的力量……")
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev_Illus("我刚才提到的帮忙适应这个世界，指的就是这个意思。不过，我们的方法并不能从根本上解决这个问题，只能当作是临时应急用。")
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest();
                                cm.gainExp(1242);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};