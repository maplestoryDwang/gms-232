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
            cm.sendNext_Illus("这里就是新阵地啊？啊哈哈，虽然看起来像是在短时间内建起来的地方，但是却建得挺好的嘛。")
        } else {
            if (status === a++) {
                cm.sendNextPrev_Illus("你们回来了啊！剑斗，看到你能帮忙把信玄大人给顺利带回来，我真不知道该怎么谢你了。", 9130023)
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("信玄。你那豪爽的笑声还是一如既往啊。", 9130009)
                } else {
                    if (status === a++) {
                        cm.sendNextPrev_Illus("哦哦，谦信也来了吗？我听说你在本能寺攻略战的前一天大喝特喝了一顿。不过看到你能平安无事地站在这里，说明你没有因为宿醉不醒而在战斗中捅出什么篓子来啊。其实我还挺期待你能惹出什么有趣的事情来呢。啊哈哈。")
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev_Illus("信玄大人，我们上次见面还是在本能寺攻略战的军事会议之中呢。", 9130022)
                        } else {
                            if (status === a++) {
                                cm.sendNextPrev_Illus("哦哦，是兼续啊。要一直照顾这个醉鬼，真是辛苦你了呢。")
                            } else {
                                if (status === a++) {
                                    cm.sendNextPrev_Illus("明明信玄你才整天醉醺醺的，还好意思说我是醉鬼，感觉真是诡异。兼续，你最好离这个老家伙远一点。当心可别被传染上他的毛病。", 9130009)
                                } else {
                                    if (status === a++) {
                                        cm.sendNextPrev_Illus("咳咳……信玄大人，谦信大人。我也知道你们两个凑到一起，就总有说不完的话。但是在此之前，可不可以先把目前的状况说给新来的各位呢？剑斗，我可以开始说了吗？", 9130008)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest();
                                            cm.dispose()
                                        } else {
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
            cm.sendNextS("元就大人对武田和上杉的士兵简单地讲述了一下本能寺发生的异常情况，以及到目前为止我们确认到的有关“这边”这个世界的情报。")
        } else {
            if (status == 1) {
                cm.sendNextPrev_Illus("唔……之前我们并不确定织田军是否也到达了“这边”这个世界。但是通过这一战，这一点也可以完全确定了。既然如此，我们接下来该做的事情就很清楚了。", 9130000)
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("我们要打倒信长。无论是在日本还是在“这边”，那家伙估计都不会发生什么太大的变化。", 9130009)
                } else {
                    if (status === a++) {
                        cm.sendNextPrev_Illus("为了实现这个目的，我们必须进一步提升联合军的实力。目前，信玄大人和谦信大人已经和我们顺利汇合了，情况可以说是有所好转。但是，和进行本能寺攻略战的时候相比，我们的兵力还远远不够。", 9130006)
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev_Illus("看来接下来会有不少需要四处奔走的任务啊。啊哈哈，这些问题就交给年轻人去解决吧。加油吧，幸村！", 9130000)
                        } else {
                            if (status === a++) {
                                cm.sendNextPrev_Illus("兼续，你也不要输给这个武田家的小子！", 9130009)
                            } else {
                                if (status === a++) {
                                    cm.askYesNoS("随着信玄大人和谦信大人的汇合，联合军的士气有了很大的提升。在讨论今后目标的时候，大家也都显得气势高昂。看来，与樱乃姬汇合的日子应该也不远了……")
                                } else {
                                    cm.forceCompleteQuest();
                                    cm.gainItem(2001502, 100);
                                    cm.gainItem(2001506, 100);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};