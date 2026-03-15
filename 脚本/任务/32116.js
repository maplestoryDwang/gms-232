var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNext("快来，#b#h ##k。我正想找你说事呢。")
    } else {
        if (status == 1) {
            cm.sendNextPrev("我都听说了。孩子们在排练演出？", 1500001)
        } else {
            if (status == 2) {
                cm.sendNextPrev("我们只握到了那些信息。这能成为线索吗？")
            } else {
                if (status == 3) {
                    cm.sendNextPrev("……这一切都是我的失职啊，校长先生。", 1500002)
                } else {
                    if (status == 4) {
                        cm.sendNextPrev("……", 1500002)
                    } else {
                        if (status == 5) {
                            cm.sendNextPrev("那是几天前的事情了，那些孩子非常喜欢人类世界的英雄们，而且还想模仿英雄们进行一场演出。当时我就进行了严厉地批评，并处罚了他们。", 1500002)
                        } else {
                            if (status == 6) {
                                cm.sendNextPrev("你怎么能批评他们呢？每个孩子都有自己喜欢的英雄，这是再正常不过的事情了。")
                            } else {
                                if (status == 7) {
                                    cm.sendNextPrev("我们艾利涅根本不相信人类。所以我们觉得对于仰募人类英雄这样的事情，不利于孩子们的教育。\r\n\r\n不过没想到，孩子们后来仍旧在准备演出……他们肯定是为了不让我发现，所以躲在什么地方偷偷排练。", 1500002)
                                } else {
                                    if (status == 8) {
                                        cm.sendNextPrev("看来，孩子们是为避开老师们，在其他地方进行排练的时候失踪了。比如,森林深处的地方，又或者是……")
                                    } else {
                                        if (status == 9) {
                                            cm.sendNextPrev("这，这都是我的错啊。如果孩子们有什么三长两短……我，我……", 1500002)
                                        } else {
                                            if (status == 10) {
                                                cm.sendNextPrev("请镇静，副校长先生。越是这种时候，就越需要冷静。", 1500001)
                                            } else {
                                                if (status == 11) {
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
}

function end(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            cm.askAcceptDecline("先向你表示抱款。发生了这种事情……所有的一切都是我们的误会。为了能找回孩子，你能继续帮助我们吗？")
        } else {
            if (status == 1) {
                cm.sendNext("如何才能找到那些孩子？我现在在整理思路，请重新和我说话吧。");
                cm.forceCompleteQuest();
                cm.gainExp(1600);
                cm.dispose()
            }
        }
    }
};