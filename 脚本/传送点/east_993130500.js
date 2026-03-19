function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, c, b) {
    var d = cm.getJob();
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.setStandAloneMode(true);
            cm.fieldEffect_Hero9(0, 500);
            cm.inGameDirectionEvent_AskAnswerTime(700)
        } else {
            if (status === a++) {
                switch (Math.floor(d / 100)) {
                    case 101:
                        cm.sendNormalTalk_Bottom("#face0#你已经知道了吗？", 37, 3003503, false, true);
                        break;
                    default:
                        cm.inGameDirectionEvent_AskAnswerTime(100);
                        break
                }
            } else {
                if (status === a++) {
                    switch (Math.floor(d / 100)) {
                        case 101:
                            cm.sendNormalTalk_Bottom("#face0#蛛牙中的剧毒可以让时间也为之扭曲。", 37, 3003503, false, true);
                            break;
                        default:
                            cm.inGameDirectionEvent_AskAnswerTime(100);
                            break
                    }
                } else {
                    if (status === a++) {
                        switch (Math.floor(d / 100)) {
                            case 101:
                                cm.sendNormalTalk_Bottom("#face2#即便是像我这般耐心的人，这一回也难免有些兴奋。", 37, 3003503, false, true);
                                break;
                            default:
                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                break
                        }
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(300)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_Hero9(100, 0);
                                cm.fieldEffect_PlayBGM("Bgm46/ClockTowerofNightmare", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_复合图片动画(["Map/Effect3.img/BossLucid/butterfly/005", "animation", "", ""], [1, 0, 0, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(5000)
                                    } else {
                                        if (status === a++) {
                                            cm.eventSKill(0);
                                            cm.warp(993131000, 0, true);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.setStandAloneMode(false);
                                            cm.npc_LeaveField("oid=2700210");
                                            cm.npc_LeaveField("oid=2700210");
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
};