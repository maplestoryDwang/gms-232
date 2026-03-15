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
            cm.sendNext_Illus("哦，这里就是新的阵地吗？看起来非常简洁实用，还挺不错的嘛。夜战的阵地就是要这样才行。不过，能修出这种阵地的……应该是元就吧。")
        } else {
            if (status === a++) {
                cm.sendNextPrev_Illus("我直江兼续已经完成阻止敌人侦查的任务，并返回营地……谦、谦信大人！啊啊，谦信大人！你平安无事啊！终于能够再次见到谦信大人美丽凛然的样子了。嘿嘿……", 9130022)
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("(咦？这小子之前说话是这个口气的吗？我怎么觉得和之前的他不太一样了？)", 9130081)
                } else {
                    if (status === a++) {
                        cm.sendNextPrev_Illus("是兼续啊。虽然我还没搞清楚状况，但确实是辛苦你了。")
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev_Illus("哦哦，谦信也来了吗？我听说你在本能寺攻略战的前一天大喝特喝了一顿。不过看到你能平安无事地站在这里，说明你没有因为宿醉不醒而在战斗中捅出什么篓子来啊。其实我还挺期待你能惹出什么有趣的事情来呢。啊哈哈。", 9130000)
                        } else {
                            if (status === a++) {
                                cm.sendNextPrev_Illus("我们上次见面还是在本能寺攻略战的军事会议之中呢。信玄大人。", 9130022)
                            } else {
                                if (status === a++) {
                                    cm.sendNextPrev_Illus("(这人的态度怎么变得这么快啊！？)", 9130081)
                                } else {
                                    if (status === a++) {
                                        cm.sendNextPrev_Illus("哦哦，是兼续啊。要一直照顾这个醉鬼，真是辛苦你了呢。", 9130000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNextPrev_Illus("明明信玄你才整天醉醺醺的，还好意思说我是醉鬼，感觉真是诡异。兼续，你最好离这个老家伙远一点。当心可别被传染上他的毛病。")
                                        } else {
                                            if (status === a++) {
                                                cm.sendNextPrev_Illus("咳咳……信玄大人，谦信大人。我也知道你们两个凑到一起，就总有说不完的话。但是在此之前，可不可以先把目前的状况说给新来的各位呢？神那，我可以开始说了吗？", 9130008)
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
            cm.sendNext_Illus("那就让我先简单说明一下我们遇到的这场异常变化吧。")
        } else {
            if (status === a++) {
                cm.sendNextPrevS("(元就大人对武田和上杉的士兵简单地讲述了一下本能寺发生的异常情况，以及到目前为止我们确认到的有关“这边”这个世界的情报。)")
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("唔……之前我们并不确定织田军是否也到达了“这边”这个世界。但是通过这一战，这一点也可以完全确定了。既然如此，我们接下来该做的事情就很清楚了。", 9130009)
                } else {
                    if (status === a++) {
                        cm.sendNextPrev_Illus("我们要打倒信长。无论是在日本还是在“这边”，那家伙估计都不会发生什么太大的变化。", 9130000)
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev_Illus("实力。目前，信玄大人和谦信大人已经和我们顺利汇合了，情况可以说是有所好转。但是，和进行本能寺攻略战的时候相比，我们的兵力还远远不够。")
                        } else {
                            if (status === a++) {
                                cm.sendNextPrev_Illus("看来接下来会有不少需要四处奔走的任务啊。啊哈哈，这些问题就交给年轻人去解决吧。加油吧，幸村！", 9130000)
                            } else {
                                if (status === a++) {
                                    cm.sendNextPrev_Illus("兼续，你也不要输给这个武田家的小子！", 9130009)
                                } else {
                                    if (status === a++) {
                                        cm.sendNextPrevS("随着信玄大人和谦信大人的汇合，联合军的士气有了很大的提升。在讨论今后目标的时候，大家也都显得气势高昂。看来，与师父和樱乃姬汇合的日子应该也不远了……")
                                    } else {
                                        cm.forceCompleteQuest();
                                        cm.gainExp(1438);
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
};