var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setAmbience("Ambience.img/night", 200, 60);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -2400, -280);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 1);
        cm.npc_ChangeController(3003651, "oid=2200987", -1959, -328, 57, -2009, -1909, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2200987", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#呼……敌人撤退了。我们快去坐船吧。", 37, 3003651, false, true);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=2200987", -1, 120, 120);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.npc_LeaveField("oid=2200987");
                    cm.npc_LeaveField("oid=2200987");
                    cm.npc_ChangeController(3003651, "oid=2200989", -2206, -490, 39, -2256, -2156, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2200989", "summon", 0, 0);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -2400, -280);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#来，请上船。坐上船之后，应该很快就能到达基地。", 37, 3003651, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1000, 1500, -2600, -280);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                          } else {
                            if (status === V++) {
                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -2479, -218);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -2600, -280);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.userSetFieldFloating(993060018, 0, 30, 1000);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#好了，出发。", 37, 3003651, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/ship2", 100);
                                            cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 1000, 2500, -3000, -580);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else if (status === V++) {
                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                      cm.npc_LeaveField("oid=2200989");
                                                      cm.npc_LeaveField("oid=2200989");
                                                      cm.dispose();
                                                      cm.warp(993060019, 0, false);
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