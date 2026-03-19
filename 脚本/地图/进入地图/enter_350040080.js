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
      cm.npc_ChangeController(1540654, "oid=35930", 256, -1232, 8, 206, 306, 1, false, 0, false);
      cm.npc_ChangeController(1540654, "oid=35931", 315, -1232, 1, 265, 365, 1, false, 0, false);
      cm.npc_ChangeController(1540654, "oid=35932", 365, -1232, 7, 315, 415, 1, false, 0, false);
      cm.npc_ChangeController(1540654, "oid=35933", 412, -1232, 7, 362, 462, 1, false, 0, false);
      cm.npc_ChangeController(1540654, "oid=35934", 470, -1232, 9, 420, 520, 1, false, 0, false);
      cm.npc_ChangeController(1540654, "oid=35935", 535, -1232, 9, 485, 585, 1, false, 0, false);
      cm.npc_ChangeController(1540654, "oid=35936", 593, -1232, 31, 543, 643, 1, false, 0, false);
      cm.npc_ChangeController(1540654, 'oid=35937', 781, -1292, 26, 731, 831, 1, false, 0, false);
      cm.npc_ChangeController(1540654, "oid=35938", 737, -1292, 26, 687, 787, 1, false, 0, false);
      cm.npc_ChangeController(1540654, 'oid=35939', 675, -1262, 34, 625, 725, 1, false, 0, false);
      cm.npc_ChangeController(1540654, "oid=35940", 632, -1233, 34, 582, 682, 1, false, 0, false);
      cm.npc_ChangeController(1540654, "oid=35941", 544, -1232, 31, 494, 594, 1, false, 0, false);
      cm.npc_ChangeController(1540654, "oid=35942", 330, -1232, 1, 280, 380, 1, false, 0, false);
      cm.npc_ChangeController(1540654, 'oid=35943', 854, -1292, 28, 804, 880, 1, false, 0, false);
      cm.npc_ChangeController(1540654, "oid=35944", 815, -1292, 28, 765, 865, 1, false, 0, false);
      cm.npc_ChangeController(1540654, "oid=35945", 212, -1232, 8, 162, 262, 1, false, 0, false);
      cm.npc_ChangeController(1540654, "oid=35946", 482, -1232, 9, 432, 532, 1, false, 0, false);
      cm.npc_ChangeController(1540654, 'oid=35947', 156, -1232, 25, 106, 206, 1, false, 0, false);
      cm.npc_ChangeController(1540654, "oid=35948", 103, -1232, 25, 53, 153, 1, false, 0, false);
      cm.setAmbience("Ambience.img/secretmissionbase", 100, 60);
      cm.setAmbience("Ambience.img/warning", 50, 60);
      cm.npc_ChangeController(1540502, "oid=22213960", -110, -1260, 6, -160, -60, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22213960", "summon", 0, 0);
      cm.npc_ChangeController(1540503, "oid=22213961", -200, -1260, 18, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22213961", 'summon', 0, 0);
      cm.npc_ChangeController(1540504, "oid=22213962", -300, -1260, 16, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22213962", "summon", 0, 0);
      cm.npc_ChangeController(1540655, "oid=22213963", 744, -1360, 26, 694, 794, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22213963", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, 625, -1240);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(0);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=22213963", -1, 500, 300);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.userSetFieldFloating(350040080, 20, 30, 20);
            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 300, -1235, 1, 0, 1, 1, 0]);
            cm.fieldEffect_PlayFieldSound('summon/0', 100);
            cm.inGameDirectionEvent_AskAnswerTime(200);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 400, -1235, 1, 0, 1, 1, 0]);
              cm.fieldEffect_PlayFieldSound("summon/0", 100);
              cm.inGameDirectionEvent_AskAnswerTime(200);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 500, -1235, 1, 0, 1, 1, 0]);
                cm.fieldEffect_PlayFieldSound('summon/0', 100);
                cm.userSetFieldFloating(350040080, 0, 0, 0);
                cm.sendNormalTalk_Bottom("#r目标，无需生擒。消灭。\r\n目标，无需生擒。消灭。#k", 37, 1540655, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 2000, -275, -1240);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(449);
                  } else {
                    if (status === V++) {
                      cm.userSetFieldFloating(350040080, 20, 30, 20);
                      cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 100, -1235, 1, 0, 1, 1, 0]);
                      cm.fieldEffect_PlayFieldSound("summon/0", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(200);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 200, -1235, 1, 0, 1, 1, 0]);
                        cm.fieldEffect_PlayFieldSound("summon/0", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(200);
                      } else {
                        if (status === V++) {
                          cm.userSetFieldFloating(350040080, 0, 0, 0);
                          cm.sendNormalTalk_Bottom("#face1#队长，危险！\r\n敌人的数量太多了！", 37, 1540502, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#二十九，三十……\r\n这些家伙到底是从哪里冒出来的啊！", 37, 1540503, true, true);
                          } else {
                            if (status === V++) {
                              cm.playSoundEffDirectly("Ambience.img/warning");
                              cm.sendNormalTalk_Bottom("#face0#我说你们！快到这里来！", 37, 1540650, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(0, 2000, -1024, -380);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(569);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 2000, 0, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#队长，我们还是先到那边藏身吧！", 37, 1540504, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.setAmbience("Ambience.img/warning", 40, 60);
                                          cm.fieldEffect_PlayBGM("Bgm40.img/SecretMission", 0, 0);
                                          cm.inGameDirectionEvent_MoveAction(1);
                                          cm.npc_SetForceMove("oid=22213960", -1, 1000, 300);
                                          cm.npc_SetForceMove("oid=22213961", -1, 1000, 300);
                                          cm.npc_SetForceMove("oid=22213962", -1, 1000, 300);
                                          cm.npc_SetForceMove("oid=22213963", -1, 500, 300);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=22213963", "attack", -1, 1);
                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8240057/Attack1", 100);
                                            cm.userSetFieldFloating(350040080, 20, 30, 20);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.userSetFieldFloating(350040080, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion3", 100);
                                                cm.playSoundEffDirectly("Ambience.img/warning");
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
                                                  cm.forceCompleteQuest(33191);
                                                  cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                } else if (status === V++) {
                                                  cm.dispose();
                                                  cm.warp(350040090, 0, true);
                                                  cm.npc_LeaveField("oid=35932");
                                                  cm.npc_LeaveField("oid=35933");
                                                  cm.npc_LeaveField("oid=35934");
                                                  cm.npc_LeaveField("oid=35935");
                                                  cm.npc_LeaveField('oid=35936');
                                                  cm.npc_LeaveField("oid=35937");
                                                  cm.npc_LeaveField('oid=35938');
                                                  cm.npc_LeaveField('oid=35939');
                                                  cm.npc_LeaveField("oid=35940");
                                                  cm.npc_LeaveField('oid=35941');
                                                  cm.npc_LeaveField('oid=35943');
                                                  cm.npc_LeaveField("oid=35944");
                                                  cm.npc_LeaveField("oid=35946");
                                                  cm.npc_LeaveField("oid=22213962");
                                                  cm.npc_LeaveField("oid=22213961");
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