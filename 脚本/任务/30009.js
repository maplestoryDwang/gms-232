var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNextNoESC("回来啦。在你离开的这段时间，来了很多人！", 1064001)
        } else {
            if (status === a++) {
                cm.sendNextSNoESC("都是来帮助我解开封印的人。冒险岛联盟答应把你从这里救出去，现在可以不用担心了。")
            } else {
                if (status === a++) {
                    cm.sendNextSNoESC("但是要想解开你的封印，必须消灭掉门外的封印守护者。你知道些什么吗？")
                } else {
                    if (status === a++) {
                        cm.sendNextNoESC("我没办法离开这里，所以什么都不知道。但是我可以感受到黑暗的力量。", 1064001)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("画着时钟的门外流出来的黑暗力量最弱。你先去消灭画着时钟的门外的封印守护者吧。", 1064001)
                        } else {
                            if (status === a++) {
                                cm.sendNextNoESC("一个人可能会很困难。虽然说是最弱，但我还是感觉浑身直起鸡皮疙瘩。所以你一定要和#r志同道合的同伴#k一起去！", 1064001)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(30009, "");
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceCompleteQuest();
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
};