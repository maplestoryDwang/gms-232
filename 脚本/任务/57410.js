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
            cm.sendNextS("看来我做的还不够。必须找到一个能彻底封锁敌军侦查行动的方法才行。")
        } else {
            if (status === a++) {
                cm.sendNextPrev_Illus("你就这么不甘心输给那个小子吗？", 9130081)
            } else {
                if (status === a++) {
                    cm.sendNextPrevS("我刚才已经说过了。我不过是想把别人交给自己的任务做得尽善尽美而已。根本就无意与兼续比拼什么。")
                } else {
                    if (status === a++) {
                        cm.sendNextPrev_Illus("（看来……我要是再继续说下去，不知道这家伙又要做出什么来了。这里就不要再刺激她什么了。）", 9130081)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDeclineS("虽说敌人都是一些侦察兵，但应该有指挥官负责指挥这些下级士兵吧。只要能够击退这个指挥官，就可以算是彻底完成了这个任务。我必须要去找出敌方的上级士兵才行。他应该就在战场的深处……")
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
            cm.sendNext_Illus("就在那边吗！！")
        } else {
            if (status === a++) {
                cm.sendNextPrevS("！！！！！！！！！！")
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("（啊，虽然表现出一副若无其事的样子，但已经是脸色铁青了啊。）", 9130081)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Illus("嗯？这不是神那吗？")
                    } else {
                        cm.forceCompleteQuest();
                        cm.gainExp(2574);
                        cm.dispose()
                    }
                }
            }
        }
    }
};