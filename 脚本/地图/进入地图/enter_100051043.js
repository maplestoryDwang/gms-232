var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (cm.isQuestFinished(35925) && cm.getQuestStatus(35926) == 0) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.setStandAloneMode(true);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -686, 57);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                cm.inGameDirectionEvent_PushScaleInfo(0, 1, 512000, 0, -193280, 59135);
            } else {
                cm.dispose();
                return;
            }
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.sendNormalTalk_Bottom('#face0#呃……我们离声音的源头好像越来越近了。\r\n嗯,在这边。', 37, 1013350, false, true, 1);
                cm.spawnNpc(1013300);
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                                if (status === a++) {
                                    cm.effect_Text([
                                        '#fn黑体##fs18#奇怪的黑泉',
                                        ''
                                    ], [
                                        100,
                                        1000,
                                        6,
                                        -50,
                                        -50,
                                        1,
                                        4,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0
                                    ]);
                                    cm.inGameDirectionEvent_PushScaleInfo(1024000, 1, 512000, 1024000, -193280, 25855);
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(4500);
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom('#face0#这是……一个巨大的水坑。\r\n而且水是黑色的……声音应该就是从下面传来的。', 37, 1013350, false, true, 1);
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_ForcedFlip(2);
                                                cm.sendNormalTalk_Bottom('#face3#等等,那个柱子上好像刻着什么。', 37, 1013358, true, true, 1);
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(512000, 1, 512000, 512000, -117760, 15615);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom('#face3##g“寻找路的人,穿过死亡沼泽,到这里来。”\r\n“连死亡都能驱散的光,将会为你照亮前行之路……”#k\r\n……上面是这么写的。', 37, 1013358, false, true, 1);
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom('#face0#死亡沼泽……', 37, 1013358, true, true, 1);
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_PushScaleInfo(384000, 1, 384000, 384000, -179200, 15615);
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom('#face0#哇,你能看懂这文字吗？\r\n我怎么看都不知道是什麽意思。呃……太难了……', 37, 1013350, false, true, 1);
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom('#face0##b(扔了块石头进去。石头沉了下去,然后化作一股烟消失了。\r\n要是掉下去,好像会很危险。)#k', 37, 1013358, false, true, 1);
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom('#face6##b(战胜死亡的是光。是要用光来照亮水吗？\r\n会发光……而且在水里也不会熄灭的东西。#k', 37, 1013358, true, true, 1);
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom('#face3#哦……我想到了。突破死亡沼泽的方法。', 37, 1013358, false, true, 1);
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129);
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                cm.updateInfoQuest(35947, '12=1;22=1;16=1;26=1;2=1;6=1');
                                                                                                                                cm.dispose();
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
            }
        }
    }
}