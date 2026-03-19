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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400091, "oid=19789151", -500, 20, 15, -550, -450, 0, true, false);
      cm.npc_SetSpecialAction("oid=19789151", 'summon', 0, 0);
      cm.npc_ChangeController(9400092, "oid=19789152", -650, 20, 9, -700, -600, 0, true, false);
      cm.npc_SetSpecialAction("oid=19789152", "summon", 0, 0);
      cm.npc_ChangeController(9400093, "oid=19789153", -650, 20, 9, -700, -600, 0, true, false);
      cm.npc_SetSpecialAction("oid=19789153", "summon", 0, 0);
      cm.npc_ChangeController(9400094, "oid=19789154", -650, 20, 9, -700, -600, 0, true, false);
      cm.npc_SetSpecialAction("oid=19789154", "summon", 0, 0);
      cm.npc_ChangeController(9400095, "oid=19789155", -650, 20, 9, -700, -600, 0, true, false);
      cm.npc_SetSpecialAction("oid=19789155", "summon", 0, 0);
      cm.npc_SetForceMove("oid=19789151", 1, 600, 60);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(12000);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=19789152", 1, 500, 60);
            cm.inGameDirectionEvent_AskAnswerTime(15000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=19789153", 1, 390, 60);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.fieldEffect_ProcessOnOffLayer('00', "Map/EffectPL.img/Ending/ending5", 0, 1500, 0, -60, 14, 4, 0);
                cm.inGameDirectionEvent_AskAnswerTime(5000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=19789154", 1, 300, 60);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('00', "Map/EffectPL.img/Ending/ending6", 0, 1500, 0, -60, 14, 4, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=19789155", 1, 200, 60);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer('00', "Map/EffectPL.img/Ending/ending3", 0, 1500, 0, -60, 14, 4, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('00', "Map/EffectPL.img/Ending/ending4", 0, 1500, 0, -60, 14, 4, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('00', "Map/EffectPL.img/Ending/ending1", 0, 1500, 0, -60, 14, 4, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('00', "Map/EffectPL.img/Ending/ending2", 0, 1500, 0, -60, 14, 4, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer('0', "Map/EffectPL.img/MDIllust/illust7", 0, 1500, 0, 0, 14, 4, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(4200);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 10000, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                      } else if (status === V++) {
                                                        cm.forceCompleteQuest(59740);
                                                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                        cm.updateInfoQuest(59764, "1=1;2=1;3=1;5=1;6=1;7=1;8=1");
                                                        cm.setStandAloneMode(false);
                                                        cm.eventSKill(0);
                                                        cm.warp(867111045, 0, true);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                        cm.npc_LeaveField("oid=19789151");
                                                        cm.npc_LeaveField("oid=19789152");
                                                        cm.npc_LeaveField("oid=19789153");
                                                        cm.npc_LeaveField("oid=19789154");
                                                        cm.npc_LeaveField("oid=19789155");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;