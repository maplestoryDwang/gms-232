var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("别、别过来……", 36, 2550104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("到底发生什么了？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("救救我们，这里是地狱……", 36, 2550104, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("喂，打起精神来。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("别……别……停下……退后啊！", 36, 2550104, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo_Bottom("(看起来十分惊恐。若想与其对话，看来需要先等其镇定下来才行。#b赶快消灭周围的怪物。)", 56, 0)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b200只#k左右应该差不多了。", 56, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(32677, "");
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("这是天罚，天罚啊……", 36, 2550104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("(背部有一道很深的伤口。这个状态真的能救活吗？)", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("达尔米、杰弗逊、利康……我的朋友们……", 36, 2550104, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("喂，喂！这里到底发生了什么？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("狮子王……邪恶的巫女……", 36, 2550104, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("狮子王？巫女？", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("妈妈……我想……回家……", 36, 2550104, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(32677);
                                        cm.sendNormalTalk_Bottom("断气……了。", 56, 0, true, false);
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
};