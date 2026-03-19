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
      cm.getMap().spawnReactorIfNotExist(3500030, 0, 4, -285, 0, 'eye');
      cm.getMap().spawnReactorIfNotExist(3500032, 0, 437, -287, 0, "wall");
      cm.getMap().spawnReactorIfNotExist(3500026, 0, -72, -268, 0, "leftL");
      cm.getMap().spawnReactorIfNotExist(3500029, 0, 57, -162, 0, "graph");
      cm.npc_ChangeController(1540492, "oid=284713242", 360, 0, 5, 310, 410, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=284713242", "summon", 0, 0);
      cm.npc_ChangeController(1540492, "oid=284713243", 610, 0, 1, 560, 660, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=284713243", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=284713242", 'on', -1, 1);
      cm.npc_SetSpecialAction("oid=284713243", 'on', -1, 1);
      cm.npc_setForceFlip("oid=284713242", -1);
      cm.npc_setForceFlip("oid=284713243", -1);
      cm.getMap().getReactorByName('eye').forceHitReactor(null, 1, 4, -285, 0);
      cm.getMap().getReactorByName("graph").forceHitReactor(null, 3, 57, -162, 0);
      cm.getMap().getReactorByName("leftL").forceHitReactor(null, 1, -72, -268, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1540490, "oid=284713244", 200, 0, 5, 150, 250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=284713244", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=284713242", "pushed", -1, 1);
        cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.getMap().getReactorByName("wall").forceHitReactor(null, 1, 437, -287, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 100, 400, 0);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=284713244", 1, 380, 150);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=284713242", 'on', -1, 1);
                cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.getMap().getReactorByName('wall').forceHitReactor(null, 0, 437, -287, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 70);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('……我相信你', 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(650);
                        cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 700, 0, 0, 0, 0, 4, 1540490, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(650);
                          cm.effect_NormalSpeechBalloon("....", 1, 0, 0, 700, 0, 0, 0, 0, 4, 1540490, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(650);
                            cm.effect_NormalSpeechBalloon(".....", 1, 0, 0, 700, 0, 0, 0, 0, 4, 1540490, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                              cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 700, 0, 0, 0, 0, 4, 1540490, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('奥尔卡？', 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=284713244", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=284713243", 'pushed', -1, 1);
                                      cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.getMap().getReactorByName("wall").forceHitReactor(null, 1, 437, -287, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 190);
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(400);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=284713243", 'on', -1, 1);
                                              cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.getMap().getReactorByName('wall').forceHitReactor(null, 0, 437, -287, 0);
                                                cm.sendNormalTalk_Bottom("怎么了？快走吧。\r\n前面带路。", 37, 1540490, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=284713244", 1);
                                                      cm.npc_SetForceMove("oid=284713244", 1, 500, 200);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else if (status === V++) {
                                                        cm.dispose();
                                                        cm.warp(350053004, 0, true);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.npc_LeaveField("oid=284713242");
                                                        cm.npc_LeaveField("oid=284713242");
                                                        cm.npc_LeaveField("oid=284713243");
                                                        cm.npc_LeaveField("oid=284713243");
                                                        cm.npc_LeaveField("oid=284713244");
                                                        cm.npc_LeaveField("oid=284713244");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;