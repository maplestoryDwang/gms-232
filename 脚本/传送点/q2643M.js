function enter() {
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
            if (cm.isQuestActive(2643)) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, true, false);
                cm.inGameDirectionEvent_MoveAction(3);
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                cm.dispose();
                return
            }
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你…看起来很眼熟啊，雪姬还好吗?", 1, 1052001, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("(转达雪姬的故事)", 17, 1052001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是吗…即使不能原谅…还是可以合力对抗吗。不愧是飞花院的首领啊... 雪姬已经不是以前那个柔弱的女孩儿了。", 1, 1052001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("很好，来吧。让你们见识见识废都飞侠的力量吧。", 1, 1052001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.spawnMobLimit(9300528, 1, -964, 142, 100);
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.gainExp(190);
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