function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getNumberFromQuestInfo(64006, "Ec");
    if (a == b) {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    cm.setNumberForQuestInfo(64005, "duringEvent", 1);
    action(1, 0, 0)
}

function action(mode, type, selection) {
    status++;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status === i++) {
            cm.莫奈德_特效(null, [0, 3]);
            cm.monadForceMove("0", 0, 3000);
            cm.onSetBackEffect("0", 1, 0, 0, 0);
            cm.monadForceMove("1", 1, 3000);
            cm.onSetBackEffect("1", 1, 1, 0, 0);
            cm.monadForceMove("2", 0, 3000);
            cm.onSetBackEffect("2", 1, 0, 0, 0);
            cm.monadForceMove("3", 0, 3000);
            cm.onSetBackEffect("3", 1, 0, 0, 0);
            cm.useItem(2210208, false);
            cm.莫奈德_特效(null, [7, 5]);
            cm.onScriptMessage_莫奈德卷轴风格(9400593, "光听这趔趔趄趄的脚步声，就猜到是谁了。“勇士！我给你唱歌好吗？”\r\n           #i4036367#\r\n#b\r\n#L0#让他唱。（全体友好度上升）#l\r\n#L1#让他回头再唱。( - )#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.莫奈德_特效("下雪啦，下雪啦", [1, 0, 3000]);
        cm.inGameDirectionEvent_AskAnswerTime(500);
        cm.effect_PlayMusic("BgmPL2.img/SongOfHawar")
    } else {
        if (status === a++) {
            cm.莫奈德_特效("夜里下雪啦", [1, 1, 3000]);
            cm.inGameDirectionEvent_AskAnswerTime(3000)
        } else {
            if (status === a++) {
                cm.莫奈德_特效("淅淅沥沥的小雪", [1, 0, 3000]);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.莫奈德_特效("松松松软软的大雪", [1, 1, 3000]);
                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                } else {
                    if (status === a++) {
                        cm.莫奈德_特效("狂风呼啸的暴风雪", [1, 0, 3000]);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.莫奈德_特效("都在树枝上开了花", [1, 1, 3000]);
                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                        } else {
                            if (status === a++) {
                                cm.莫奈德_特效("阿布鲁变成了雪的天堂", [1, 0, 3000]);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.莫奈德_特效("阿布鲁变成了雪的天堂", [1, 1, 3000]);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                } else {
                                    if (status === a++) {
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.setNumberForQuestInfo(64006, "Ec", 19);
                                        cm.curNodeEventEnd(true);
                                        cm.openUI(1888);
                                        cm.openUI(1890);
                                        cm.莫奈德_特效(null, [6, 0, 0, 0, 0, 1]);
                                        cm.useItem(2210208, false);
                                        cm.addNumberForQuestInfo(64007, "happy0", 5, 0, 100);
                                        cm.addNumberForQuestInfo(64007, "happy1", 5, 0, 100);
                                        cm.addNumberForQuestInfo(64007, "happy2", 5, 0, 100);
                                        cm.addNumberForQuestInfo(64007, "happy3", 5, 0, 100);
                                        cm.莫奈德_特效(null, [8, 5, 5, 5, 5]);
                                        cm.莫奈德_特效(null, [0, 2]);
                                        cm.dispose();
                                        cm.setNumberForQuestInfo(64005, "duringEvent", 0)
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

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.setInGameDirectionMode(false, true, false);
        cm.setNumberForQuestInfo(64006, "Ec", 19);
        cm.curNodeEventEnd(true);
        cm.openUI(1888);
        cm.openUI(1890);
        cm.莫奈德_特效(null, [6, 0, 0, 0, 0, 1]);
        cm.useItem(2210208, false);
        cm.莫奈德_特效(null, [0, 2]);
        cm.dispose();
        cm.setNumberForQuestInfo(64005, "duringEvent", 0)
    }
};