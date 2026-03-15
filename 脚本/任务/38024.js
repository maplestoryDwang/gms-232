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
            cm.sendNormalTalk("感觉村里的氛围和平时不太一样。村里发生什么事了吗？", 2, 3002000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……我也不知道。", 0, 3002000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(虽然不知道是什么，但一定有什么事。情绪消沉的样子，完全不是阿琅的作风。)", 2, 3002000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哦，知道了。", 2, 3002000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……对不起。", 0, 3002000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("什么？", 2, 3002000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("没什么。对不起，真的很对不起……", 0, 3002000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(38024, "");
                                        cm.forceStartQuest(38024, "");
                                        cm.sendNormalTalk("阿琅！到底发生了什么事，哭成那个样子……最好直接去问问她。", 2, 3002000, true, false)
                                    } else {
                                        if (status == a++) {
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

function stage0(d, c, b) {
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
            cm.updateInfoQuest(38024, "NpcSpeech=30020071");
            cm.dispose()
        }
    }
}

function stage0(d, c, b) {
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
            cm.updateInfoQuest(38024, "NpcSpeech=30020071");
            cm.dispose()
        }
    }
}

function stage1(d, c, b) {
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
            cm.updateInfoQuest(38024, "NpcSpeech=30020071/30020092");
            cm.dispose()
        }
    }
}

function stage2(d, c, b) {
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
            cm.updateInfoQuest(38024, "NpcSpeech=30020071/30020092/30020083");
            cm.dispose()
        }
    }
}

function stage3(d, c, b) {
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
            cm.sendNormalTalk("你问村子里怎么这么嘈杂？那当然是蒙叔叔回来啦…………哦，哦！", 0, 3002001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("阿琅不是让我们什么都别说的吗！呃，隐月，我们什么都不知道。真的！对吧？", 4, 3002002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呃，嗯！是的！我们什么都不知道，当然。真的，呜呜。", 0, 3002001, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(38024, "NpcSpeech=30020071/30020092/30020083/30020014");
                        cm.dispose()
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
            cm.gainExp(6000);
            cm.forceCompleteQuest(38024);
            cm.dispose()
        }
    }
};