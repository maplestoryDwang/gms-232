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
      cm.npc_ChangeController(3004912, "oid=363562", 858, -994, 76, 808, 908, 1, false, 0, false);
      cm.npc_ChangeController(3004913, "oid=363563", 984, -1127, 86, 934, 1034, 1, false, 0, false);
      cm.npc_ChangeController(3004913, "oid=363564", 803, -1062, 85, 753, 853, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004917, "oid=567010", 691, -900, 77, 641, 741, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=567010", "summon", 0, 0);
      cm.npc_ChangeController(3004908, 'oid=567011', 559, -900, 77, 509, 609, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=567011", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=567011", "die", -1, 1);
      cm.npc_SetSpecialAction("oid=567010", "die", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -30, -715);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3004904, "oid=567012", 21, -750, 75, -29, 71, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=567012", "summon", 0, 0);
        cm.npc_ChangeController(3004910, "oid=567013", -60, -750, 75, -110, -10, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=567013", "summon", 0, 0);
        cm.npc_ChangeController(3004911, "oid=567014", -125, -750, 75, -175, -75, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=567014", 'summon', 0, 0);
        cm.npc_ChangeController(3004912, 'oid=567015', 830, -900, 77, 780, 880, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=567015", "summon", 0, 0);
        cm.npc_ChangeController(3004912, "oid=567016", 900, -900, 77, 850, 950, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=567016", "summon", 0, 0);
        cm.npc_ChangeController(3004913, "oid=567017", 970, -900, 77, 920, 1020, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=567017", "summon", 0, 0);
        cm.npc_ChangeController(3004913, 'oid=567018', -305, -750, 73, -355, -255, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=567018", "summon", 0, 0);
        cm.npc_ChangeController(3004913, "oid=567019", -385, -750, 73, -435, -335, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=567019", "summon", 0, 0);
        cm.npc_ChangeController(3004915, 'oid=567020', 1187, -940, 77, 1137, 1237, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=567020", "summon", 0, 0);
        cm.npc_ChangeController(3004914, "oid=567021", 1240, -940, 77, 1190, 1290, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=567021', "summon", 0, 0);
        cm.npc_SetSpecialAction('oid=567020', "die", -1, 1);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 704, -893);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#一直在……玩弄我们。", 36, 3004912, false, true, 1);
                cm.effect_Voice("Voice6.img/kain/20/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#一直在玩弄我们……", 36, 3004912, false, true, 1);
                    cm.effect_Voice("Voice6.img/kain/20/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#一直在……玩弄我们！！！", 36, 3004913, false, true, 1);
                        cm.effect_Voice("Voice6.img/kain/20/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(700, 0, 1500, 700, -30, -715);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#那卷胶片里……也有我的记忆。", 36, 3004910, false, true, 1);
                                cm.effect_Voice("Voice6.img/kain/20/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#这怎么可能……就连唯一剩下的记忆……就连那个唯一也是被操控的？", 36, 3004910, true, true, 1);
                                  cm.effect_Voice("Voice6.img/kain/20/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('#face2#……', 36, 3004904, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#提拉格，往后该如何是好？", 36, 3004911, true, true, 1);
                                      cm.effect_Voice("Voice6.img/kain/20/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip('oid=567012', 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#回到据点。", 36, 3004904, false, true, 1);
                                            cm.effect_Voice("Voice6.img/kain/20/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#你打算怎么办？", 36, 3004910, true, true, 1);
                                              cm.effect_Voice("Voice6.img/kain/20/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/8', 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#得让那个该死的丫头付出代价。", 36, 3004904, false, true, 1);
                                                  cm.effect_Voice("Voice6.img/kain/20/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.Npc_Fadeout("oid=567012", 0, 1000);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.Npc_Fadeout("oid=567013", 0, 1000);
                                                      cm.inGameDirectionEvent_AskAnswerTime(150);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.Npc_Fadeout("oid=567014", 0, 1000);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.Npc_Fadeout("oid=567018", 0, 1000);
                                                          cm.Npc_Fadeout("oid=567019", 0, 1000);
                                                          cm.Npc_Fadeout("oid=567015", 0, 1000);
                                                          cm.Npc_Fadeout("oid=567016", 0, 1000);
                                                          cm.Npc_Fadeout("oid=567017", 0, 1000);
                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face4#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#该隐！！", 36, 3004914, false, true, 1);
                                                                cm.effect_Voice("Voice6.img/kain/20/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/10", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1500, 500, 1240, -856);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#该隐……", 36, 3004914, false, true, 1);
                                                                      cm.effect_Voice("Voice6.img/kain/20/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#罗伊斯……罗伊斯就要死了……求你了……", 36, 3004914, true, true, 1);
                                                                        cm.effect_Voice("Voice6.img/kain/20/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/12', 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else if (status === V++) {
                                                                            cm.forceCompleteQuest(39420);
                                                                            cm.gainExp(19433);
                                                                            cm.updateInfoQuest(39400, "51=h0;52=h0;53=h0;73=h0;54=h0;74=h0;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h0;66=h0;85=h0");
                                                                            cm.npc_LeaveField('oid=567010');
                                                                            cm.npc_LeaveField("oid=567011");
                                                                            cm.npc_LeaveField("oid=567012");
                                                                            cm.npc_LeaveField("oid=567013");
                                                                            cm.npc_LeaveField("oid=567014");
                                                                            cm.npc_LeaveField("oid=567015");
                                                                            cm.npc_LeaveField("oid=567016");
                                                                            cm.npc_LeaveField('oid=567017');
                                                                            cm.npc_LeaveField('oid=567018');
                                                                            cm.npc_LeaveField("oid=567019");
                                                                            cm.npc_LeaveField("oid=567020");
                                                                            cm.npc_LeaveField("oid=567021");
                                                                            cm.dispose();
                                                                            cm.warp(410000419, 0, true);
                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.setStandAloneMode(false);
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