var status = -1;

function start(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    if (cm.getPlayer().getMapId() == 807020000) {
        var a = -1;
        if (status <= a++) {
            cm.dispose()
        } else {
            if (status === a++) {
                cm.sendNextS("这里就是枫叶原啊……织田军的动作比我们想象中要快得多。他们已经建起了具有一定规模的营地. 如果不是元就大人迅速作出判断, 恐怕他们已经大举进攻枫叶山丘了。")
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("不过话说回来……气息变得更加明显了。看来，气息的根源应该就在这附近。", 9130081)
                } else {
                    if (status === a++) {
                        cm.sendNextPrevS("这个气息应该不是从广阔的原野上散发出来的。如果我没有猜错，这个气息应该是从织田军手中的什么东西上散发出来的。就来一边击退敌兵，一边进行搜索吧。只要能打倒50个敌人，应该能找到什么线索吧。")
                    } else {
                        cm.forceStartQuest();
                        cm.dispose()
                    }
                }
            }
        }
    } else {
        var a = -1;
        if (status <= a++) {
            cm.dispose()
        } else {
            if (status === a++) {
                cm.sendNextS("快点赶去#b#m807020000##k吧。")
            } else {
                if (status === a++) {
                    cm.sendOk_Illus("#b#m807020000##k就位于那边吧。", 9130081)
                } else {
                    cm.dispose()
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
            cm.sendNextS("呼……都找了这么半天了，但还是什么也找不到。")
        } else {
            if (status === a++) {
                cm.sendNextPrev_Illus("是不是你看错了啊？现在根本就没法确定散发出这气息的东西一定掌握在织田军的手里吧？", 9130081)
            } else {
                if (status === a++) {
                    cm.sendNextPrevS("这个气息我们昨天还没有感觉到，但是今天却突然出现了。同一时间，织田军也出现了。这么一联想，应该可以确定东西就掌握在织田军的手中吧？")
                } else {
                    if (status === a++) {
                        cm.sendNextPrev_Illus("你说得倒也有几分道理。", 9130081)
                    } else {
                        if (status === a++) {
                            cm.sendNextPrevS("总之，我们现在的搜索方法似乎有点问题。看来需要想个其他搜索办法出来才行。")
                        } else {
                            cm.forceCompleteQuest();
                            cm.gainExp(103);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};