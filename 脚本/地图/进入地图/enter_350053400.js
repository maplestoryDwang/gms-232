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
      cm.getMap().spawnReactorIfNotExist(3500026, 0, 431, -277, 0, "light1");
      cm.getMap().spawnReactorIfNotExist(3500030, 0, 510, -291, 0, "eye");
      cm.getMap().spawnReactorIfNotExist(3500029, 0, 560, -169, 0, "graph");
      cm.getMap().spawnReactorIfNotExist(3500027, 0, 568, -360, 0, "light2");
      cm.getMap().spawnReactorIfNotExist(3500028, 0, 779, -274, 0, "light3");
      cm.updateInfoQuest(33238, "start=0;puzzleNotice=0");
      cm.updateInfoQuest(33239, "start=0");
      cm.setAmbience("Ambience.img/fan", 100, 60);
      cm.updateInfoQuest(33240, "skip6=1;skip8=1;switch=1;skip15=1;act5=350053400");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1540492, "oid=26119323", 1900, -10, 9, 1850, 1950, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=26119323", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=26119323", 'off', -1, 1);
      cm.npc_setForceFlip("oid=26119323", -1);
      cm.getMap().getReactorByName('eye').forceHitReactor(null, 0, 510, -291, 0);
      cm.getMap().getReactorByName("graph").forceHitReactor(null, 0, 560, -169, 0);
      cm.getMap().getReactorByName("light1").forceHitReactor(null, 0, 431, -277, 0);
      cm.getMap().getReactorByName('light2').forceHitReactor(null, 0, 568, -360, 0);
      cm.getMap().getReactorByName("light3").forceHitReactor(null, 0, 779, -274, 0);
      cm.npc_ChangeController(1540493, "oid=26119324", 1475, -10, 9, 1425, 1525, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26119324", "summon", 0, 0);
      cm.npc_setForceFlip("oid=26119324", 1);
      cm.npcMove(1540493, 0, -440, 100);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_SetHideEffect(0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(1540490, "oid=26119737", -429, -40, 3, -479, -379, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=26119737", 'summon', 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
              cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 1000, 1, 0, 20, 0, 4, 1540490, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, -140, -470);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, 280, -800);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, 1350, -840);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1600, -360);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=26119324", "eat_fast", -1, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1360);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/ItemPot.img/2000/eat", 100);
                                cm.setNpcSpecialActionReset("oid=26119324");
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.npcMove(1540493, 225, 100, 1000);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=26119324");
                                    cm.npc_LeaveField("oid=26119324");
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("管道又被抢走了！", 37, 1540490, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("（看来又要我好好表现了。）", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.updateInfoQuest(33240, "skip6=1;skip8=1;switch=1;skip15=1;skip17=1;act5=350053400");
                                          cm.npc_LeaveField("oid=26119737");
                                          cm.npc_LeaveField("oid=26119737");
                                          cm.npc_ChangeController(1540490, "oid=26120353", -370, -10, 8, -420, -320, 0, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=26120353", "summon", 0, 0);
                                          cm.cameraSwitch_CameraSwitchBack();
                                          cm.inGameDirectionEvent_PushMoveInfo(1, 5000, 0, 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else if (status === V++) {
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.npc_LeaveField("oid=26120353");
                                            cm.npc_LeaveField("oid=26120353");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;