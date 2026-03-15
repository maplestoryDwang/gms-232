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
            cm.sendNextS("元就大人运用为数不多的人员和物资帮忙准备了训练所。但是，虽说我已经结束了在这里的所有训练，却还是没能完全引出原本的力量……")
        } else {
            if (status === a++) {
                cm.sendNextPrev_Illus("唉，这也是没办法的事情啊。毕竟两个世界根本完全不一样。就算神那你再怎么厉害，也很难继续维持原本的力量了吧。", 9130081)
            } else {
                if (status === a++) {
                    cm.sendNextPrevS("嗯……也是。反正事情已经变成这样，再说什么也没有用了。来整理一下接下来应该完成的事项吧。")
                } else {
                    cm.forceStartQuest();
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
            cm.sendNextS("首先要做的，就是找到师父的行踪。或许师父能够知道这场异常情况的内情呢。还有就是，必须尽快找到樱乃姬……如果她已经落入了织田军手中，就必须尽快将她营救出来才是。毕竟仪式以失败告终，不知道织田军会怎么对待她呢。")
        } else {
            if (status === a++) {
                cm.sendNextPrevS("说到织田军我才想起来，不知道他们是不是也移动到“这边”这个世界来了？现在我们手头掌握的情报实在太少了。必须去调查一下织田军的行踪才行。")
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("如果织田军也真的移动到了“这边”，就必须尽快让原本的力量全部恢复才行。不过，托毛利老爷子的福，总算是进行了一些像样的训练。虽说现在的力量还稍有不足……但只能通过之后的实践去继续恢复实力了。估计暂时会辛苦一段时间呢。", 9130081)
                } else {
                    if (status === a++) {
                        cm.sendNextPrevS("就算再怎么辛苦，也必须完成自己的应尽之事。过去是这样，现在也是一样。")
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest();
                            cm.gainItem(2001501, 100);
                            cm.gainItem(2001503, 100);
                            cm.gainExp(1788);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};