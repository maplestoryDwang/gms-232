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
            cm.sendNext("啊……其他地方的森林都很开阔。我从没去过南边，还挺想去看看的。")
        } else {
            if (status === a++) {
                cm.sendNext("那个嘛……南边没什么阳光，我们一般也不会过去。")
            } else {
                if (status === a++) {
                    cm.sendNext("当然也有妖精喜欢那种地方……但我更喜欢这里。")
                } else {
                    if (status === a++) {
                        cm.sendNext("虽然最近有人说在那边听到了奇怪的声音，但那个地方应该不会有什么问题的。")
                    } else {
                        if (status === a++) {
                            cm.sendNext("应该……不会出什么事……")
                        } else {
                            if (status === a++) {
                                cm.sendNext("请不要在那种地方制造问题。也许……会变得不可收拾……")
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest();
                                    cm.forceCompleteQuest();
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
            cm.gainExp(3700);
            cm.dispose()
        }
    }
};