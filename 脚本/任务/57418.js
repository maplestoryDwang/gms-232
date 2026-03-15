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
            cm.sendNext_Illus("好了，相信这里大部分人都已经意识到问题的根源就发生在本能寺。虽说你们对异常问题发生之后的情况比较了解，但是针对异常问题本身，我想自己应该能够和你们解释清楚。")
        } else {
            if (status === a++) {
                cm.sendNextPrev_Illus("春秋，难道你知道当时究竟发生了什么事？", 9130009)
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("毕竟我对这方面的问题多少有些了解嘛。该从哪里开始说起呢……对了，我就先和你们讲讲，信长要进行的魔王降临仪式究竟是怎么一回事吧。")
                } else {
                    if (status === a++) {
                        cm.sendNextPrev_Illus("信长想要召唤来的那个第六天魔王，其实是名为第六天魔界这个世界的支配者。他是一个非常厉害、非常残暴的人。就和“这边”这个世界一样，第六天魔界和日本也是完全不同的两个世界。虽然不清楚身在日本的信长是如何了解到其他世界的支配者的，但是，他应该和那个支配者有过接触，接触的方法正如同现在我们来到“这边”的方法一样。")
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev_Illus("了解到这些情况之后，信长开始进行仪式，而仪式的目的就是开启能打通第六天魔界与日本的次元之门。只为了再一次将第六天魔王召唤到日本，并与自己化为一体。")
                        } else {
                            if (status === a++) {
                                cm.sendNextPrev_Illus("知道他的这个打算后，我立刻派出神那和其他弟子，前去阻止信长进行仪式。这一点在场的各位应该都非常清楚。在这些弟子的努力下，仪式并没有依照信长的想法顺利进行。")
                            } else {
                                if (status === a++) {
                                    cm.sendNextPrev_Illus("不过同时，也发生了一件超乎我想象的事情。次元之门的方向出现了扭曲。本来应该由第六天魔界向日本开启的次元之门，竟然将日本到“这边”这个世界连接了起来。如此一来，当时身处本能寺的织田军和我们这些人，就全都被转移到了“这边”这个世界。次元空间对大家自身的“强弱”产生影响，导致我们每个人都出现了不同的时间与地点。")
                                } else {
                                    if (status === a++) {
                                        cm.sendNextPrev_Illus("啊哈哈，没想到还能发生连厉害的大阴阳师土御门春秋都料想不到的事情啊。算了，反正事情已经发生了，再计较什么也无济于事。目前最重要的是，接下来我们究竟应该做些什么……", 9130000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNextPrev_Illus("这还用说吗？无论是身在日本还是“这边”，我们的任务都只有一个，那就是打倒信长。", 9130009)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNextPrev_Illus("为了实现这个目的，我们不仅需要努力恢复自己本来的力量，还要将没有到达据点的自己人重新聚集到一起，以恢复联合军原本的实力。这一点至关重要。", 9130008)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNextPrev_Illus("同时，我们还需要进一步调查“这边”这个世界的情况。如果能得到据有一定地位的人从旁协助，就更是事半功倍了。", 9130000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNextPrev_Illus("嗯，大家已经把下面要做的事情总结得差不多了。好了，接下来的事情就拜托各位一起努力吧。")
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNextPrev_Illus("神那，你过来一下，我有点话要对你说。")
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
                            }
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