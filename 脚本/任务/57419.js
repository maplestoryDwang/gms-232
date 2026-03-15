var status = -1;

function start(c, b, a) {
    cm.forceStartQuest();
    cm.dispose()
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
            cm.sendNext_Illus("你似乎还是没有把#b#p9130021##k给救出来啊。")
        } else {
            if (status === a++) {
                cm.sendNextPrevS("是的。非常遗憾，不仅没有救出来，就连她现在身在何处我都不知道。她到底被带到什么地方去了啊……")
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("#b#p9130021##k的血脉是进行次元之门开启仪式所必不可缺的媒介。就算她仍旧落在织田军的手里，暂时应该也是性命无忧的。不过，如果织田军再一次进行了仪式，那她就会彻底失去利用价值。织田军自然没有必要继续留她的性命。趁着现在还没有为时已晚，我们最好尽快找到她的行踪，并将她给救出来。")
                } else {
                    if (status === a++) {
                        cm.sendNextPrevS("唔……我明白了。")
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev_Illus("不过，你也不要太勉强自己。现在的你还没有彻底恢复力量。如果你强行突击，只会断送了自己的性命。到时候，不仅没有人能够救出樱乃姬，更没有人能够与信长抗衡了。这一点，你一定要牢牢记住才是。")
                        } else {
                            if (status === a++) {
                                cm.sendNextPrevS("(姬儿……我一定会立刻将你救出来的。我绝对不会让你一直沦为信长的道具。你一定要等我啊。)")
                            } else {
                                cm.forceCompleteQuest();
                                cm.gainExp(2667);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};