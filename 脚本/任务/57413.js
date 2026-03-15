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
            cm.sendNext_Illus("神那，神那，等一下……你应该也感受到这股气息了吧？", 9130081)
        } else {
            if (status === a++) {
                cm.sendNextPrevS("虽然气息并不明显，但是感觉非常熟悉……应该就是从不远处传来的吧。")
            } else {
                if (status === a++) {
                    cm.sendNextPrev_Illus("确实，虽然气息中似乎充满了力量，但却显得非常微弱。看来是出什么异常情况了吧？", 9130081)
                } else {
                    if (status === a++) {
                        cm.sendNextPrevS("方向……距离……应该就在有织田军出现的枫叶原。看来我们最好过去看看情况。虽然这么做挺对不住要继续帮忙施放法术的元就大人，但没时间想那么多了。")
                    } else {
                        cm.forceCompleteQuest();
                        cm.gainExp(1852);
                        cm.dispose()
                    }
                }
            }
        }
    }
};