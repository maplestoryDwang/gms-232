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
      cm.getMap().spawnReactorIfNotExist(3500032, 0, 1311, -286, 0, "wall");
      cm.getMap().spawnReactorIfNotExist(3500030, 0, 510, -291, 0, "eye");
      cm.getMap().spawnReactorIfNotExist(3500026, 0, 431, -277, 0, "light1");
      cm.getMap().spawnReactorIfNotExist(3500027, 0, 568, -360, 0, "light2");
      cm.getMap().spawnReactorIfNotExist(3500028, 0, 779, -274, 0, "light3");
      cm.getMap().spawnReactorIfNotExist(3500029, 0, 560, -169, 0, "graph");
      cm.setAmbience("Ambience.img/fan", 100, 60);
      cm.updateInfoQuest(33240, "skip6=1;skip8=1;switch=1;act5=350053350");
      cm.npc_ChangeController(1540703, "oid=26115587", 1170, -10, 21, 1120, 1220, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=26115587", "summon", 0, 0);
      cm.npc_ChangeController(1540703, "oid=26115588", 1600, -10, 22, 1550, 1650, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=26115588", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=26115587", 'on', -1, 1);
      cm.npc_SetSpecialAction("oid=26115588", 'on', -1, 1);
      cm.npc_setForceFlip("oid=26115587", -1);
      cm.npc_setForceFlip("oid=26115588", -1);
      cm.npc_ChangeController(1540494, "oid=26115589", 304, -547, 18, 254, 354, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26115589", "summon", 0, 0);
      cm.npc_ChangeController(1540494, "oid=26115590", 586, -465, 17, 536, 636, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26115590", "summon", 0, 0);
      cm.npc_ChangeController(1540494, "oid=26115591", 867, -547, 19, 817, 917, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26115591", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=26115589", '0', -1, 1);
      cm.npc_SetSpecialAction("oid=26115590", '1', -1, 1);
      cm.npc_SetSpecialAction("oid=26115591", '0', -1, 1);
      cm.npc_setForceFlip("oid=26115589", -1);
      cm.npc_setForceFlip("oid=26115590", -1);
      cm.npc_setForceFlip("oid=26115591", -1);
      cm.getMap().getReactorByName('eye').forceHitReactor(null, 1, 510, -291, 0);
      cm.getMap().getReactorByName('graph').forceHitReactor(null, 3, 560, -169, 0);
      cm.getMap().getReactorByName("light1").forceHitReactor(null, 1, 431, -277, 0);
      cm.getMap().getReactorByName("light2").forceHitReactor(null, 1, 568, -360, 0);
      cm.getMap().getReactorByName("light3").forceHitReactor(null, 1, 779, -274, 0);
      cm.npc_ChangeController(1540490, "oid=26115592", 1250, -5, 22, 1200, 1300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26115592", "summon", 0, 0);
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
            cm.npc_SetSpecialAction("oid=26115587", "pushed", -1, 1);
            cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.getMap().getReactorByName("wall").forceHitReactor(null, 1, 1311, -286, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#很好，成功了！", 37, 1540490, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 100, 1300, 0);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=26115592", 1, 320, 150);
                    cm.inGameDirectionEvent_AskAnswerTime(1800);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=26115587", 'on', -1, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.getMap().getReactorByName("wall").forceHitReactor(null, 0, 1311, -286, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 70);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=26115592", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=26115588", 'pushed', -1, 1);
                              cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.getMap().getReactorByName("wall").forceHitReactor(null, 1, 1311, -286, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 330);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("（没想到这么顺利就打开了……？）", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(400);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=26115588", 'on', -1, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.getMap().getReactorByName('wall').forceHitReactor(null, 0, 1311, -286, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("你在干嘛？前面带路。", 37, 1540490, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                                cm.npc_LeaveField("oid=26115589");
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=26115592", 1);
                                                  cm.npc_SetForceMove("oid=26115592", 1, 500, 200);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else if (status === V++) {
                                                    cm.dispose();
                                                    cm.warp(350053005, 0, true);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.npc_LeaveField("oid=26115587");
                                                    cm.npc_LeaveField("oid=26115587");
                                                    cm.npc_LeaveField("oid=26115588");
                                                    cm.npc_LeaveField("oid=26115588");
                                                    cm.npc_LeaveField("oid=26115589");
                                                    cm.npc_LeaveField("oid=26115590");
                                                    cm.npc_LeaveField("oid=26115590");
                                                    cm.npc_LeaveField("oid=26115591");
                                                    cm.npc_LeaveField("oid=26115591");
                                                    cm.npc_LeaveField("oid=26115592");
                                                    cm.npc_LeaveField("oid=26115592");
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