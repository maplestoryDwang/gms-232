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
            cm.sendNextS("连路都找不到了！\r\n这些东西又是什么！荆棘树和……鸟？！")
        } else {
            if (status === a++) {
                cm.sendNextS("这都是从哪儿冒出来的？呃呃……怎么突然跑出来把路给挡住了！")
            } else {
                if (status === a++) {
                    cm.askYesNoS("消灭拦住前路的荆棘树和泣者，赶快离开吧！")
                } else {
                    if (status === a++) {
                        cm.forceStartQuest();
                        cm.dispose()
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
            cm.forceCompleteQuest();
            cm.gainExp(8400);
            cm.dispose()
        }
    }
};