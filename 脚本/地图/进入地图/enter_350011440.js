var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1540446, "oid=32887", 852, 16, 2, 830, 902, 1, false, 0, false);
      cm.updateInfoQuest(33128, "act1=350011440");
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/secretmissionbase", 100, 60);
      cm.npc_ChangeController(1540485, "oid=12981284", 1625, 11, 9, 1575, 1675, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=12981284", "summon", 0, 0);
      cm.npc_ChangeController(1540502, "oid=12981285", 1398, 11, 14, 1348, 1448, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12981285", "summon", 0, 0);
      cm.npc_ChangeController(1540503, "oid=12981286", 1705, 11, 9, 1655, 1755, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=12981286", 'summon', 0, 0);
      cm.npc_ChangeController(1540504, "oid=12981287", 1295, 11, 7, 1245, 1345, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12981287", "summon", 0, 0);
      cm.fieldEffect_BackgroundCanvas(1, 30, 30, 30, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 300, 1576, 61);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 600, 1576, 11);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=12981284", "awake", -1, 1);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("……呃……", 37, 1540485, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("布吉，你清醒了吗？", 37, 1540504, true, true);
                  cm.effect_Voice("Voice3.img/BlackHeaven/3_6/5", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("！！不行……这里很危险！你们快逃！", 37, 1540485, false, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayBGM("Bgm40.img/SecretMission", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                        cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 1676, -169);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(1540506, "oid=12981741", 1618, 11, 12, 1568, 1668, 1, false, 0, false);
                                cm.npc_SetSpecialAction("oid=12981741", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=12981741", "light", 0, 0);
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission5", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=12981741", 'lightup', -1, 1);
                                        cm.fieldEffect_BackgroundCanvas(1, 255, 255, 255, 1000, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                        cm.effect_Voice("SoundEff.img/blackHeaven/secretmission2", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=12981286", 1);
                                          cm.npc_ChangeController(1540486, "oid=12982305", 2048, 11, 17, 1998, 2098, 1, false, 0, false);
                                          cm.npc_SetSpecialAction("oid=12982305", 'summon', 0, 0);
                                          cm.npc_SetSpecialAction("oid=12982305", "appear", 0, 0);
                                          cm.userSetFieldFloating(350011440, 50, 10, 20);
                                          cm.inGameDirectionEvent_AskAnswerTime(1300);
                                          cm.effect_Voice("SoundEff.img/blackHeaven/explosion2", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.userSetFieldFloating(350011440, 0, 0, 0);
                                            cm.npc_SetSpecialAction("oid=12982305", "stay", -1, 1);
                                            cm.userSetFieldFloating(350011440, 30, 0, 10);
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#呃啊，那究竟是什么啊？！", 37, 1540503, false, true);
                                              cm.effect_Voice("Voice3.img/BlackHeaven/3_6/6", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#……你们瞧吧，我都说了不是我的放屁声。", 37, 1540502, true, true);
                                                cm.effect_Voice("Voice3.img/BlackHeaven/3_6/7", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#现在这个不重要！", 37, 1540503, true, true);
                                                  cm.effect_Voice("Voice3.img/BlackHeaven/3_6/8", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.updateInfoQuest(33151, "run=1;onBoard=1;dagoth=1;monpa=4;ropeOut=1;halo=1;ropetalk=2;password=1");
                                                      cm.sendNormalTalk_Bottom("#face1#快跳！", 37, 1540504, false, true);
                                                      cm.effect_Voice("Voice3.img/BlackHeaven/3_6/9", 100);
                                                    } else if (status === V++) {
                                                      cm.playerMessage(5, "请避开掉落的钟乳石, 逃离粉碎机!");
                                                      cm.dispose();
                                                      cm.warp(350011500, 0, false);
                                                      cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;