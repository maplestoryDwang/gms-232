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
            cm.sendNormalTalk("总之很可疑……。", 4, 1013441, false, true);
            cm.spawnMobLimit(2300263, 1, 612, -24, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("只要帮你争取时间，让你能去寻找那些垃圾就行了吧？", 2, 1013408, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不是垃圾！那是可以召唤#r怪兽#k的遗物！", 4, 1013441, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯……。（看来孩子们要寻找的遗物好像是召唤古代怪兽的祭品。）", 2, 1013408, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("喂……喂，力气很大的大姐！", 4, 1013441, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("嗯？", 2, 1013408, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("你不是说要帮我吗？愣着干嘛？还不快点去消灭怪物？", 4, 1013442)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("帮我去干掉那些#b危险的石森林虫#k。快。", 4, 1013441, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("（老二的性格好像非常难搞……。）", 2, 1013408, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(35965, "");
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
            cm.sendNormalTalk("找到了！一定就是这个！", 4, 1013441, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("（发现了一个长得很奇怪的雕像。）", 4, 1013431, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("确定是这个吗？周围还有不少垃圾呢。", 2, 1013408, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("就，就是这个！哼，什么都不知道，就别乱说……", 4, 1013441, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(35965);
                            cm.gainExp(1427698);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};