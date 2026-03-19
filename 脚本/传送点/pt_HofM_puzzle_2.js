function enter() {
    if (cm.getNumberFromQuestInfo(33965, "p2") > 0) {
        return
    }
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNewEffects(17, [3000, 1000, 700, 790, -822])
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(4000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊，我好像已经知道这是什么场景了。\r\n#b(点击四散的石板，需要按照图片摆放正确位置。)", 37, 1540803, false, true)
                } else {
                    if (status === a++) {
                        cm.mapleHeroJigsaw(0, 2, 0, [1, 2, 3, 4, 9, 6, 7, 5, 8])
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(33965, "meso=14407;p0=1;p1=1;p2=1;p=0;exp=100");
                            cm.onSetBackEffect("light", 1, 1, 0, 0);
                            cm.sendNormalTalk_Bottom("这所描绘的是我们封印黑魔法师的时候。", 37, 1540804, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#真厉害，壁画里的人居然就在我身旁。", 37, 1540805, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#你说什么呢，我可不长这样。", 37, 1540803, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face5#我的腿也太粗了吧！", 37, 1540801, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face6#……", 37, 1540805, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("不过有一角好像被擦掉了啊？", 37, 1540801, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("毕竟是历经多年的遗迹，也有这个可能。", 37, 1540804, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNewEffects(19, [1000])
                                                    } else {
                                                        if (status === a++) {
                                                            cm.setInGameDirectionMode(false, true, false);
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
    }
};