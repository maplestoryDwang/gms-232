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
            cm.updateInfoQuest(63023, "check=1;speak1=1;speak2=1");
            cm.forceCompleteQuest(63023);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_MoveAction(4);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/2111003/Hit", 100);
                cm.emotion(18, 30000);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
                cm.effect_OnUserEff("Effect/OnUserEff.img/PL_AfterLand/hit")
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayFieldSound("Sound/Game.img/Tombstone", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                            cm.setStandAloneMode(false);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.npc_LeaveField("oid=23069898");
                            cm.dispose();
                            cm.warp(867113100, 0, true)
                        }
                    }
                }
            }
        }
    }
};