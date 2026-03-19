function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
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
    }
    if (cm.getNumberFromQuestInfo(33151, "halo") > 0) {
        cm.dispose();
        cm.openNpc(1540502, "黑色天堂_Act1_矿山");
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askMenu_Bottom("队长，要不要冲上去？\r\n#b#L0#出发。#l\r\n#L1#等待。#l", 37, 1540502)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
                cm.effect_Voice("SoundEff.img/blackHeaven/secretmission3", 100)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_SetHideEffect(1);
                    cm.npc_SetForceMove("oid=12965799", 1, 600, 300);
                    cm.npc_SetForceMove("oid=12965800", 1, 600, 300);
                    cm.npc_SetForceMove("oid=12965801", 1, 600, 300);
                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                } else {
                    if (status === a++) {
                        cm.npc_LeaveField("oid=12965799");
                        cm.npc_LeaveField("oid=12965799");
                        cm.npc_LeaveField("oid=12965800");
                        cm.npc_LeaveField("oid=12965800");
                        cm.npc_LeaveField("oid=12965801");
                        cm.npc_LeaveField("oid=12965801");
                        cm.fieldEffect_InsertCanvas(1, 155, 0, 0, 0, 2000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_ProcessOnOffLayer("00", "Map/Effect2.img/blackHeaven/title1", 0, 1500, 0, 0, 12, 4, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(7000);
                                cm.effect_Voice("SoundEff.img/blackHeaven/signal_s", 100)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 1500, 0, 0, 0, 0, 0);
                                    cm.playerMessage(5, "必须消灭野外的所有怪物, 才能移动到下一地区. ");
                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                    cm.dispose();
                                    cm.openNpc(1540502, "黑色天堂_Act1_矿山");
                                    cm.setInGameDirectionMode(false, false, false)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};