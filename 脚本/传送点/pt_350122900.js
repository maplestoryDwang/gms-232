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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("……门打不开啊。", 37, 1540804, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#等一下，门的旁边用古代语写了什么呢？", 37, 1540801, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#‘带着不属于你的东西是出不去的’？", 37, 1540801, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face5#放下来吧，毛贼。", 37, 1540804, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face5#我就知道你在怀疑我。", 37, 1540803, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#要不是你还会有谁。", 37, 1540804, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3#真让人上火，想打一架吗？", 37, 1540803, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#够了！都已经到了这一步，还要打架吗？", 37, 1540801, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face8#那个……", 37, 1540805, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNewEffects(17, [1000, 1000, 1500, 2800, -50])
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/EvanGod", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face7#可能是刚刚进到我衣服里的。", 37, 1540805, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face5#还有话说吗，木头？", 37, 1540803, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#这个情况，我会怀疑你也很合理。", 37, 1540804, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face6#肯定是啊。", 37, 1540803, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face4#你们别吵了，不过为什么门还是没开啊？", 37, 1540801, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#……我错了。", 37, 1540807, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/MirGold", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face5#……我收回刚刚所说的话，你们想要赶上弗里德和阿弗利埃还早着呢。", 37, 1540801, false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face6#哈哈……", 37, 1540805, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.onSetMapTagedObjectVisible(1, "HofM_DO", 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.onSetMapObjectCreateLayerMore("HofM_door", 2, "open_ani", 0);
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/DoorOpen", 100);
                                                                                                        cm.updateInfoQuest(33965, "door=1;meso=16917;p0=1;p1=1;p2=1;p3=1;p=1;sand=1;exp=102");
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_MoveAction(2);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.dispose();
                                                                                                                    cm.warp(350123000, 0, false);
                                                                                                                    cm.setInGameDirectionMode(false, true, false)
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