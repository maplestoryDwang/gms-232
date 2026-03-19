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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.setAmbience("SoundEff.img/kain/HeavyRain", 100, 60);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 1593, -2);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/sword4", 100);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('#face1#唔……', 36, 3004904, false, true, 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#（不可……思议……）", 36, 3004904, false, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 800, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(3004903, 'oid=568171', 751, 37, 2, 701, 801, 0, true, 0, false);
                      cm.npc_SetSpecialAction("oid=568171", "summon", 0, 0);
                      cm.inGameDirectionEvent_同时移动镜头和人(1, 10, 0);
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(3500, 0, 1500, 3500, 1525, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(5500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#（居然这么多……！）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#该隐……你来迟了。", 36, 3004903, false, true, 1);
                                      cm.effect_Voice("Voice6.img/kain/26/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 800, 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#快进来，小心感冒。", 36, 3004903, false, true, 1);
                                                cm.effect_Voice("Voice6.img/kain/26/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=568171", -1, 300, 80);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.Npc_Fadeout('oid=568171', 0, 1000);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else if (status === V++) {
                                                        cm.forceCompleteQuest(39426);
                                                        cm.gainExp(8974);
                                                        cm.updateInfoQuest(39400, "70=h1;51=h0;52=h0;53=h0;73=h0;54=h0;74=h0;56=h0;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h0;66=h0;85=h0;67=h1;68=h0;69=h0");
                                                        cm.updateInfoQuest(39400, "70=h1;51=h0;71=h1;52=h0;53=h0;73=h0;54=h0;74=h0;56=h0;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h0;66=h0;85=h0;67=h1;68=h0;69=h0");
                                                        cm.npc_LeaveField("oid=568171");
                                                        cm.dispose();
                                                        cm.warp(410000415, 0, true);
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