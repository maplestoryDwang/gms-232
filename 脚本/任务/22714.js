var status = -1;

function start(e, d, c) {
    if (e === 0) {
        status--
    } else {
        status++
    }
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            cm.forceStartQuest(22714, "");
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("现在都可以了吧？", 37, a, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face9#对了，还有件事忘了解释。", 37, 1531001, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("收集#face9#超自然点数#g(PP)#k，就可以使用绝招技能，这是你能使用的最强大的技能。", 37, 1531001, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#face9#超自然点数要怎么收集啊？\r\n很简单，你平时使用念力的时候会自动累积。", 37, 1531001, true, true)
                    } else {
                        if (status === b++) {
                            cm.getTopMsgFont("超能力者收集超自然点数就可以使用绝招技能. ", 3, 20, 20, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                            cm.effect_OnUserEff("UI/tutorial.img/kinesis/2");
                            cm.effect_Voice("Voice3.img/Kinesis/guide_14", 100)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face9#如果你还没有用过绝招技能，我就帮你装在#g[END]#k键上，\r\n出来之前试着自在地用一次吧。", 37, 1531001, false, true)
                            } else {
                                if (status === b++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/metaldrop", 100);
                                    cm.spawnMobLimit(2700300, 1, 200, -238, 100);
                                    cm.spawnMobLimit(2700300, 1, 250, -238, 100);
                                    cm.spawnMobLimit(2700300, 1, 300, -238, 100);
                                    cm.spawnMobLimit(2700300, 1, 350, -238, 100);
                                    cm.spawnMobLimit(2700300, 1, 400, -238, 100);
                                    cm.spawnMobLimit(2700300, 1, 450, -238, 100);
                                    cm.spawnMobLimit(2700300, 1, 500, -238, 100);
                                    cm.funckeySetByScript(1, 142001002, 79);
                                    cm.cameraSwitch_PushSwitchMoveInfo("pt_VP", 1000);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face9#绝招：元素#g[END]#k技能不仅具有强大的伤害，而且还可以用于打击在高处的敌人。", 37, 1531001, false, true)
                                    } else {
                                        if (status === b++) {
                                            cm.setStandAloneMode(false);
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.eventSKill(0);
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
};