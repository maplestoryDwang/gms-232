function enter() {
    if (cm.getNumberFromQuestInfo(33965, "p0") > 0) {
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
                    cm.sendNormalTalk_Bottom("啊，看看那边！", 37, 1540805, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("是超级巨大的壁画，主人！", 37, 1540807, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("好帅啊，不过这种东西也是没法偷走的啊。", 37, 1540803, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你就只想到偷东西嘛。", 37, 1540804, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("要不要调查一下看看？也许我们能得到有关这个空间来历的提示。\r\n#b(点击四散的石板，需要按照图片摆放正确位置。)#k", 37, 1540801, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.mapleHeroJigsaw(0, 0, 0, [1, 2, 3, 4, 5, 6, 7, 9, 8])
                                    } else {
                                        if (status === a++) {
                                            cm.onSetBackEffect("light", 1, 1, 0, 0);
                                            cm.sendNormalTalk_Bottom("龙神，你知道这幅图是什么意思了吗？", 37, 1540801, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("三个圆所象征的……应该分别是光、生命和时间吧？似乎在表示三个超越者在维持着这个世界的均衡。", 37, 1540805, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("答对了。挺厉害的嘛？", 37, 1540801, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("这算是常识啦，问题就在于是谁画下了这幅壁画。", 37, 1540804, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNewEffects(19, [1000])
                                                        } else {
                                                            if (status === a++) {
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.updateInfoQuest(33965, "meso=9172;p0=1;p=0;exp=65");
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
    }
};