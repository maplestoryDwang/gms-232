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
            cm.sendNext_Illus("啊，是神那呀。你也要一起参加击退侦察兵的任务吧？这毕竟是来到“这边”之后的首次出征，还请你千万不要太勉强了啊。")
        } else {
            if (status === a++) {
                cm.sendNextPrevS("兼续你也接到了同样的任务啊。你已经击退多少侦察兵了？")
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("哈哈。我也和你一样，遇到这次的异常变化后，完全发挥不出原本的力量了。所以也没有立下什么功绩。这次的侦察兵不过只击退了40多名而已。")
                } else {
                    if (status === a++) {
                        cm.sendNextPrevS("……")
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Illus("啊，那边又出现侦察兵了……我先过去了！")
                        } else {
                            if (status === a++) {
                                cm.sendNextPrev_Illus("……输给他，是不是让你觉得挺不甘心的？", 9130081)
                            } else {
                                if (status === a++) {
                                    cm.sendNextPrevS("这不过是个任务而已。根本没有什么胜负之分，也就谈不上什么甘心不甘心的了。不过……我觉得目前击退的侦察兵数量不够，还算不上是彻底阻止了敌人的查探。有必要再去多击退一点敌兵才行。")
                                } else {
                                    if (status === a++) {
                                        cm.sendNextPrev_Illus("你就不能老实承认了吗……", 9130081)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNextPrevS("（颤抖）")
                                        } else {
                                            if (status === a++) {
                                                cm.sendNext_Illus("哦哦，好可怕好可怕……", 9130081)
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
            cm.sendNext_Illus("神那，你还没有离开战场啊。毛利大人已经发来消息说，可以从战场上撤退了。")
        } else {
            if (status === a++) {
                cm.sendNextPrevS("我只是希望能彻底阻止敌人的侦查。我可不喜欢做事情半吊子。顺便问一下，刚才分开之后，兼续你又击退了多少敌兵呢？")
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("和刚才相比并没有什么太大的变化。只是多击倒了70多名杂兵而已。")
                } else {
                    if (status === a++) {
                        cm.sendNextPrevS("……（啪嗒）")
                    } else {
                        if (status === a++) {
                            cm.sendNextPrev_Illus("（啊，这家伙的血管都被气炸了……）", 9130081)
                        } else {
                            if (status === a++) {
                                cm.askYesNo_Illus("好了，我还要继续去寻找谦信大人，所以还不能离开战场。神那你就不要太勉强自己了，赶紧回去吧。")
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(57409);
                                    cm.sendNormalTalk_Bottom("看来我做的还不够。必须找到一个能彻底封锁敌军侦查行动的方法才行。", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#你就这么不甘心输给那个小子吗？", 37, 9130081, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("我刚才已经说过了。我不过是想把别人交给自己的任务做得尽善尽美而已。根本就无意与兼续比拼什么。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#（看来……我要是再继续说下去，不知道这家伙又要做出什么来了。这里就不要再刺激她什么了。）", 37, 9130081, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("虽说敌人都是一些侦察兵，但应该有指挥官负责指挥这些下级士兵吧。只要能够击退这个指挥官，就可以算是彻底完成了这个任务。我必须要去找出敌方的上级士兵才行。他应该就在战场的深处……", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(57410, "");
                                                        cm.OnStartNavigation(807010100, 1, "9130085", 0);
                                                        cm.gainExp(345);
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
};