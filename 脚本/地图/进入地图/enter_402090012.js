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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3001512, "oid=144263199", -700, 20, 6, -750, -650, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=144263199", 'summon', 0, 0);
      cm.npc_ChangeController(3001513, "oid=144263200", -640, 20, 1, -690, -590, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=144263200", "summon", 0, 0);
      cm.npc_ChangeController(3001510, "oid=144263201", -470, 20, 1, -520, -420, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=144263201", "summon", 0, 0);
      cm.npc_ChangeController(3001509, "oid=144263202", -800, 20, 6, -850, -750, 0, true, 1000, false);
      cm.npc_SetSpecialAction("oid=144263202", "summon", 0, 0);
      cm.npc_SetForceMove("oid=144263201", 1, 1500, 200);
      cm.npc_SetForceMove("oid=144263202", 1, 1500, 200);
      cm.npc_SetForceMove("oid=144263199", 1, 1500, 200);
      cm.npc_SetForceMove("oid=144263200", 1, 1500, 200);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 1500);
      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue('记忆越鲜明，', 0);
        cm.effect_Voice("Voice4.img/Ark/Mono/D/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/1', 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("那段记忆中包含的感情就越真切。", 0);
          cm.effect_Voice("Voice4.img/Ark/Mono/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("\r\n坚定信仰发生动摇时的背叛感，", 0);
            cm.effect_Voice("Voice4.img/Ark/Mono/D/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/3', 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("对日复一日发生的残酷之事的恐惧，", 0);
              cm.effect_Voice("Voice4.img/Ark/Mono/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("以及什么事情都做不了的无力感，", 0);
                cm.effect_Voice("Voice4.img/Ark/Mono/D/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/5', 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n在我心中盘旋……", 1);
                  cm.effect_Voice("Voice4.img/Ark/Mono/D/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/6', 100);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(5000);
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
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 600, 120);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(600);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_同时移动镜头和人(1, 30);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, 800, 120);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=144263201", -1);
                                    cm.npc_setForceFlip("oid=144263201", 0);
                                    cm.npc_SetForceMove("oid=144263201", -1, 30, 200);
                                    cm.inGameDirectionEvent_AskAnswerTime(600);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#……亚克，你的状态还是不太好吗，叽勒？", 37, 3001510, 0, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#……不，不，走吧。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, 900, 120);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 130);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else if (status === V++) {
                                                    cm.setStandAloneMode(false);
                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                    cm.warp(402000648, 0, false);
                                                    cm.eventSKill(0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.npc_LeaveField("oid=144263199");
                                                    cm.npc_LeaveField("oid=144263200");
                                                    cm.npc_LeaveField("oid=144263201");
                                                    cm.npc_LeaveField("oid=144263202");
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