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
            cm.sendNextS("呼……呼……\r\n已经过了多久了 ？")
        } else {
            if (status === a++) {
                cm.sendNextS("怎么会一直在一个地方徘徊不前呢……")
            } else {
                if (status === a++) {
                    cm.sendNextS("而且怪物的数量不减反增。")
                } else {
                    if (status === a++) {
                        cm.askYesNoS("不赶快杀出一条路摆脱它们 ，恐怕要永远出不去了。")
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
            cm.warp(910143002, 0);
            cm.dispose()
        }
    }
};