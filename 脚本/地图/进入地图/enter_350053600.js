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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.getMap().spawnReactorIfNotExist(3500030, 0, 510, -291, 0, "eye");
      cm.getMap().spawnReactorIfNotExist(3500029, 0, 560, -169, 0, 'graph');
      cm.getMap().spawnReactorIfNotExist(3500027, 0, 568, -360, 0, 'light2');
      cm.getMap().spawnReactorIfNotExist(3500028, 0, 779, -274, 0, "light3");
      cm.getMap().spawnReactorIfNotExist(3500032, 0, 2075, -282, 0, "wall");
      cm.getMap().spawnReactorIfNotExist(3500025, 0, 1503, -499, 0, "box4");
      cm.updateInfoQuest(33240, "skip6=1;skip8=1;switch=1;skip15=1;skip17=1;act5=350053601");
      cm.setAmbience("Ambience.img/fan", 100, 60);
      cm.npc_ChangeController(1540703, "oid=26133487", 1950, -10, 9, 1900, 2000, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=26133487", "summon", 0, 0);
      cm.npc_ChangeController(1540703, "oid=26133488", 2320, -10, 10, 2270, 2370, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=26133488", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=26133487", 'on', -1, 1);
      cm.npc_SetSpecialAction("oid=26133488", 'on', -1, 1);
      cm.npc_setForceFlip("oid=26133487", -1);
      cm.npc_setForceFlip("oid=26133488", -1);
      cm.getMap().getReactorByName("eye").forceHitReactor(null, 1, 510, -291, 0);
      cm.getMap().getReactorByName("graph").forceHitReactor(null, 3, 560, -169, 0);
      cm.getMap().getReactorByName("light2").forceHitReactor(null, 1, 568, -360, 0);
      cm.getMap().getReactorByName('light3').forceHitReactor(null, 1, 779, -274, 0);
      cm.npc_ChangeController(1540490, "oid=26133489", 2000, -5, 9, 1950, 2050, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26133489", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=26133487", "pushed", -1, 1);
            cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.getMap().getReactorByName("wall").forceHitReactor(null, 1, 2075, -282, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#很好。\r\n你，给我好好地按着。", 37, 1540490, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 100, 2000, 0);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=26133489", 1, 320, 150);
                    cm.inGameDirectionEvent_AskAnswerTime(1800);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=26133487", 'on', -1, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.getMap().getReactorByName("wall").forceHitReactor(null, 0, 2075, -282, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 70);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=26133489", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=26133488", "pushed", -1, 1);
                              cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.getMap().getReactorByName("wall").forceHitReactor(null, 1, 2075, -282, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 330);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("你现在能够信任我了吧？", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("你在看什么？前面带路。", 37, 1540490, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(400);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=26133488", 'on', -1, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.getMap().getReactorByName('wall').forceHitReactor(null, 0, 2075, -282, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=26133489", 1);
                                                  cm.npc_SetForceMove("oid=26133489", 1, 500, 200);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else if (status === V++) {
                                                    cm.dispose();
                                                    cm.warp(350053006, 0, true);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.npc_LeaveField("oid=26133487");
                                                    cm.npc_LeaveField("oid=26133487");
                                                    cm.npc_LeaveField("oid=26133488");
                                                    cm.npc_LeaveField("oid=26133488");
                                                    cm.npc_LeaveField("oid=26133489");
                                                    cm.npc_LeaveField("oid=26133489");
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