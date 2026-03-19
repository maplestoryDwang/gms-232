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
            cm.onScriptMessage_莫奈德卷轴风格(9400593, "“勇士！”脸颊红彤彤的哈瓦尔扭扭捏捏地走过来。“我昨天吃了肉肉，又睡了一觉后，感觉浑身充满了力量呢！妈妈叫我来谢谢你。嗯……我唱歌给你听好吗？”\r\n           #i4036367#\r\n#b\r\n#L0#说现在很忙，晚点再听。（全体友好度下降）#l\r\n#L1#让他唱。（全体友好度上升）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(mode, type, selection, i) {
    if (status <= i++) {
        cm.addNumberForQuestInfo(64007, "happy0", -5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", -5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", -5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", -5, 0, 100);
        cm.莫奈德_特效(null, [8, -5, -5, -5, -5]);
        cm.onScriptMessage_莫奈德卷轴风格(9400593, "哈瓦尔皱着小脸回妈妈那儿去了，不一会儿就传出哇哇的哭声。大篷车队伍的气氛更沉重了。\r\n           #i4036367#\r\n#b\r\n#L0#去找哈瓦尔，请他唱歌。（全体友好度上升）#l")
    } else {
        var reactor = "action分支1";
        eval(reactor)(mode, type, selection, i)
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", 10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", 10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", 10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", 10, 0, 100);
        cm.莫奈德_特效(null, [8, 10, 10, 10, 10]);
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.莫奈德_特效("我爱吃肉，肉肉最棒", [1, 0, 5000]);
        cm.inGameDirectionEvent_AskAnswerTime(500);
        cm.effect_PlayMusic("BgmPL2.img/SongOfHawar")
    } else {
        if (status === a++) {
            cm.莫奈德_特效("一口两口三口四口总也吃不腻", [1, 1, 5000]);
            cm.inGameDirectionEvent_AskAnswerTime(5000)
        } else {
            if (status === a++) {
                cm.莫奈德_特效("拍拍吃得滚圆的肚子", [1, 0, 5000]);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.莫奈德_特效("心情真美好，有肉吃最幸福啦", [1, 1, 5000]);
                    cm.inGameDirectionEvent_AskAnswerTime(5000)
                } else {
                    if (status === a++) {
                        cm.莫奈德_特效("我家哈瓦尔很开心呢", [1, 0, 5000]);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.莫奈德_特效("看见他不哭我就安心了", [1, 1, 5000]);
                            cm.inGameDirectionEvent_AskAnswerTime(5000)
                        } else {
                            if (status === a++) {
                                cm.setInGameDirectionMode(false, true, false);
                                cm.setNumberForQuestInfo(64006, "Ec", 3);
                                cm.useItem(2210208, false);
                                cm.openUI(1888);
                                cm.openUI(1890);
                                cm.monadForceMove("0", 0, 3000);
                                cm.onSetBackEffect("0", 1, 0, 0, 0);
                                cm.monadForceMove("1", 1, 3000);
                                cm.onSetBackEffect("1", 1, 1, 0, 0);
                                cm.monadForceMove("2", 0, 3000);
                                cm.onSetBackEffect("2", 1, 0, 0, 0);
                                cm.monadForceMove("3", 0, 3000);
                                cm.onSetBackEffect("3", 1, 0, 0, 0);
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
};