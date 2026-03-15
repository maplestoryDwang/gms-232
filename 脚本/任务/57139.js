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
            cm.sendNormalTalk_Bottom("#face0#看来你已经冷静得差不多了啊，那我要开始说了。据之前赶往本能寺进行侦查的探子回来报告说，樱乃姬仍被控制在本能寺内。现在，她被囚禁在东侧法堂之内。而且织田军一直没有放松对她的监视。探子发现的时候，她正被织田军带到外面放风。不过，她看起来并没有受伤，这真是不幸中的万幸。", 37, 9130010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("果不其然，她还被控制在织田军的手里啊……我们必须尽快将姬儿救出来才行。春秋！请派我去救出姬儿吧！", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#不行。现在我们的力量还差得太多。而且，我们还没有完全适应冒险岛的生活，根本无法将原本的实力发挥彻底。还有就是，发生这次的异常情况后，联合军的势力大减。虽说我们和冒险岛的住民们缔结了合作关系，但是我们总不能为了救出樱乃姬一人，就将全体联合军都卷进这次的战斗之中。", 37, 9130010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("可是……！", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#抱歉打断一下。春秋刚才提到说，我们和织田军的实力相差太过悬殊。这一点，我们这些武将也都非常清楚。反过来说，为了救出一个人，而派出我方的全体战斗力，实在不是一个明智的举动。", 37, 9130000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#信玄大人是不是已经想到什么办法了？", 37, 9130010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#啊哈哈，你想知道吗？", 37, 9130000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(57139, "");
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

function stage0(d, c, b) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57139.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#啊哈哈，其实也不是什么了不起的计策。我只是觉得，想在这种情况救出一个人，不如派出少数精锐部队，这样不容易引起敌人的注意，活动起来也更加方便。让我想想……只要有三个人应该就足够了吧？", 37, 9130000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我也同意这个计策。与其从正面突破，不如在不被敌人发现的前提下悄悄潜入本能寺，救出姬儿。这样就不用在意敌我之间的兵力差距了。", 37, 9130006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#哦，没想到信玄也能想出这么个像模像样的计策来啊。不过呢，我还是更适合从正面直接攻入。", 37, 9130009, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#嗯……既然大家的意见一致，就没有什么问题了。好了，来进行潜入本能寺、救出樱乃姬的作战准备吧！", 37, 9130010, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(57139);
                            cm.gainExp(8848);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};