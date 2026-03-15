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
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.updateInfoQuest(34409, "NpcSpeech=10522031");
            cm.dispose()
        }
    }
}

function stage1(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.updateInfoQuest(34409, "NpcSpeech=10522031/10522082");
            cm.dispose()
        }
    }
}

function stage2(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("我对大火娱乐新人歌手候选人不感兴趣，嘿嘿，我就先告辞了。要上主唱培训班、演技补习班，我也很忙的。告辞，有空再来哦，拜拜！", 0, 1052208, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("#b（萨皮着急地打算离开，赶紧让她听一听阿赫的新歌小样吧。）", 2, 1052208)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(34409);
                    cm.sendNormalTalk("啊，这充满愉快节奏的旋律是……", 0, 1052208, false, true);
                    cm.effect_Voice("SoundEff.img/kurningTower/melody", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b（回答说正在寻找能够唱这首歌的新人歌手。）", 2, 1052208, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……如果是这段节奏带感的旋律，我觉得出道的同时一定轻松拿下音乐节目的第一名！", 0, 1052208, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b#ho##k，我，好不容易才答应来参加试镜。嘿嘿，我从现在起该怎么办才好呢？", 0, 1052208, true, false)
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

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("我对大火娱乐新人歌手候选人不感兴趣，嘿嘿，我就先告辞了。要上主唱培训班、演技补习班，我也很忙的。告辞，有空再来哦，拜拜！", 0, 1052208, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("#b（萨皮着急地打算离开，赶紧让她听一听阿赫的新歌小样吧。）", 2, 1052208)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(34409);
                    cm.sendNormalTalk("啊，这充满愉快节奏的旋律是……", 0, 1052208, false, true);
                    cm.effect_Voice("SoundEff.img/kurningTower/melody", 100)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b（回答说正在寻找能够唱这首歌的新人歌手。）", 2, 1052208, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……如果是这段节奏带感的旋律，我觉得出道的同时一定轻松拿下音乐节目的第一名！", 0, 1052208, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b#ho##k，我，好不容易才答应来参加试镜。嘿嘿，我从现在起该怎么办才好呢？", 0, 1052208, true, false)
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
};