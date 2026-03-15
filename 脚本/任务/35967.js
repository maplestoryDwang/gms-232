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
            cm.sendNormalTalk("没关系。我有魔法海螺！能找到远处的人！", 4, 1013442, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("魔法海螺？真的？该怎么用呢？", 4, 1013441, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯，嗯……把这个放到耳边……。", 2, 1013410, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……。", 4, 1013441, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("（嘻嘻）你以为我们都是傻子吗？", 4, 1013441, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……。", 2, 1013410, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("先清理掉周围的怪物吧……。", 2, 1013410)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(35967, "");
                                        cm.sendNormalTalk("消灭掉200个#b危险的遗迹攻击兵A#k应该就行了。", 2, 1013410, false, true)
                                    } else {
                                        if (status === a++) {
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

function end(e, d, c) {
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
            var a = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
            cm.sendNormalTalk("看，这个" + a + "很厉害吧？", 4, 1013442, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("嗯……。我们真的要召唤古代怪兽吗……。", 4, 1013441, true, true)
            } else {
                if (status === b++) {
                    cm.forceCompleteQuest(35967);
                    cm.gainExp(1427698);
                    cm.dispose()
                }
            }
        }
    }
};