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
      cm.npc_ChangeController(1540671, "oid=36558", 2070, -119, 4, 2020, 2090, 0, false, 0, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setAmbience("Ambience.img/gravity", 150, 60);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("Ambience.img/flyingdeck_fast", 100, 60);
        cm.inGameDirectionEvent_AskAnswerTime(900);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
          cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(600);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#给，请收下，这是联盟特制信号弹。\r\n无论是谁，只要先到达黑色天堂，就请放出信号弹，传递信号。", 37, 1540452, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(900);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                  cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
                    cm.inGameDirectionEvent_PushScaleInfo(4500, 3000, 1500, 1631, -81);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3001);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("现在结界出现了漏洞，\r\n只有现在才能从上面侵入黑色天堂。", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("必须把这件事告诉联盟成员。", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.playSoundEffDirectly("Ambience.img/flyingdeck_fast");
                              cm.npc_ChangeController(1540672, "oid=290710941", 1618, -131, 6, 1568, 1668, 1, false, 0, false);
                              cm.npc_SetSpecialAction("oid=290710941", 'summon', 0, 0);
                              cm.npc_SetSpecialAction("oid=290710941", "appear", 3500, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                              cm.effect_PlayMusic("SoundEff.img/blackHeaven/flare_appear");
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=290710941", "prepare", -1, 1);
                                cm.playSoundEffDirectly("Ambience.img/gravity");
                                cm.setAmbience("Ambience.img/flare_ready", 100, 60);
                                cm.inGameDirectionEvent_AskAnswerTime(900);
                              } else {
                                if (status === V++) {
                                  cm.setAmbience("Ambience.img/secretmissionbase", 200, 60);
                                  cm.sendNormalTalk_Bottom("就算使用信号弹，联盟成员能按时到达吗？\r\n这是危险的赌博。", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#我依然相信你。", 37, 1540450, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#请和我在一起。直到在这场战争中取得胜利！", 37, 1540450, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(900);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                              cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("……还是相信同伴们一次吧。", 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.playSoundEffDirectly("Ambience.img/secretmissionbase");
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 1500, 1648, -131);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_QTE(7);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.playSoundEffDirectly("Ambience.img/flare_ready");
                                                        cm.inGameDirectionEvent_AskAnswerTime(900);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_OneTimeAction(9, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(600);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier1", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.setNpcSpecialActionReset("oid=290710941");
                                                              cm.npc_SetSpecialAction("oid=290710941", "shoot", 3500, 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(900);
                                                              cm.effect_PlayMusic("SoundEff.img/blackHeaven/signal_m");
                                                              cm.effect_PlayMusic("SoundEff.img/blackHeaven/flare_fire");
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(6000, 1000, 10000, 1618, -3131);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.effect_PlayMusic("SoundEff.img/blackHeaven/signal_m");
                                                                  cm.npc_ChangeController(1540673, "oid=290724630", 1618, -131, 6, 1568, 1668, 1, false, 0, false);
                                                                  cm.npc_SetSpecialAction("oid=290724630", "summon", 0, 0);
                                                                  cm.setNpcSpecialActionReset("oid=290710941");
                                                                  cm.npc_SetSpecialAction("oid=290710941", "last", -1, 1);
                                                                  cm.npcMove(1540673, 0, -3000, 12000);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(9000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                        } else if (status === V++) {
                                                                          cm.dispose();
                                                                          cm.warp(350042601, 0, true);
                                                                          cm.npc_LeaveField("oid=290710941");
                                                                          cm.npc_LeaveField("oid=290710941");
                                                                          cm.npc_LeaveField("oid=290724630");
                                                                          cm.npc_LeaveField("oid=290724630");
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