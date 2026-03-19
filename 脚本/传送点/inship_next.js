function enter() {
    var a = cm.getMap().getNumMonsters();
    var b = parseInt(cm.getMapId());
    if (a <= 0) {
        if (b == 350022100) {
            cm.warp(b + 100, 1)
        } else {
            if (b == 350022200) {
                cm.warp(b + 100, 1)
            } else {
                if (b == 350022300) {
                    cm.warp(b + 300, 1)
                } else {
                    if (b == 350022600) {
                        cm.warp(b + 100, 1)
                    } else {
                        if (b == 350022700) {
                            cm.openScriptNpc()
                        }
                    }
                }
            }
        }
    } else {
        if (a == 1 && b == 350022200) {
            cm.warp(b + 100, 1)
        } else {
            cm.getTopMsgFont("还有敌人没有击退！", 3, 20, 20, 0)
        }
    }
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
            cm.setInGameDirectionMode(true, true, true);
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 5);
            cm.forceCompleteQuest(33145);
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 5);
            cm.inGameDirectionEvent_AskAnswerTime(3200);
            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.dispose();
                    cm.warp(350022400, 0, false)
                }
            }
        }
    }
};