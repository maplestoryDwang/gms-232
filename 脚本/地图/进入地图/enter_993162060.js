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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001956, "oid=11588014", 230, -30, 5, 180, 280, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=11588014", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -28, -10);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(4);
        cm.emotion(1, 3000);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face7#维罗妮卡……你把英灵之门……", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
              cm.effect_Voice("Voice2.img/adele/present/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/1', 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#哎呀，你怎么又回来了？", 36, 3001956, true, true, 1);
                cm.effect_Voice("Voice2.img/adele/present/K/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/2', 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face7#……维罗妮卡！", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                  cm.effect_Voice("Voice2.img/adele/present/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_OneTimeAction(5, 500);
                    cm.npc_SetSpecialAction("oid=11588014", "special1", 0, 0);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/urus/rescued", 100);
                    cm.emotion(1, 3000);
                    cm.inGameDirectionEvent_OneTimeAction(4, 3000);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/urus/rescueFail", 100);
                      cm.setNpcSpecialActionReset("oid=11588014");
                      cm.npc_SetSpecialAction("oid=11588014", "special3", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BossDemian/incStigma", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#我说过，你现在还不是我的对手。", 36, 3001956, false, true, 1);
                          cm.effect_Voice("Voice2.img/adele/present/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#不过，你能活着回来，是挺了不起的。", 36, 3001956, true, true, 1);
                            cm.effect_Voice("Voice2.img/adele/present/K/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/5', 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#事情办完了，我回去了。", 36, 3001956, true, true, 1);
                              cm.effect_Voice("Voice2.img/adele/present/K/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/6', 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#我们下回见，朋友。", 36, 3001956, true, true, 1);
                                cm.effect_Voice("Voice2.img/adele/present/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
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
                                          cm.npc_ChangeController(3001952, "oid=11589023", -494, -23, 4, -544, -444, 0, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=11589023", "summon", 0, 0);
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -417, -10);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=11589023", 1, 50, 120);
                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face10#阿黛尔！", 36, 3001952, false, true, 1);
                                              cm.effect_Voice("Voice2.img/adele/present/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/8', 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#你是上回那个小绅士？", 36, 3001956, true, true, 1);
                                                cm.effect_Voice("Voice2.img/adele/present/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#阿黛尔就拜托给你啦。", 36, 3001956, true, true, 1);
                                                  cm.effect_Voice("Voice2.img/adele/present/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#你……你把阿黛尔怎么了！？", 36, 3001952, true, true, 1);
                                                    cm.effect_Voice("Voice2.img/adele/present/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#我也没做什么，只是……", 36, 3001956, true, true, 1);
                                                      cm.effect_Voice("Voice2.img/adele/present/K/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/12", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#提取了一点样本而已？", 36, 3001956, true, true, 1);
                                                        cm.effect_Voice("Voice2.img/adele/present/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/13', 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#你站住，混蛋！", 36, 3001952, false, true, 1);
                                                              cm.effect_Voice("Voice2.img/adele/present/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/14", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#我不会放过你的！", 36, 3001952, true, true, 1);
                                                                cm.effect_Voice("Voice2.img/adele/present/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
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
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                          } else if (status === V++) {
                                                                            cm.warp(993162061, 0, false);
                                                                            cm.setStandAloneMode(false);
                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.npc_LeaveField("oid=11588014");
                                                                            cm.npc_LeaveField("oid=11589023");
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