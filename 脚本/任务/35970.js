var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("#fs14#我不走不走不走不走不走！！", 4, 1013440, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("唉……好吧。那我帮你们赶走怪物，让你们寻找第三个遗物。这样总行了吧？", 2, 1013413, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("不走……咳咳，咳咳！！", 4, 1013440, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("梅尔奇哥哥！！力气很大的傻瓜说会帮我们！", 4, 1013441, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk("咳咳！太好了……咳咳！！", 4, 1013440, true, true)
                        } else {
                            if (status === b++) {
                                var a = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
                                cm.askYesNo("背叛者" + a + "，你先帮我们赶走怪物，让我们找到最后一个遗物吧。", 4, 1013442)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk("消灭200个#b危险的遗迹防御兵A#k，应该就可以了。", 4, 1013442, false, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk("背叛者……。", 2, 1013413, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk("亏我这么相信你，哼！", 4, 1013442, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.forceStartQuest(35970, "");
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
            cm.sendNormalTalk("找到啦！就是这个！！", 4, 1013440, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("（发现了一块紫色的布，怎么看都不像是重要的遗物。）", 4, 1013430, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(35970);
                    cm.gainExp(1427698);
                    cm.dispose()
                }
            }
        }
    }
};