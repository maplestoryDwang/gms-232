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
            cm.inGameDirectionEvent_AskAnswerTime(0)
        } else {
            if (status === a++) {
                switch (Math.floor(d / 100)) {
                    case 23:
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                        break;
                    default:
                        cm.inGameDirectionEvent_AskAnswerTime(0);
                        break
                }
            } else {
                if (status === a++) {
                    switch (Math.floor(d / 100)) {
                        case 23:
                            cm.inGameDirectionEvent_MoveAction(1);
                            cm.inGameDirectionEvent_AskAnswerTime(0);
                            break;
                        default:
                            cm.inGameDirectionEvent_AskAnswerTime(0);
                            break
                    }
                } else {
                    if (status === a++) {
                        switch (Math.floor(d / 100)) {
                            case 23:
                                cm.inGameDirectionEvent_MoveAction(0);
                                cm.inGameDirectionEvent_AskAnswerTime(0);
                                break;
                            default:
                                cm.inGameDirectionEvent_AskAnswerTime(0);
                                break
                        }
                    } else {
                        if (status === a++) {
                            switch (Math.floor(d / 100)) {
                                case 23:
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    break;
                                default:
                                    cm.inGameDirectionEvent_AskAnswerTime(0);
                                    break
                            }
                        } else {
                            if (status === a++) {
                                switch (Math.floor(d / 100)) {
                                    case 23:
                                        inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 5, -10]);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        break;
                                    default:
                                        cm.inGameDirectionEvent_AskAnswerTime(0);
                                        break
                                }
                            } else {
                                if (status === a++) {
                                    switch (Math.floor(d / 100)) {
                                        case 23:
                                            cm.sendNormalTalk_Bottom("#face1#双弩精灵大人……", 37, 3003250, false, true);
                                            cm.effect_Voice("Voice5.img/CH1/Lucid/3", 128);
                                            break;
                                        default:
                                            cm.inGameDirectionEvent_AskAnswerTime(0);
                                            break
                                    }
                                } else {
                                    if (status === a++) {
                                        switch (Math.floor(d / 100)) {
                                            case 23:
                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1800, 0, -32, 251);
                                                break;
                                            default:
                                                cm.inGameDirectionEvent_AskAnswerTime(0);
                                                break
                                        }
                                    } else {
                                        if (status === a++) {
                                            switch (Math.floor(d / 100)) {
                                                case 23:
                                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                    break;
                                                default:
                                                    cm.inGameDirectionEvent_AskAnswerTime(0);
                                                    break
                                            }
                                        } else {
                                            if (status === a++) {
                                                switch (Math.floor(d / 100)) {
                                                    case 23:
                                                        cm.sendNormalTalk_Bottom("#face1#您来……救我了吗……", 37, 3003250, false, true);
                                                        cm.effect_Voice("Voice5.img/CH1/Lucid/4", 128);
                                                        break;
                                                    default:
                                                        cm.inGameDirectionEvent_AskAnswerTime(0);
                                                        break
                                                }
                                            } else {
                                                if (status === a++) {
                                                    switch (Math.floor(d / 100)) {
                                                        case 23:
                                                            cm.sendNormalTalk_Bottom("……", 56, 0, true, true);
                                                            break;
                                                        default:
                                                            cm.inGameDirectionEvent_AskAnswerTime(0);
                                                            break
                                                    }
                                                } else {
                                                    if (status === a++) {
                                                        switch (Math.floor(d / 100)) {
                                                            case 23:
                                                                cm.sendNormalTalk_Bottom("再等一等，路西德……", 56, 0, true, true);
                                                                break;
                                                            default:
                                                                cm.inGameDirectionEvent_AskAnswerTime(0);
                                                                break
                                                        }
                                                    } else {
                                                        if (status === a++) {
                                                            switch (Math.floor(d / 100)) {
                                                                case 23:
                                                                    cm.sendNormalTalk_Bottom("我很快就回来。\r\n然后，我们一起回家……", 56, 0, true, true);
                                                                    break;
                                                                default:
                                                                    cm.inGameDirectionEvent_AskAnswerTime(0);
                                                                    break
                                                            }
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_复合图片动画(["Map/Effect3.img/morass/spine/bubble/skeleton", "animation", "", "bubble"], [0, 1, 0, 90000, 0, 0, -20, 1]);
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/bubble", 100);
                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(3300)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_取消复合图片动画("bubble", 1, 1000);
                                                                            cm.warp(993132000, 0, true);
                                                                            cm.eventSKill(0);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.setStandAloneMode(false);
                                                                            cm.npc_LeaveField("oid=2752523");
                                                                            cm.npc_LeaveField("oid=2752523");
                                                                            cm.npc_LeaveField("oid=2752524");
                                                                            cm.npc_LeaveField("oid=2752524");
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
            }
        }
    }
};