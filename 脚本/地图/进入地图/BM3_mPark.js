var status = -1;
function start() {
    action(1, 0, 0);
}
function action(c, b, a) {
    status++;
    if (cm.getMapId() == 993070100 || cm.getMapId() == 993070200 || cm.getMapId() == 993070300) {
        action1(c, b, a);
    } else {
        if (cm.getMapId() == 993070700) {
            action2(c, b, a);
        } else {
            if (cm.getMapId() == 993071000) {
                action3(c, b, a);
            } else {
                if (cm.getMapId() == 993071300 || cm.getMapId() == 993071400 || cm.getMapId() == 993071500) {
                    action4(c, b, a);
                } else {
                    if (cm.getMapId() == 993072000 || cm.getMapId() == 993072100 || cm.getMapId() == 993072200) {
                        action5(c, b, a);
                    } else {
                        if (cm.getMapId() == 993072300 || cm.getMapId() == 993072400 || cm.getMapId() == 993072500) {
                            action6(c, b, a);
                        } else {
                            cm.dispose();
                        }
                    }
                }
            }
        }
    }
}
function action1(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.艾尔达瀑布_初始化();
            if (cm.getMapId() == 993070100) {
                cm.fieldEffect_ScreenMsg('monsterPark/stageEff/stage');
                cm.fieldEffect_ScreenMsg('monsterPark/stageEff/number/1');
            } else {
                if (cm.getMapId() == 993070200) {
                    cm.fieldEffect_ScreenMsg('monsterPark/stageEff/stage');
                    cm.fieldEffect_ScreenMsg('monsterPark/stageEff/number/2');
                } else {
                    if (cm.getMapId() == 993070300) {
                        cm.fieldEffect_ScreenMsg('monsterPark/stageEff/final');
                    }
                }
            }
            cm.dispose();
        }
    }
}
function action2(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.updateInfoQuest(35834, '');
            cm.updateInfoQuest(35835, '');
            cm.updateInfoQuest(35836, '');
            cm.updateInfoQuest(35837, '');
            cm.updateInfoQuest(35817, '');
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.npc_ChangeController(3003902, 'oid=2178566', 400, 1122, 1116, 350, 450, 1, true, 0, false);
            cm.npc_SetSpecialAction('oid=2178566', 'summon', 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 267, 1170);
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face1#我警告过你了。', 37, 3003902, false, true);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                                if (status === a++) {
                                    cm.npc_SetSpecialAction('oid=2178566', 'special6', -1, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_LimanB(30);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                                if (status === a++) {
                                                    cm.upStart();
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    up1();
                                                } else {
                                                    if (status === a++) {
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.getTopMsgFont('消灭怪物，达到一定高度时，可以移动到下一关。', 3, 20, 4, 0, 0);
                                                        cm.useSkill(22110019,1);
                                                        cm.addPopupSay(0, 2500, '#face0#碰到黑暗魔球就危险了……', '', 0);
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
function action3(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.updateInfoQuest(35834, '');
            cm.updateInfoQuest(35835, '');
            cm.updateInfoQuest(35836, '');
            cm.updateInfoQuest(35837, '');
            cm.updateInfoQuest(35817, '');
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.npc_ChangeController(3003902, 'oid=2179198', 400, 1122, 1116, 350, 450, 1, true, 0, false);
            cm.npc_SetSpecialAction('oid=2179198', 'summon', 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 267, 1170);
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face1#……', 37, 3003902, false, true);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('#face1#想埋怨的话，就埋怨吧。没关系。', 37, 3003902, true, true);
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                    if (status === a++) {
                                        cm.npc_SetSpecialAction('oid=2179198', 'special6', -1, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                    if (status === a++) {
                                                        cm.upStart();
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        up2();
                                                    } else {
                                                        if (status === a++) {
                                                            cm.setInGameDirectionMode(false, true, false);
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
function action4(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (cm.getMapId() == 993071300) {
                cm.fieldEffect_ScreenMsg('monsterPark/stageEff/stage');
                cm.fieldEffect_ScreenMsg('monsterPark/stageEff/number/1');
                cm.getMap(993071300).setSpawn(true);
            } else {
                if (cm.getMapId() == 993071400) {
                    cm.fieldEffect_ScreenMsg('monsterPark/stageEff/stage');
                    cm.fieldEffect_ScreenMsg('monsterPark/stageEff/number/2');
                    cm.getMap(993071400).setSpawn(true);
                } else {
                    if (cm.getMapId() == 993071500) {
                        cm.fieldEffect_ScreenMsg('monsterPark/stageEff/final');
                        cm.getMap(993071500).setSpawn(true);
                    }
                }
            }
            cm.dispose();
        }
    }
}
function action5(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (cm.getMapId() == 993072000) {
                cm.updateInfoQuest(35834, '');
                cm.updateInfoQuest(35835, '');
                cm.updateInfoQuest(35836, '');
                cm.updateInfoQuest(35837, '');
                cm.updateInfoQuest(35817, '');
                cm.fieldEffect_ScreenMsg('monsterPark/stageEff/stage');
                cm.fieldEffect_ScreenMsg('monsterPark/stageEff/number/1');
                cm.onSetMapObjectMove('attack', [
                    1,
                    0,
                    0
                ]);
                cm.onSetMapObjectMove('attackAll', [
                    1,
                    0,
                    0
                ]);
                cm.userSetFieldFloating(993072000, 3, 3, 3);
                cm.monadForceMove('giantHit1', 0, 0);
                cm.monadForceMove('giantHit2', 0, 0);
                cm.monadForceMove('giantHit3', 0, 0);
                cm.monadForceMove('giantHit4', 0, 0);
                cm.monadForceMove('giantHit5', 0, 0);
                cm.monadForceMove('giantHit6', 0, 0);
                cm.monadForceMove('giantHit7', 0, 0);
                cm.monadForceMove('giantHit8', 0, 0);
                cm.monadForceMove('giantHit9', 0, 0);
                cm.monadForceMove('giantHit10', 0, 0);
                cm.forceStartQuest(35817, '');
                cm.updateInfoQuest(35834, '');
                cm.updateInfoQuest(35835, '');
                cm.updateInfoQuest(35836, '');
                cm.updateInfoQuest(35837, '');
                cm.updateInfoQuest(35817, 'Xp1=-1680;Yp1=-30;Xp2=-1300;Yp2=-350;Xp3=-555;Yp3=-527;Xp4=577;Yp4=-300;Xp5=1727;Yp5=-410');
                cm.npc_ChangeController(3003976, 'oid=2182349', -1680, -30, 4, -1730, -1630, 0, false, 0, false);
                cm.npc_SetSpecialAction('oid=2182349', 'summon', 0, 0);
                cm.npc_ChangeController(3003977, 'oid=2182350', -1300, -350, 14, -1350, -1250, 0, false, 0, false);
                cm.npc_SetSpecialAction('oid=2182350', 'summon', 0, 0);
                cm.npc_ChangeController(3003978, 'oid=2182351', -555, -527, 43, -605, -505, 0, false, 0, false);
                cm.npc_SetSpecialAction('oid=2182351', 'summon', 0, 0);
                cm.npc_ChangeController(3003979, 'oid=2182352', 577, -300, 19, 527, 627, 0, false, 0, false);
                cm.npc_SetSpecialAction('oid=2182352', 'summon', 0, 0);
                cm.npc_ChangeController(3003980, 'oid=2182353', 1727, -410, 40, 1677, 1777, 0, false, 0, false);
                cm.npc_SetSpecialAction('oid=2182353', 'summon', 0, 0);
                cm.onSetMapObjectMove('attack', [
                    1,
                    255,
                    0
                ]);
                cm.onSetMapObjectMove('attack', 'idle', [
                    2,
                    0
                ]);
                cm.onSetMapObjectMove('attack', [
                    1,
                    0,
                    4300
                ]);
            } else {
                if (cm.getMapId() == 993072100) {
                    cm.updateInfoQuest(35834, '');
                    cm.updateInfoQuest(35835, '');
                    cm.updateInfoQuest(35836, '');
                    cm.updateInfoQuest(35837, '');
                    cm.forceForfeitQuest(35817);
                    cm.updateInfoQuest(35817, '');
                    cm.fieldEffect_ScreenMsg('monsterPark/stageEff/stage');
                    cm.fieldEffect_ScreenMsg('monsterPark/stageEff/number/2');
                    cm.onSetMapObjectMove('attack', [
                        1,
                        0,
                        0
                    ]);
                    cm.onSetMapObjectMove('attackAll', [
                        1,
                        0,
                        0
                    ]);
                    cm.userSetFieldFloating(993072100, 3, 3, 3);
                    cm.monadForceMove('giantHit1', 0, 0);
                    cm.monadForceMove('giantHit2', 0, 0);
                    cm.monadForceMove('giantHit3', 0, 0);
                    cm.monadForceMove('giantHit4', 0, 0);
                    cm.monadForceMove('giantHit5', 0, 0);
                    cm.monadForceMove('giantHit6', 0, 0);
                    cm.monadForceMove('giantHit7', 0, 0);
                    cm.monadForceMove('giantHit8', 0, 0);
                    cm.monadForceMove('giantHit9', 0, 0);
                    cm.monadForceMove('giantHit10', 0, 0);
                    cm.forceStartQuest(35817, '');
                    cm.updateInfoQuest(35834, '');
                    cm.updateInfoQuest(35835, '');
                    cm.updateInfoQuest(35836, '');
                    cm.updateInfoQuest(35837, '');
                    cm.updateInfoQuest(35817, 'Xp1=-1680;Yp1=-30;Xp2=-1300;Yp2=-350;Xp3=-555;Yp3=-527;Xp4=577;Yp4=-300;Xp5=1727;Yp5=-410');
                    cm.npc_ChangeController(3003976, 'oid=2182464', -1680, -30, 4, -1730, -1630, 0, false, 0, false);
                    cm.npc_SetSpecialAction('oid=2182464', 'summon', 0, 0);
                    cm.npc_ChangeController(3003977, 'oid=2182465', -1300, -350, 14, -1350, -1250, 0, false, 0, false);
                    cm.npc_SetSpecialAction('oid=2182465', 'summon', 0, 0);
                    cm.npc_ChangeController(3003978, 'oid=2182466', -555, -527, 43, -605, -505, 0, false, 0, false);
                    cm.npc_SetSpecialAction('oid=2182466', 'summon', 0, 0);
                    cm.npc_ChangeController(3003979, 'oid=2182467', 577, -300, 19, 527, 627, 0, false, 0, false);
                    cm.npc_SetSpecialAction('oid=2182467', 'summon', 0, 0);
                    cm.npc_ChangeController(3003980, 'oid=2182468', 1727, -410, 40, 1677, 1777, 0, false, 0, false);
                    cm.npc_SetSpecialAction('oid=2182468', 'summon', 0, 0);
                    cm.onSetMapObjectMove('attack', [
                        1,
                        255,
                        0
                    ]);
                    cm.onSetMapObjectMove('attack', 'idle', [
                        2,
                        0
                    ]);
                    cm.onSetMapObjectMove('attack', [
                        1,
                        0,
                        4300
                    ]);
                } else {
                    if (cm.getMapId() == 993072200) {
                        cm.updateInfoQuest(35834, '');
                        cm.updateInfoQuest(35835, '');
                        cm.updateInfoQuest(35836, '');
                        cm.updateInfoQuest(35837, '');
                        cm.forceForfeitQuest(35817);
                        cm.updateInfoQuest(35817, '');
                        cm.fieldEffect_ScreenMsg('monsterPark/stageEff/final');
                        cm.onSetMapObjectMove('attack', [
                            1,
                            0,
                            0
                        ]);
                        cm.onSetMapObjectMove('attackAll', [
                            1,
                            0,
                            0
                        ]);
                        cm.userSetFieldFloating(993072200, 3, 3, 3);
                        cm.monadForceMove('giantHit1', 0, 0);
                        cm.monadForceMove('giantHit2', 0, 0);
                        cm.monadForceMove('giantHit3', 0, 0);
                        cm.monadForceMove('giantHit4', 0, 0);
                        cm.monadForceMove('giantHit5', 0, 0);
                        cm.monadForceMove('giantHit6', 0, 0);
                        cm.monadForceMove('giantHit7', 0, 0);
                        cm.monadForceMove('giantHit8', 0, 0);
                        cm.monadForceMove('giantHit9', 0, 0);
                        cm.monadForceMove('giantHit10', 0, 0);
                        cm.forceStartQuest(35817, '');
                        cm.updateInfoQuest(35834, '');
                        cm.updateInfoQuest(35835, '');
                        cm.updateInfoQuest(35836, '');
                        cm.updateInfoQuest(35837, '');
                        cm.updateInfoQuest(35817, 'Xp1=-1680;Yp1=-30;Xp2=-1300;Yp2=-350;Xp3=-555;Yp3=-527;Xp4=577;Yp4=-300;Xp5=1727;Yp5=-410');
                        cm.npc_ChangeController(3003976, 'oid=2182626', -1680, -30, 4, -1730, -1630, 0, false, 0, false);
                        cm.npc_SetSpecialAction('oid=2182626', 'summon', 0, 0);
                        cm.npc_ChangeController(3003977, 'oid=2182627', -1300, -350, 14, -1350, -1250, 0, false, 0, false);
                        cm.npc_SetSpecialAction('oid=2182627', 'summon', 0, 0);
                        cm.npc_ChangeController(3003978, 'oid=2182628', -555, -527, 43, -605, -505, 0, false, 0, false);
                        cm.npc_SetSpecialAction('oid=2182628', 'summon', 0, 0);
                        cm.npc_ChangeController(3003979, 'oid=2182629', 577, -300, 19, 527, 627, 0, false, 0, false);
                        cm.npc_SetSpecialAction('oid=2182629', 'summon', 0, 0);
                        cm.npc_ChangeController(3003980, 'oid=2182630', 1727, -410, 40, 1677, 1777, 0, false, 0, false);
                        cm.npc_SetSpecialAction('oid=2182630', 'summon', 0, 0);
                        cm.onSetMapObjectMove('attack', [
                            1,
                            255,
                            0
                        ]);
                        cm.onSetMapObjectMove('attack', 'idle', [
                            2,
                            0
                        ]);
                        cm.onSetMapObjectMove('attack', [
                            1,
                            0,
                            4300
                        ]);
                        cm.dispose();
                    }
                }
            }
            cm.dispose();
        }
    }
}
function action6(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (cm.getMapId() == 993072300) {
                cm.updateInfoQuest(35834, '');
                cm.updateInfoQuest(35835, '');
                cm.updateInfoQuest(35836, '');
                cm.updateInfoQuest(35837, '');
                cm.forceForfeitQuest(35817);
                cm.updateInfoQuest(35817, '');
                cm.fieldEffect_ScreenMsg('monsterPark/stageEff/stage');
                cm.fieldEffect_ScreenMsg('monsterPark/stageEff/number/1');
                cm.onSetMapObjectMove('attack', [
                    1,
                    0,
                    0
                ]);
                cm.onSetMapObjectMove('attackAll', [
                    1,
                    0,
                    0
                ]);
                cm.userSetFieldFloating(993072300, 3, 3, 3);
                cm.monadForceMove('giantHit1', 0, 0);
                cm.monadForceMove('giantHit2', 0, 0);
                cm.monadForceMove('giantHit3', 0, 0);
                cm.monadForceMove('giantHit4', 0, 0);
                cm.monadForceMove('giantHit5', 0, 0);
                cm.monadForceMove('giantHit6', 0, 0);
                cm.monadForceMove('giantHit7', 0, 0);
                cm.monadForceMove('giantHit8', 0, 0);
                cm.monadForceMove('giantHit9', 0, 0);
                cm.monadForceMove('giantHit10', 0, 0);
                cm.forceStartQuest(35817, '');
                cm.updateInfoQuest(35834, '');
                cm.updateInfoQuest(35835, '');
                cm.updateInfoQuest(35836, '');
                cm.updateInfoQuest(35837, '');
                cm.npc_ChangeController(3003922, 'oid=2183147', -1410, -30, 13, -1460, -1360, 1, false, 0, false);
                cm.npc_SetSpecialAction('oid=2183147', 'summon', 0, 0);
                cm.npc_ChangeController(3003922, 'oid=2183148', -1614, -640, 35, -1664, -1564, 1, false, 0, false);
                cm.npc_SetSpecialAction('oid=2183148', 'summon', 0, 0);
                cm.npc_ChangeController(3003922, 'oid=2183149', -911, -320, 10, -961, -861, 1, false, 0, false);
                cm.npc_SetSpecialAction('oid=2183149', 'summon', 0, 0);
                cm.npc_ChangeController(3003922, 'oid=2183150', 1128, -30, 8, 1078, 1178, 0, false, 0, false);
                cm.npc_SetSpecialAction('oid=2183150', 'summon', 0, 0);
                cm.npc_ChangeController(3003922, 'oid=2183151', 1680, -470, 40, 1630, 1730, 0, false, 0, false);
                cm.npc_SetSpecialAction('oid=2183151', 'summon', 0, 0);
                cm.npc_ChangeController(3003976, 'oid=2183152', -1360, -30, 13, -1410, -1310, 0, false, 0, false);
                cm.npc_SetSpecialAction('oid=2183152', 'summon', 0, 0);
                cm.npc_ChangeController(3003977, 'oid=2183153', -1564, -640, 35, -1614, -1514, 0, false, 0, false);
                cm.npc_SetSpecialAction('oid=2183153', 'summon', 0, 0);
                cm.npc_ChangeController(3003978, 'oid=2183154', -861, -320, 10, -911, -811, 0, false, 0, false);
                cm.npc_SetSpecialAction('oid=2183154', 'summon', 0, 0);
                cm.npc_ChangeController(3003979, 'oid=2183155', 1178, -30, 8, 1128, 1228, 0, false, 0, false);
                cm.npc_SetSpecialAction('oid=2183155', 'summon', 0, 0);
                cm.npc_ChangeController(3003980, 'oid=2183156', 1730, -470, 40, 1680, 1780, 0, false, 0, false);
                cm.npc_SetSpecialAction('oid=2183156', 'summon', 0, 0);
                cm.onSetMapObjectMove('attack', [
                    1,
                    255,
                    0
                ]);
                cm.onSetMapObjectMove('attack', 'idle', [
                    2,
                    0
                ]);
                cm.onSetMapObjectMove('attack', [
                    1,
                    0,
                    4300
                ]);
            } else {
                if (cm.getMapId() == 993072400) {
                    cm.updateInfoQuest(35834, '');
                    cm.updateInfoQuest(35835, '');
                    cm.updateInfoQuest(35836, '');
                    cm.updateInfoQuest(35837, '');
                    cm.forceForfeitQuest(35817);
                    cm.updateInfoQuest(35817, '');
                    cm.fieldEffect_ScreenMsg('monsterPark/stageEff/stage');
                    cm.fieldEffect_ScreenMsg('monsterPark/stageEff/number/2');
                    cm.onSetMapObjectMove('attack', [
                        1,
                        0,
                        0
                    ]);
                    cm.onSetMapObjectMove('attackAll', [
                        1,
                        0,
                        0
                    ]);
                    cm.userSetFieldFloating(993072400, 3, 3, 3);
                    cm.monadForceMove('giantHit1', 0, 0);
                    cm.monadForceMove('giantHit2', 0, 0);
                    cm.monadForceMove('giantHit3', 0, 0);
                    cm.monadForceMove('giantHit4', 0, 0);
                    cm.monadForceMove('giantHit5', 0, 0);
                    cm.monadForceMove('giantHit6', 0, 0);
                    cm.monadForceMove('giantHit7', 0, 0);
                    cm.monadForceMove('giantHit8', 0, 0);
                    cm.monadForceMove('giantHit9', 0, 0);
                    cm.monadForceMove('giantHit10', 0, 0);
                    cm.forceStartQuest(35817, '');
                    cm.updateInfoQuest(35834, '');
                    cm.updateInfoQuest(35835, '');
                    cm.updateInfoQuest(35836, '');
                    cm.updateInfoQuest(35837, '');
                    cm.npc_ChangeController(3003922, 'oid=2183353', -1410, -30, 13, -1460, -1360, 1, false, 0, false);
                    cm.npc_SetSpecialAction('oid=2183353', 'summon', 0, 0);
                    cm.npc_ChangeController(3003922, 'oid=2183354', -1614, -640, 35, -1664, -1564, 1, false, 0, false);
                    cm.npc_SetSpecialAction('oid=2183354', 'summon', 0, 0);
                    cm.npc_ChangeController(3003922, 'oid=2183355', -911, -320, 10, -961, -861, 1, false, 0, false);
                    cm.npc_SetSpecialAction('oid=2183355', 'summon', 0, 0);
                    cm.npc_ChangeController(3003922, 'oid=2183356', 1128, -30, 8, 1078, 1178, 0, false, 0, false);
                    cm.npc_SetSpecialAction('oid=2183356', 'summon', 0, 0);
                    cm.npc_ChangeController(3003922, 'oid=2183357', 1680, -470, 40, 1630, 1730, 0, false, 0, false);
                    cm.npc_SetSpecialAction('oid=2183357', 'summon', 0, 0);
                    cm.npc_ChangeController(3003976, 'oid=2183358', -1360, -30, 13, -1410, -1310, 0, false, 0, false);
                    cm.npc_SetSpecialAction('oid=2183358', 'summon', 0, 0);
                    cm.npc_ChangeController(3003977, 'oid=2183359', -1564, -640, 35, -1614, -1514, 0, false, 0, false);
                    cm.npc_SetSpecialAction('oid=2183359', 'summon', 0, 0);
                    cm.npc_ChangeController(3003978, 'oid=2183360', -861, -320, 10, -911, -811, 0, false, 0, false);
                    cm.npc_SetSpecialAction('oid=2183360', 'summon', 0, 0);
                    cm.npc_ChangeController(3003979, 'oid=2183361', 1178, -30, 8, 1128, 1228, 0, false, 0, false);
                    cm.npc_SetSpecialAction('oid=2183361', 'summon', 0, 0);
                    cm.npc_ChangeController(3003980, 'oid=2183362', 1730, -470, 40, 1680, 1780, 0, false, 0, false);
                    cm.npc_SetSpecialAction('oid=2183362', 'summon', 0, 0);
                    cm.onSetMapObjectMove('attack', [
                        1,
                        255,
                        0
                    ]);
                    cm.onSetMapObjectMove('attack', 'idle', [
                        2,
                        0
                    ]);
                    cm.onSetMapObjectMove('attack', [
                        1,
                        0,
                        4300
                    ]);
                } else {
                    if (cm.getMapId() == 993072500) {
                        cm.updateInfoQuest(35834, '');
                        cm.updateInfoQuest(35835, '');
                        cm.updateInfoQuest(35836, '');
                        cm.updateInfoQuest(35837, '');
                        cm.forceForfeitQuest(35817);
                        cm.updateInfoQuest(35817, '');
                        cm.fieldEffect_ScreenMsg('monsterPark/stageEff/final');
                        cm.onSetMapObjectMove('attack', [
                            1,
                            0,
                            0
                        ]);
                        cm.onSetMapObjectMove('attackAll', [
                            1,
                            0,
                            0
                        ]);
                        cm.userSetFieldFloating(993072500, 3, 3, 3);
                        cm.monadForceMove('giantHit1', 0, 0);
                        cm.monadForceMove('giantHit2', 0, 0);
                        cm.monadForceMove('giantHit3', 0, 0);
                        cm.monadForceMove('giantHit4', 0, 0);
                        cm.monadForceMove('giantHit5', 0, 0);
                        cm.monadForceMove('giantHit6', 0, 0);
                        cm.monadForceMove('giantHit7', 0, 0);
                        cm.monadForceMove('giantHit8', 0, 0);
                        cm.monadForceMove('giantHit9', 0, 0);
                        cm.monadForceMove('giantHit10', 0, 0);
                        cm.forceStartQuest(35817, '');
                        cm.updateInfoQuest(35834, '');
                        cm.updateInfoQuest(35835, '');
                        cm.updateInfoQuest(35836, '');
                        cm.updateInfoQuest(35837, '');
                        cm.npc_ChangeController(3003922, 'oid=2183677', -1410, -30, 13, -1460, -1360, 1, false, 0, false);
                        cm.npc_SetSpecialAction('oid=2183677', 'summon', 0, 0);
                        cm.npc_ChangeController(3003922, 'oid=2183678', -1614, -640, 35, -1664, -1564, 1, false, 0, false);
                        cm.npc_SetSpecialAction('oid=2183678', 'summon', 0, 0);
                        cm.npc_ChangeController(3003922, 'oid=2183679', -911, -320, 10, -961, -861, 1, false, 0, false);
                        cm.npc_SetSpecialAction('oid=2183679', 'summon', 0, 0);
                        cm.npc_ChangeController(3003922, 'oid=2183680', 1128, -30, 8, 1078, 1178, 0, false, 0, false);
                        cm.npc_SetSpecialAction('oid=2183680', 'summon', 0, 0);
                        cm.npc_ChangeController(3003922, 'oid=2183681', 1680, -470, 40, 1630, 1730, 0, false, 0, false);
                        cm.npc_SetSpecialAction('oid=2183681', 'summon', 0, 0);
                        cm.npc_ChangeController(3003976, 'oid=2183682', -1360, -30, 13, -1410, -1310, 0, false, 0, false);
                        cm.npc_SetSpecialAction('oid=2183682', 'summon', 0, 0);
                        cm.npc_ChangeController(3003977, 'oid=2183683', -1564, -640, 35, -1614, -1514, 0, false, 0, false);
                        cm.npc_SetSpecialAction('oid=2183683', 'summon', 0, 0);
                        cm.npc_ChangeController(3003978, 'oid=2183684', -861, -320, 10, -911, -811, 0, false, 0, false);
                        cm.npc_SetSpecialAction('oid=2183684', 'summon', 0, 0);
                        cm.npc_ChangeController(3003979, 'oid=2183685', 1178, -30, 8, 1128, 1228, 0, false, 0, false);
                        cm.npc_SetSpecialAction('oid=2183685', 'summon', 0, 0);
                        cm.npc_ChangeController(3003980, 'oid=2183686', 1730, -470, 40, 1680, 1780, 0, false, 0, false);
                        cm.npc_SetSpecialAction('oid=2183686', 'summon', 0, 0);
                        cm.onSetMapObjectMove('attack', [
                            1,
                            255,
                            0
                        ]);
                        cm.onSetMapObjectMove('attack', 'idle', [
                            2,
                            0
                        ]);
                        cm.onSetMapObjectMove('attack', [
                            1,
                            0,
                            4300
                        ]);
                    }
                }
            }
            cm.dispose();
        }
    }
}
function up1() {
    cm.upShowStepSchedule([
        'a0',
        'a4',
        'a6',
        'b6',
        'a8',
        'a3',
        'a12'
    ], [
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ], 0);
    cm.upShowHoleSchedule(1429, 1324, 734, 55);
    cm.upShowStepSchedule(['a0'], [0], 10210);
    cm.upShowStepSchedule(['a15'], [1], 10210);
    cm.upShowHoleSchedule(1429, 1324, 621, 10210);
    cm.upShowStepSchedule(['a4'], [0], 11230);
    cm.upShowStepSchedule(['a14'], [1], 11230);
    cm.upShowHoleSchedule(1219, 1197, 615, 11230);
    cm.upShowStepSchedule([
        'a6',
        'b6'
    ], [
        0,
        0
    ], 12288);
    cm.upShowStepSchedule(['a18'], [1], 12288);
    cm.upShowHoleSchedule(1099, 1084, 495, 12288);
    cm.upShowStepSchedule(['a8'], [0], 13393);
    cm.upShowStepSchedule(['a17'], [1], 13393);
    cm.upShowHoleSchedule(979, 964, 494, 13393);
    cm.upShowStepSchedule(['a3'], [0], 14415);
    cm.upShowStepSchedule(['a21'], [1], 14415);
    cm.upShowHoleSchedule(864, 842, 374, 14415);
    cm.upShowStepSchedule(['a12'], [0], 15516);
    cm.upShowStepSchedule(['a23'], [1], 15516);
    cm.upShowHoleSchedule(734, 712, 255, 15516);
    cm.upShowStepSchedule(['a15'], [0], 16578);
    cm.upShowStepSchedule([
        'a25',
        'a26',
        'a27'
    ], [
        1,
        1,
        1
    ], 16578);
    cm.upShowHoleSchedule(621, 599, 134, 16578);
    cm.upShowStepSchedule(['a14'], [0], 17643);
    cm.upShowStepSchedule(['a31'], [1], 17643);
    cm.upShowHoleSchedule(615, 593, 11, 17643);
    cm.upShowStepSchedule(['a18'], [0], 18723);
    cm.upShowStepSchedule(['a35'], [1], 18723);
    cm.upShowHoleSchedule(495, 479, -99, 18723);
    cm.upShowStepSchedule(['a17'], [0], 19751);
    cm.upShowStepSchedule(['a34'], [1], 19751);
    cm.upShowHoleSchedule(494, 479, -106, 19751);
    cm.upShowStepSchedule(['a21'], [0], 20845);
    cm.upShowStepSchedule(['a37'], [1], 20845);
    cm.upShowHoleSchedule(374, 352, -226, 20845);
    cm.upShowStepSchedule(['a23'], [0], 21891);
    cm.upShowStepSchedule([
        'a39',
        'a40'
    ], [
        1,
        1
    ], 21891);
    cm.upShowHoleSchedule(255, 233, -346, 21891);
    cm.upShowStepSchedule([
        'a25',
        'a26',
        'a27'
    ], [
        0,
        0,
        0
    ], 22964);
    cm.upShowStepSchedule(['a43'], [1], 22964);
    cm.upShowHoleSchedule(134, 112, -459, 22964);
    cm.upShowStepSchedule(['a31'], [0], 24022);
    cm.upShowStepSchedule(['a45'], [1], 24022);
    cm.upShowHoleSchedule(11, -11, -579, 24022);
    cm.upShowStepSchedule(['a35'], [0], 25109);
    cm.upShowStepSchedule(['a47'], [1], 25109);
    cm.upShowHoleSchedule(-99, -121, -706, 25109);
    cm.upShowStepSchedule(['a34'], [0], 26168);
    cm.upShowStepSchedule(['a49'], [1], 26168);
    cm.upShowHoleSchedule(-106, -128, -818, 26168);
    cm.upShowStepSchedule(['a37'], [0], 27224);
    cm.upShowStepSchedule(['a51'], [1], 27224);
    cm.upShowHoleSchedule(-226, -248, -938, 27224);
    cm.upShowStepSchedule([
        'a39',
        'a40'
    ], [
        0,
        0
    ], 28266);
    cm.upShowStepSchedule(['a53'], [1], 28266);
    cm.upShowHoleSchedule(-346, -368, -1066, 28266);
    cm.upShowStepSchedule(['a43'], [0], 29346);
    cm.upShowStepSchedule(['a56'], [1], 29346);
    cm.upShowHoleSchedule(-459, -481, -1178, 29346);
    cm.upShowStepSchedule(['a45'], [0], 30412);
    cm.upShowStepSchedule([
        'j1',
        'j2'
    ], [
        1,
        1
    ], 30412);
    cm.upShowHoleSchedule(-579, -601, -1300, 30412);
    cm.upShowStepSchedule(['a47'], [0], 31475);
    cm.upShowStepSchedule([
        'j3',
        'j4'
    ], [
        1,
        1
    ], 31475);
    cm.upShowHoleSchedule(-706, -721, -1419, 31475);
    cm.upShowStepSchedule(['a49'], [0], 32545);
    cm.upShowStepSchedule([
        'j5',
        'j6'
    ], [
        1,
        1
    ], 32545);
    cm.upShowHoleSchedule(-818, -841, -1537, 32545);
    cm.upShowStepSchedule(['a51'], [0], 33593);
    cm.upShowStepSchedule(['j7'], [1], 33593);
    cm.upShowHoleSchedule(-938, -960, -1666, 33593);
    cm.upShowStepSchedule(['a53'], [0], 38609);
    cm.upShowStepSchedule(['a66'], [1], 38609);
    cm.upShowHoleSchedule(-1066, -1081, -1778, 38609);
    cm.upShowStepSchedule(['a56'], [0], 40386);
    cm.upShowStepSchedule(['a68'], [1], 40386);
    cm.upShowHoleSchedule(-1178, -1200, -1906, 40386);
    cm.upShowStepSchedule([
        'j1',
        'j2'
    ], [
        0,
        0
    ], 41466);
    cm.upShowStepSchedule(['a70'], [1], 41466);
    cm.upShowHoleSchedule(-1300, -1322, -2019, 41466);
    cm.upShowStepSchedule([
        'j3',
        'j4'
    ], [
        0,
        0
    ], 42552);
    cm.upShowStepSchedule(['a72'], [1], 42552);
    cm.upShowHoleSchedule(-1419, -1441, -2139, 42552);
    cm.upShowStepSchedule([
        'j5',
        'j6'
    ], [
        0,
        0
    ], 43547);
    cm.upShowStepSchedule([
        'a74',
        'a75'
    ], [
        1,
        1
    ], 43547);
    cm.upShowHoleSchedule(-1537, -1559, -2266, 43547);
    cm.upShowStepSchedule(['j7'], [0], 44628);
    cm.upShowStepSchedule([
        'a77',
        'a78'
    ], [
        1,
        1
    ], 44628);
    cm.upShowHoleSchedule(-1666, -1688, -2386, 44628);
    cm.upShowStepSchedule(['a66'], [0], 45714);
    cm.upShowStepSchedule(['a81'], [1], 45714);
    cm.upShowHoleSchedule(-1778, -1800, -2499, 45714);
    cm.upShowStepSchedule(['a68'], [0], 46765);
    cm.upShowStepSchedule(['a83'], [1], 46765);
    cm.upShowHoleSchedule(-1906, -1921, -2619, 46765);
    cm.upShowStepSchedule(['a70'], [0], 47808);
    cm.upShowStepSchedule(['a85'], [1], 47808);
    cm.upShowHoleSchedule(-2019, -2041, -2746, 47808);
    cm.upShowStepSchedule(['a72'], [0], 48929);
    cm.upShowStepSchedule(['a88'], [1], 48929);
    cm.upShowHoleSchedule(-2139, -2161, -2866, 48929);
    cm.upShowStepSchedule([
        'a74',
        'a75'
    ], [
        0,
        0
    ], 49924);
    cm.upShowStepSchedule(['a91'], [1], 49924);
    cm.upShowHoleSchedule(-2266, -2288, -2986, 49924);
    cm.upShowStepSchedule([
        'a77',
        'a78'
    ], [
        0,
        0
    ], 51028);
    cm.upShowStepSchedule(['a93'], [1], 51028);
    cm.upShowHoleSchedule(-2386, -2408, -3106, 51028);
    cm.upShowStepSchedule(['a81'], [0], 52090);
    cm.upShowStepSchedule(['a96'], [1], 52090);
    cm.upShowHoleSchedule(-2499, -2521, -3220, 52090);
    cm.upShowStepSchedule(['a83'], [0], 53157);
    cm.upShowStepSchedule(['a97'], [1], 53157);
    cm.upShowHoleSchedule(-2619, -2641, -3230, 53157);
    cm.upShowStepSchedule(['a85'], [0], 54239);
    cm.upShowStepSchedule(['a100'], [1], 54239);
    cm.upShowHoleSchedule(-2746, -2761, -3346, 54239);
    cm.upShowStepSchedule(['a88'], [0], 55288);
    cm.upShowStepSchedule(['a102'], [1], 55288);
    cm.upShowHoleSchedule(-2866, -2888, -3459, 55288);
    cm.upShowStepSchedule(['a91'], [0], 56369);
    cm.upShowStepSchedule([
        'a104',
        'a105'
    ], [
        1,
        1
    ], 56369);
    cm.upShowHoleSchedule(-2986, -3008, -3586, 56369);
    cm.upShowStepSchedule(['a93'], [0], 57458);
    cm.upShowStepSchedule(['a107'], [1], 57458);
    cm.upShowHoleSchedule(-3106, -3128, -3699, 57458);
    cm.upShowStepSchedule(['a96'], [0], 58497);
    cm.upShowStepSchedule(['a109'], [1], 58497);
    cm.upShowHoleSchedule(-3220, -3242, -3826, 58497);
    cm.upShowStepSchedule(['a97'], [0], 59579);
    cm.upShowStepSchedule([
        'a112',
        'a113'
    ], [
        1,
        1
    ], 59579);
    cm.upShowHoleSchedule(-3230, -3252, -3940, 59579);
    cm.upShowStepSchedule(['a100'], [0], 60651);
    cm.upShowStepSchedule(['a115'], [1], 60651);
    cm.upShowHoleSchedule(-3346, -3368, -4069, 60651);
    cm.upShowStepSchedule(['a102'], [0], 61710);
    cm.upShowStepSchedule(['a117'], [1], 61710);
    cm.upShowHoleSchedule(-3459, -3481, -4186, 61710);
    cm.upShowStepSchedule([
        'a104',
        'a105'
    ], [
        0,
        0
    ], 62775);
    cm.upShowStepSchedule(['c1'], [1], 62775);
    cm.upShowHoleSchedule(-3586, -3608, -4306, 62775);
    cm.upShowStepSchedule(['a107'], [0], 63840);
    cm.upShowStepSchedule(['c4'], [1], 63840);
    cm.upShowHoleSchedule(-3699, -3721, -4426, 63840);
    cm.upShowStepSchedule(['a109'], [0], 68012);
    cm.upShowStepSchedule(['c7'], [1], 68012);
    cm.upShowHoleSchedule(-3826, -3841, -4546, 68012);
    cm.upShowStepSchedule([
        'a112',
        'a113'
    ], [
        0,
        0
    ], 69512);
    cm.upShowStepSchedule(['c9'], [1], 69512);
    cm.upShowHoleSchedule(-3940, -3962, -4659, 69512);
    cm.upShowStepSchedule(['a115'], [0], 70497);
    cm.upShowStepSchedule(['c12'], [1], 70497);
    cm.upShowHoleSchedule(-4069, -4091, -4786, 70497);
    cm.upShowStepSchedule(['a117'], [0], 71595);
    cm.upShowStepSchedule(['c15'], [1], 71595);
    cm.upShowHoleSchedule(-4186, -4201, -4899, 71595);
    cm.upShowStepSchedule(['c1'], [0], 72699);
    cm.upShowStepSchedule(['c14'], [1], 72699);
    cm.upShowHoleSchedule(-4306, -4321, -4906, 72699);
    cm.upShowStepSchedule(['c4'], [0], 73723);
    cm.upShowStepSchedule(['c18'], [1], 73723);
    cm.upShowHoleSchedule(-4426, -4448, -5026, 73723);
    cm.upShowStepSchedule(['c7'], [0], 74739);
    cm.upShowStepSchedule(['c21'], [1], 74739);
    cm.upShowHoleSchedule(-4546, -4568, -5146, 74739);
    cm.upShowStepSchedule(['c9'], [0], 75873);
    cm.upShowStepSchedule(['c23'], [1], 75873);
    cm.upShowHoleSchedule(-4659, -4681, -5266, 75873);
    cm.upShowStepSchedule(['c12'], [0], 76962);
    cm.upShowStepSchedule([
        'c25',
        'c26',
        'c27'
    ], [
        1,
        1,
        1
    ], 76962);
    cm.upShowHoleSchedule(-4786, -4808, -5386, 76962);
    cm.upShowStepSchedule(['c15'], [0], 77962);
    cm.upShowStepSchedule(['c31'], [1], 77962);
    cm.upShowHoleSchedule(-4899, -4921, -5509, 77962);
    cm.upShowStepSchedule(['c14'], [0], 79051);
    cm.upShowStepSchedule(['c35'], [1], 79051);
    cm.upShowHoleSchedule(-4906, -4928, -5619, 79051);
    cm.upShowStepSchedule(['c18'], [0], 80094);
    cm.upShowStepSchedule(['c34'], [1], 80094);
    cm.upShowHoleSchedule(-5026, -5048, -5626, 80094);
    cm.upShowStepSchedule(['c21'], [0], 81169);
    cm.upShowStepSchedule(['c37'], [1], 81169);
    cm.upShowHoleSchedule(-5146, -5168, -5746, 81169);
    cm.upShowStepSchedule(['c23'], [0], 82234);
    cm.upShowStepSchedule([
        'c39',
        'c40'
    ], [
        1,
        1
    ], 82234);
    cm.upShowHoleSchedule(-5266, -5288, -5866, 82234);
    cm.upShowStepSchedule([
        'c25',
        'c26',
        'c27'
    ], [
        0,
        0,
        0
    ], 83284);
    cm.upShowStepSchedule(['c43'], [1], 83284);
    cm.upShowHoleSchedule(-5386, -5408, -5979, 83284);
    cm.upShowStepSchedule(['c31'], [0], 84391);
    cm.upShowStepSchedule(['c45'], [1], 84391);
    cm.upShowHoleSchedule(-5509, -5531, -6099, 84391);
    cm.upShowStepSchedule(['c35'], [0], 85424);
    cm.upShowStepSchedule(['c47'], [1], 85424);
    cm.upShowHoleSchedule(-5619, -5641, -6226, 85424);
    cm.upShowStepSchedule(['c34'], [0], 86482);
    cm.upShowStepSchedule(['c49'], [1], 86482);
    cm.upShowHoleSchedule(-5626, -5648, -6338, 86482);
    cm.upShowStepSchedule(['c37'], [0], 87535);
    cm.upShowStepSchedule(['c51'], [1], 87535);
    cm.upShowHoleSchedule(-5746, -5768, -6458, 87535);
    cm.upShowStepSchedule([
        'c39',
        'c40'
    ], [
        0,
        0
    ], 88592);
    cm.upShowStepSchedule(['c53'], [1], 88592);
    cm.upShowHoleSchedule(-5866, -5888, -6586, 88592);
    cm.upShowStepSchedule(['c43'], [0], 89649);
    cm.upShowStepSchedule(['c56'], [1], 89649);
    cm.upShowHoleSchedule(-5979, -6001, -6698, 89649);
    cm.upShowStepSchedule(['c45'], [0], 90715);
    cm.upShowStepSchedule(['c58'], [1], 90715);
    cm.upShowHoleSchedule(-6099, -6121, -6826, 90715);
    cm.upShowStepSchedule(['c47'], [0], 91799);
    cm.upShowStepSchedule(['c60'], [1], 91799);
    cm.upShowHoleSchedule(-6226, -6241, -6946, 91799);
    cm.upShowStepSchedule(['c49'], [0], 92825);
    cm.upShowStepSchedule(['c62'], [1], 92825);
    cm.upShowHoleSchedule(-6338, -6361, -7066, 92825);
    cm.upShowStepSchedule(['c51'], [0], 93909);
    cm.upShowStepSchedule(['c64'], [1], 93909);
    cm.upShowHoleSchedule(-6458, -6480, -7178, 93909);
    cm.upShowStepSchedule(['c53'], [0], 99293);
    cm.upShowStepSchedule(['c66'], [1], 99293);
    cm.upShowHoleSchedule(-6586, -6601, -7298, 99293);
    cm.upShowStepSchedule(['c56'], [0], 101095);
    cm.upShowStepSchedule(['c68'], [1], 101095);
    cm.upShowHoleSchedule(-6698, -6720, -7426, 101095);
    cm.upShowStepSchedule(['c58'], [0], 102157);
    cm.upShowStepSchedule(['c70'], [1], 102157);
    cm.upShowHoleSchedule(-6826, -6841, -7539, 102157);
    cm.upShowStepSchedule(['c60'], [0], 103212);
    cm.upShowStepSchedule(['c72'], [1], 103212);
    cm.upShowHoleSchedule(-6946, -6961, -7659, 103212);
    cm.upShowStepSchedule(['c62'], [0], 104271);
    cm.upShowStepSchedule([
        'c74',
        'c75'
    ], [
        1,
        1
    ], 104271);
    cm.upShowHoleSchedule(-7066, -7081, -7786, 104271);
    cm.upShowStepSchedule(['c64'], [0], 105337);
    cm.upShowStepSchedule([
        'c77',
        'c78'
    ], [
        1,
        1
    ], 105337);
    cm.upShowHoleSchedule(-7178, -7201, -7906, 105337);
    cm.upShowStepSchedule(['c66'], [0], 106434);
    cm.upShowStepSchedule(['c81'], [1], 106434);
    cm.upShowHoleSchedule(-7298, -7320, -8019, 106434);
    cm.upShowStepSchedule(['c68'], [0], 107493);
    cm.upShowStepSchedule(['c83'], [1], 107493);
    cm.upShowHoleSchedule(-7426, -7441, -8139, 107493);
    cm.upShowStepSchedule(['c70'], [0], 108553);
    cm.upShowStepSchedule(['c85'], [1], 108553);
    cm.upShowHoleSchedule(-7539, -7561, -8266, 108553);
    cm.upShowStepSchedule(['c72'], [0], 109626);
    cm.upShowStepSchedule(['c88'], [1], 109626);
    cm.upShowHoleSchedule(-7659, -7681, -8386, 109626);
    cm.upShowStepSchedule([
        'c74',
        'c75'
    ], [
        0,
        0
    ], 110690);
    cm.upShowStepSchedule(['c91'], [1], 110690);
    cm.upShowHoleSchedule(-7786, -7808, -8506, 110690);
    cm.upShowStepSchedule([
        'c77',
        'c78'
    ], [
        0,
        0
    ], 111746);
    cm.upShowStepSchedule(['c93'], [1], 111746);
    cm.upShowHoleSchedule(-7906, -7928, -8626, 111746);
    cm.upShowStepSchedule(['c81'], [0], 112829);
    cm.upShowStepSchedule([
        'c96',
        'c97'
    ], [
        1,
        1
    ], 112829);
    cm.upShowHoleSchedule(-8019, -8041, -8747, 112829);
    cm.upShowStepSchedule(['c83'], [0], 113875);
    cm.upShowStepSchedule(['c100'], [1], 113875);
    cm.upShowHoleSchedule(-8139, -8161, -8866, 113875);
    cm.upShowStepSchedule(['c85'], [0], 114954);
    cm.upShowStepSchedule(['c102'], [1], 114954);
    cm.upShowHoleSchedule(-8266, -8281, -8979, 114954);
    cm.upShowStepSchedule(['c88'], [0], 116022);
    cm.upShowStepSchedule([
        'c104',
        'c105'
    ], [
        1,
        1
    ], 116022);
    cm.upShowHoleSchedule(-8386, -8408, -9106, 116022);
    cm.upShowStepSchedule(['c91'], [0], 117075);
    cm.upShowStepSchedule(['c107'], [1], 117075);
    cm.upShowHoleSchedule(-8506, -8528, -9219, 117075);
    cm.upShowStepSchedule(['c93'], [0], 118129);
    cm.upShowStepSchedule(['c109'], [1], 118129);
    cm.upShowHoleSchedule(-8626, -8648, -9346, 118129);
    cm.upShowStepSchedule([
        'c96',
        'c97'
    ], [
        0,
        0
    ], 119192);
    cm.upShowStepSchedule(['c112'], [1], 119192);
    cm.upShowHoleSchedule(-8747, -8769, -9458, 119192);
    cm.upShowStepSchedule(['c100'], [0], 120264);
    cm.upShowStepSchedule(['c113'], [1], 120264);
    cm.upShowHoleSchedule(-8866, -8888, -9466, 120264);
    cm.upShowStepSchedule(['c102'], [0], 121318);
    cm.upShowStepSchedule(['c115'], [1], 121318);
    cm.upShowHoleSchedule(-8979, -9001, -9589, 121318);
    cm.upShowStepSchedule([
        'c104',
        'c105'
    ], [
        0,
        0
    ], 122377);
    cm.upShowStepSchedule(['c117'], [1], 122377);
    cm.upShowHoleSchedule(-9106, -9128, -9706, 122377);
    cm.upShowStepSchedule(['c107'], [0], 123460);
    cm.upShowStepSchedule([], [], 123460);
    cm.upShowHoleSchedule(-9219, -9241, -9706, 123460);
}
function up2() {
    cm.upShowStepSchedule([
        'a0',
        'a4',
        'a6',
        'b6',
        'a8',
        'a3',
        'a12'
    ], [
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ], 0);
    cm.upShowHoleSchedule(1429, 1324, 734, 0);
    cm.upShowStepSchedule(['a0'], [0], 6466);
    cm.upShowStepSchedule(['a15'], [1], 6466);
    cm.upShowHoleSchedule(1429, 1324, 621, 6466);
    cm.upShowStepSchedule(['a4'], [0], 7491);
    cm.upShowStepSchedule(['a14'], [1], 7491);
    cm.upShowHoleSchedule(1219, 1197, 615, 7491);
    cm.upShowStepSchedule([
        'a6',
        'b6'
    ], [
        0,
        0
    ], 8565);
    cm.upShowStepSchedule(['a18'], [1], 8565);
    cm.upShowHoleSchedule(1099, 1084, 495, 8565);
    cm.upShowStepSchedule(['a8'], [0], 9641);
    cm.upShowStepSchedule(['a17'], [1], 9641);
    cm.upShowHoleSchedule(979, 964, 494, 9641);
    cm.upShowStepSchedule(['a3'], [0], 10699);
    cm.upShowStepSchedule(['a21'], [1], 10699);
    cm.upShowHoleSchedule(864, 842, 374, 10699);
    cm.upShowStepSchedule(['a12'], [0], 11763);
    cm.upShowStepSchedule(['a23'], [1], 11763);
    cm.upShowHoleSchedule(734, 712, 255, 11763);
    cm.upShowStepSchedule(['a15'], [0], 12802);
    cm.upShowStepSchedule([
        'a25',
        'a26',
        'a27'
    ], [
        1,
        1,
        1
    ], 12802);
    cm.upShowHoleSchedule(621, 599, 134, 12802);
    cm.upShowStepSchedule(['a14'], [0], 13877);
    cm.upShowStepSchedule(['a31'], [1], 13877);
    cm.upShowHoleSchedule(615, 593, 11, 13877);
    cm.upShowStepSchedule(['a18'], [0], 14953);
    cm.upShowStepSchedule(['a35'], [1], 14953);
    cm.upShowHoleSchedule(495, 479, -99, 14953);
    cm.upShowStepSchedule(['a17'], [0], 15991);
    cm.upShowStepSchedule(['a34'], [1], 15991);
    cm.upShowHoleSchedule(494, 479, -106, 15991);
    cm.upShowStepSchedule(['a21'], [0], 17078);
    cm.upShowStepSchedule(['a37'], [1], 17078);
    cm.upShowHoleSchedule(374, 352, -226, 17078);
    cm.upShowStepSchedule(['a23'], [0], 18146);
    cm.upShowStepSchedule([
        'a39',
        'a40'
    ], [
        1,
        1
    ], 18146);
    cm.upShowHoleSchedule(255, 233, -346, 18146);
    cm.upShowStepSchedule([
        'a25',
        'a26',
        'a27'
    ], [
        0,
        0,
        0
    ], 19183);
    cm.upShowStepSchedule(['a43'], [1], 19183);
    cm.upShowHoleSchedule(134, 112, -459, 19183);
    cm.upShowStepSchedule(['a31'], [0], 24195);
    cm.upShowStepSchedule(['a45'], [1], 24195);
    cm.upShowHoleSchedule(11, -11, -579, 24195);
    cm.upShowStepSchedule(['a35'], [0], 26179);
    cm.upShowStepSchedule(['a47'], [1], 26179);
    cm.upShowHoleSchedule(-99, -121, -706, 26179);
    cm.upShowStepSchedule(['a34'], [0], 27212);
    cm.upShowStepSchedule(['a49'], [1], 27212);
    cm.upShowHoleSchedule(-106, -128, -818, 27212);
    cm.upShowStepSchedule(['a37'], [0], 28297);
    cm.upShowStepSchedule(['a51'], [1], 28297);
    cm.upShowHoleSchedule(-226, -248, -938, 28297);
    cm.upShowStepSchedule([
        'a39',
        'a40'
    ], [
        0,
        0
    ], 29360);
    cm.upShowStepSchedule(['a53'], [1], 29360);
    cm.upShowHoleSchedule(-346, -368, -1066, 29360);
    cm.upShowStepSchedule(['a43'], [0], 30426);
    cm.upShowStepSchedule(['a56'], [1], 30426);
    cm.upShowHoleSchedule(-459, -481, -1178, 30426);
    cm.upShowStepSchedule(['a45'], [0], 31512);
    cm.upShowStepSchedule([
        'j1',
        'j2'
    ], [
        1,
        1
    ], 31512);
    cm.upShowHoleSchedule(-579, -601, -1300, 31512);
    cm.upShowStepSchedule(['a47'], [0], 32570);
    cm.upShowStepSchedule([
        'j3',
        'j4'
    ], [
        1,
        1
    ], 32570);
    cm.upShowHoleSchedule(-706, -721, -1419, 32570);
    cm.upShowStepSchedule(['a49'], [0], 33607);
    cm.upShowStepSchedule([
        'j5',
        'j6'
    ], [
        1,
        1
    ], 33607);
    cm.upShowHoleSchedule(-818, -841, -1537, 33607);
    cm.upShowStepSchedule(['a51'], [0], 34734);
    cm.upShowStepSchedule(['j7'], [1], 34734);
    cm.upShowHoleSchedule(-938, -960, -1666, 34734);
    cm.upShowStepSchedule(['a53'], [0], 35797);
    cm.upShowStepSchedule(['a66'], [1], 35797);
    cm.upShowHoleSchedule(-1066, -1081, -1778, 35797);
    cm.upShowStepSchedule(['a56'], [0], 36835);
    cm.upShowStepSchedule(['a68'], [1], 36835);
    cm.upShowHoleSchedule(-1178, -1200, -1906, 36835);
    cm.upShowStepSchedule([
        'j1',
        'j2'
    ], [
        0,
        0
    ], 37904);
    cm.upShowStepSchedule(['a70'], [1], 37904);
    cm.upShowHoleSchedule(-1300, -1322, -2019, 37904);
    cm.upShowStepSchedule([
        'j3',
        'j4'
    ], [
        0,
        0
    ], 38997);
    cm.upShowStepSchedule(['a72'], [1], 38997);
    cm.upShowHoleSchedule(-1419, -1441, -2139, 38997);
    cm.upShowStepSchedule([
        'j5',
        'j6'
    ], [
        0,
        0
    ], 40105);
    cm.upShowStepSchedule([
        'a74',
        'a75'
    ], [
        1,
        1
    ], 40105);
    cm.upShowHoleSchedule(-1537, -1559, -2266, 40105);
    cm.upShowStepSchedule(['j7'], [0], 41136);
    cm.upShowStepSchedule([
        'a77',
        'a78'
    ], [
        1,
        1
    ], 41136);
    cm.upShowHoleSchedule(-1666, -1688, -2386, 41136);
    cm.upShowStepSchedule(['a66'], [0], 42192);
    cm.upShowStepSchedule(['a81'], [1], 42192);
    cm.upShowHoleSchedule(-1778, -1800, -2499, 42192);
    cm.upShowStepSchedule(['a68'], [0], 43245);
    cm.upShowStepSchedule(['a83'], [1], 43245);
    cm.upShowHoleSchedule(-1906, -1921, -2619, 43245);
    cm.upShowStepSchedule(['a70'], [0], 44286);
    cm.upShowStepSchedule(['a85'], [1], 44286);
    cm.upShowHoleSchedule(-2019, -2041, -2746, 44286);
    cm.upShowStepSchedule(['a72'], [0], 45372);
    cm.upShowStepSchedule(['a88'], [1], 45372);
    cm.upShowHoleSchedule(-2139, -2161, -2866, 45372);
    cm.upShowStepSchedule([
        'a74',
        'a75'
    ], [
        0,
        0
    ], 46458);
    cm.upShowStepSchedule(['a91'], [1], 46458);
    cm.upShowHoleSchedule(-2266, -2288, -2986, 46458);
    cm.upShowStepSchedule([
        'a77',
        'a78'
    ], [
        0,
        0
    ], 47509);
    cm.upShowStepSchedule(['a93'], [1], 47509);
    cm.upShowHoleSchedule(-2386, -2408, -3106, 47509);
    cm.upShowStepSchedule(['a81'], [0], 48609);
    cm.upShowStepSchedule(['a96'], [1], 48609);
    cm.upShowHoleSchedule(-2499, -2521, -3220, 48609);
    cm.upShowStepSchedule(['a83'], [0], 49596);
    cm.upShowStepSchedule(['a97'], [1], 49596);
    cm.upShowHoleSchedule(-2619, -2641, -3230, 49596);
    cm.upShowStepSchedule(['a85'], [0], 54765);
    cm.upShowStepSchedule(['a100'], [1], 54765);
    cm.upShowHoleSchedule(-2746, -2761, -3346, 54765);
    cm.upShowStepSchedule(['a88'], [0], 56948);
    cm.upShowStepSchedule(['a102'], [1], 56948);
    cm.upShowHoleSchedule(-2866, -2888, -3459, 56948);
    cm.upShowStepSchedule(['a91'], [0], 58011);
    cm.upShowStepSchedule([
        'a104',
        'a105'
    ], [
        1,
        1
    ], 58011);
    cm.upShowHoleSchedule(-2986, -3008, -3586, 58011);
    cm.upShowStepSchedule(['a93'], [0], 59045);
    cm.upShowStepSchedule(['a107'], [1], 59045);
    cm.upShowHoleSchedule(-3106, -3128, -3699, 59045);
    cm.upShowStepSchedule(['a96'], [0], 60141);
    cm.upShowStepSchedule(['a109'], [1], 60141);
    cm.upShowHoleSchedule(-3220, -3242, -3826, 60141);
    cm.upShowStepSchedule(['a97'], [0], 61194);
    cm.upShowStepSchedule([
        'a112',
        'a113'
    ], [
        1,
        1
    ], 61194);
    cm.upShowHoleSchedule(-3230, -3252, -3940, 61194);
    cm.upShowStepSchedule(['a100'], [0], 62318);
    cm.upShowStepSchedule(['a115'], [1], 62318);
    cm.upShowHoleSchedule(-3346, -3368, -4069, 62318);
    cm.upShowStepSchedule(['a102'], [0], 63339);
    cm.upShowStepSchedule(['a117'], [1], 63339);
    cm.upShowHoleSchedule(-3459, -3481, -4186, 63339);
    cm.upShowStepSchedule([
        'a104',
        'a105'
    ], [
        0,
        0
    ], 64422);
    cm.upShowStepSchedule(['c1'], [1], 64422);
    cm.upShowHoleSchedule(-3586, -3608, -4306, 64423);
    cm.upShowStepSchedule(['a107'], [0], 65492);
    cm.upShowStepSchedule(['c4'], [1], 65492);
    cm.upShowHoleSchedule(-3699, -3721, -4426, 65492);
    cm.upShowStepSchedule(['a109'], [0], 66555);
    cm.upShowStepSchedule(['c7'], [1], 66555);
    cm.upShowHoleSchedule(-3826, -3841, -4546, 66555);
    cm.upShowStepSchedule([
        'a112',
        'a113'
    ], [
        0,
        0
    ], 67621);
    cm.upShowStepSchedule(['c9'], [1], 67621);
    cm.upShowHoleSchedule(-3940, -3962, -4659, 67621);
    cm.upShowStepSchedule(['a115'], [0], 68683);
    cm.upShowStepSchedule(['c12'], [1], 68683);
    cm.upShowHoleSchedule(-4069, -4091, -4786, 68683);
    cm.upShowStepSchedule(['a117'], [0], 69720);
    cm.upShowStepSchedule(['c15'], [1], 69720);
    cm.upShowHoleSchedule(-4186, -4201, -4899, 69720);
    cm.upShowStepSchedule(['c1'], [0], 70858);
    cm.upShowStepSchedule(['c14'], [1], 70858);
    cm.upShowHoleSchedule(-4306, -4321, -4906, 70858);
    cm.upShowStepSchedule(['c4'], [0], 71902);
    cm.upShowStepSchedule(['c18'], [1], 71902);
    cm.upShowHoleSchedule(-4426, -4448, -5026, 71902);
    cm.upShowStepSchedule(['c7'], [0], 72957);
    cm.upShowStepSchedule(['c21'], [1], 72957);
    cm.upShowHoleSchedule(-4546, -4568, -5146, 72957);
    cm.upShowStepSchedule(['c9'], [0], 74020);
    cm.upShowStepSchedule(['c23'], [1], 74020);
    cm.upShowHoleSchedule(-4659, -4681, -5266, 74020);
    cm.upShowStepSchedule(['c12'], [0], 75079);
    cm.upShowStepSchedule([
        'c25',
        'c26',
        'c27'
    ], [
        1,
        1,
        1
    ], 75079);
    cm.upShowHoleSchedule(-4786, -4808, -5386, 75079);
    cm.upShowStepSchedule(['c15'], [0], 76140);
    cm.upShowStepSchedule(['c31'], [1], 76140);
    cm.upShowHoleSchedule(-4899, -4921, -5509, 76140);
    cm.upShowStepSchedule(['c14'], [0], 77198);
    cm.upShowStepSchedule(['c35'], [1], 77198);
    cm.upShowHoleSchedule(-4906, -4928, -5619, 77198);
    cm.upShowStepSchedule(['c18'], [0], 78246);
    cm.upShowStepSchedule(['c34'], [1], 78246);
    cm.upShowHoleSchedule(-5026, -5048, -5626, 78246);
    cm.upShowStepSchedule(['c21'], [0], 79305);
    cm.upShowStepSchedule(['c37'], [1], 79305);
    cm.upShowHoleSchedule(-5146, -5168, -5746, 79305);
    cm.upShowStepSchedule(['c23'], [0], 80410);
    cm.upShowStepSchedule([
        'c39',
        'c40'
    ], [
        1,
        1
    ], 80410);
    cm.upShowHoleSchedule(-5266, -5288, -5866, 80410);
    cm.upShowStepSchedule([
        'c25',
        'c26',
        'c27'
    ], [
        0,
        0,
        0
    ], 85561);
    cm.upShowStepSchedule(['c43'], [1], 85561);
    cm.upShowHoleSchedule(-5386, -5408, -5979, 85561);
    cm.upShowStepSchedule(['c31'], [0], 87547);
    cm.upShowStepSchedule(['c45'], [1], 87547);
    cm.upShowHoleSchedule(-5509, -5531, -6099, 87547);
    cm.upShowStepSchedule(['c35'], [0], 88616);
    cm.upShowStepSchedule(['c47'], [1], 88616);
    cm.upShowHoleSchedule(-5619, -5641, -6226, 88616);
    cm.upShowStepSchedule(['c34'], [0], 89639);
    cm.upShowStepSchedule(['c49'], [1], 89639);
    cm.upShowHoleSchedule(-5626, -5648, -6338, 89639);
    cm.upShowStepSchedule(['c37'], [0], 90728);
    cm.upShowStepSchedule(['c51'], [1], 90728);
    cm.upShowHoleSchedule(-5746, -5768, -6458, 90728);
    cm.upShowStepSchedule([
        'c39',
        'c40'
    ], [
        0,
        0
    ], 91789);
    cm.upShowStepSchedule(['c53'], [1], 91789);
    cm.upShowHoleSchedule(-5866, -5888, -6586, 91789);
    cm.upShowStepSchedule(['c43'], [0], 92890);
    cm.upShowStepSchedule(['c56'], [1], 92890);
    cm.upShowHoleSchedule(-5979, -6001, -6698, 92890);
    cm.upShowStepSchedule(['c45'], [0], 93949);
    cm.upShowStepSchedule(['c58'], [1], 93949);
    cm.upShowHoleSchedule(-6099, -6121, -6826, 93949);
    cm.upShowStepSchedule(['c47'], [0], 94977);
    cm.upShowStepSchedule(['c60'], [1], 94977);
    cm.upShowHoleSchedule(-6226, -6241, -6946, 94977);
    cm.upShowStepSchedule(['c49'], [0], 96065);
    cm.upShowStepSchedule(['c62'], [1], 96065);
    cm.upShowHoleSchedule(-6338, -6361, -7066, 96065);
    cm.upShowStepSchedule(['c51'], [0], 97115);
    cm.upShowStepSchedule(['c64'], [1], 97115);
    cm.upShowHoleSchedule(-6458, -6480, -7178, 97115);
    cm.upShowStepSchedule(['c53'], [0], 98178);
    cm.upShowStepSchedule(['c66'], [1], 98178);
    cm.upShowHoleSchedule(-6586, -6601, -7298, 98178);
    cm.upShowStepSchedule(['c56'], [0], 99246);
    cm.upShowStepSchedule(['c68'], [1], 99246);
    cm.upShowHoleSchedule(-6698, -6720, -7426, 99246);
    cm.upShowStepSchedule(['c58'], [0], 100344);
    cm.upShowStepSchedule(['c70'], [1], 100344);
    cm.upShowHoleSchedule(-6826, -6841, -7539, 100344);
    cm.upShowStepSchedule(['c60'], [0], 101372);
    cm.upShowStepSchedule(['c72'], [1], 101372);
    cm.upShowHoleSchedule(-6946, -6961, -7659, 101372);
    cm.upShowStepSchedule(['c62'], [0], 102448);
    cm.upShowStepSchedule([
        'c74',
        'c75'
    ], [
        1,
        1
    ], 102448);
    cm.upShowHoleSchedule(-7066, -7081, -7786, 102448);
    cm.upShowStepSchedule(['c64'], [0], 103473);
    cm.upShowStepSchedule([
        'c77',
        'c78'
    ], [
        1,
        1
    ], 103473);
    cm.upShowHoleSchedule(-7178, -7201, -7906, 103473);
    cm.upShowStepSchedule(['c66'], [0], 104560);
    cm.upShowStepSchedule(['c81'], [1], 104560);
    cm.upShowHoleSchedule(-7298, -7320, -8019, 104560);
    cm.upShowStepSchedule(['c68'], [0], 105621);
    cm.upShowStepSchedule(['c83'], [1], 105621);
    cm.upShowHoleSchedule(-7426, -7441, -8139, 105621);
    cm.upShowStepSchedule(['c70'], [0], 106687);
    cm.upShowStepSchedule(['c85'], [1], 106687);
    cm.upShowHoleSchedule(-7539, -7561, -8266, 106687);
    cm.upShowStepSchedule(['c72'], [0], 107746);
    cm.upShowStepSchedule(['c88'], [1], 107746);
    cm.upShowHoleSchedule(-7659, -7681, -8386, 107746);
    cm.upShowStepSchedule([
        'c74',
        'c75'
    ], [
        0,
        0
    ], 108797);
    cm.upShowStepSchedule(['c91'], [1], 108797);
    cm.upShowHoleSchedule(-7786, -7808, -8506, 108797);
    cm.upShowStepSchedule([
        'c77',
        'c78'
    ], [
        0,
        0
    ], 109887);
    cm.upShowStepSchedule(['c93'], [1], 109887);
    cm.upShowHoleSchedule(-7906, -7928, -8626, 109887);
    cm.upShowStepSchedule(['c81'], [0], 110944);
    cm.upShowStepSchedule([
        'c96',
        'c97'
    ], [
        1,
        1
    ], 110944);
    cm.upShowHoleSchedule(-8019, -8041, -8747, 110944);
    cm.upShowStepSchedule(['c83'], [0], 116186);
    cm.upShowStepSchedule(['c100'], [1], 116186);
    cm.upShowHoleSchedule(-8139, -8161, -8866, 116186);
    cm.upShowStepSchedule(['c85'], [0], 118343);
    cm.upShowStepSchedule(['c102'], [1], 118343);
    cm.upShowHoleSchedule(-8266, -8281, -8979, 118343);
    cm.upShowStepSchedule(['c88'], [0], 119443);
    cm.upShowStepSchedule([
        'c104',
        'c105'
    ], [
        1,
        1
    ], 119443);
    cm.upShowHoleSchedule(-8386, -8408, -9106, 119443);
    cm.upShowStepSchedule(['c91'], [0], 120470);
    cm.upShowStepSchedule(['c107'], [1], 120470);
    cm.upShowHoleSchedule(-8506, -8528, -9219, 120470);
    cm.upShowStepSchedule(['c93'], [0], 121529);
    cm.upShowStepSchedule(['c109'], [1], 121529);
    cm.upShowHoleSchedule(-8626, -8648, -9346, 121529);
    cm.upShowStepSchedule([
        'c96',
        'c97'
    ], [
        0,
        0
    ], 122575);
    cm.upShowStepSchedule(['c112'], [1], 122575);
    cm.upShowHoleSchedule(-8747, -8769, -9458, 122575);
    cm.upShowStepSchedule(['c100'], [0], 123673);
    cm.upShowStepSchedule(['c113'], [1], 123673);
    cm.upShowHoleSchedule(-8866, -8888, -9466, 123673);
    cm.upShowStepSchedule(['c102'], [0], 124718);
    cm.upShowStepSchedule(['c115'], [1], 124718);
    cm.upShowHoleSchedule(-8979, -9001, -9589, 124718);
    cm.upShowStepSchedule([
        'c104',
        'c105'
    ], [
        0,
        0
    ], 125805);
    cm.upShowStepSchedule(['c117'], [1], 125805);
    cm.upShowHoleSchedule(-9106, -9128, -9706, 125805);
    cm.upShowStepSchedule(['c107'], [0], 126904);
    cm.upShowStepSchedule([], [], 126904);
    cm.upShowHoleSchedule(-9219, -9241, -9706, 126904);
}