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
            cm.sendNormalTalk("#h0#？真的是你啊，我听说你正在寻找坠落的流星的痕迹。那你有没有和流星坠落地的怪物交过手？那想必你已经知道了，我是指#b怪物们即使受到攻击，好像也不会受到多大伤害#k这件事。\r\n\r\n啊啊，如果你觉得没什么变化，那肯定是你已经在使用#r#e星之力#k#n了。你听不懂我在说什么？那我来为你详细说明一下吧。", 1, 2300001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("坠落在那里的流星具有非常特别的力量。那力量能让怪物们变得更加残暴，让其他东西变得邪恶。因此，流星坠落地的怪物不会因普通攻击受到伤害。你问该怎么做才能让流星的力量失效？这个问题的答案正是#r#e星之力#k#n。", 1, 2300001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你应该知道星之力强化后的装备会蕴含星之力吧？那力量能够抵消怪物身上的星之力。简单地说，如果你通过#r#e星之力强化#k#n得到足够的星之力，就能正常对怪物造成伤害了。\r\n\r\n换句话说，#b星之力越少，对怪物造成的伤害就越低#k。", 1, 2300001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("根据各地区坠落的流星的大小，所需的星之力的量也会各不相同。进入地图时，会标注所需的星之力的个数，你可以参考。这是我们目前所知道的一切。如果有新的研究发现，我会再次与你联系的。", 1, 2300001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("(从文博士那里听取了有关星之力强化的说明。把这些内容告诉#p2041026#吧。)", 3, 2300001, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(25972, "");
                                cm.forceCompleteQuest(25972);
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25972.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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