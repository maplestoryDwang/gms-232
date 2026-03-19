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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.updateInfoQuest(34836, "052=1");
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 2467, 6);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3001311, "oid=671791", 2270, 65, 146, 2220, 2320, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=671791", "summon", 0, 0);
          cm.npc_ChangeController(3001300, 'oid=671792', 2540, 65, 127, 2490, 2590, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=671792", "summon", 0, 0);
          cm.npc_ChangeController(3001312, "oid=671793", 2730, 65, 128, 2680, 2780, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=671793", "summon", 0, 0);
          cm.inGameDirectionEvent_同时移动镜头和人(1, 1);
          cm.npc_SetForceMove("oid=671791", -1, 500, 170);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#喂，在这边！", 37, 3001311, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#希娜，等等！", 37, 3001354, true, true, 1);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=671791");
                  cm.userSetFieldFloating(940202900, 3, 3, 10);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.userSetFieldFloating(940202900, 0, 0, 0);
                    cm.userSetFieldFloating(940202900, 3, 3, 10);
                    cm.inGameDirectionEvent_AskAnswerTime(900);
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
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 2467, 6);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission4", 100);
                              cm.npc_ChangeController(3001368, "oid=671797", 2230, 79, 144, 2180, 2280, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=671797", "summon", 0, 0);
                              cm.npc_ChangeController(3001368, "oid=671798", 2150, 79, 147, 2100, 2200, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=671798", "summon", 0, 0);
                              cm.npc_ChangeController(3001368, 'oid=671799', 2010, 79, 145, 1960, 2060, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=671799", "summon", 0, 0);
                              cm.npc_ChangeController(3001368, 'oid=671800', 1920, 79, 136, 1870, 1970, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=671800", 'summon', 0, 0);
                              cm.npc_ChangeController(3001368, "oid=671801", 1840, 79, 131, 1790, 1890, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=671801", "summon", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/rhyo_warning", 100);
                                cm.sendNormalTalk_Bottom("#face0#我们被敌人包围了。", 37, 3001300, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#看来我们中计了！", 37, 3001354, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.setAmbience("Ambience.img/electronic", 200, 60);
                                    cm.npc_SetSpecialAction("oid=671792", "tied_pre", 0, 1);
                                    cm.npc_SetSpecialAction('oid=671793', 'tied_pre', 0, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_NormalSpeechBalloon("呃啊！", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3001300, null, cm.getPlayer().getId());
                                      cm.effect_NormalSpeechBalloon("呃啊！", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3001312, null, cm.getPlayer().getId());
                                      cm.npc_SetSpecialAction("oid=671792", 'tied_loop', -1, 1);
                                      cm.npc_SetSpecialAction("oid=671793", "tied_loop", -1, 1);
                                      cm.sendNormalTalk_Bottom("#face3#大家怎么样了！", 37, 3001354, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#哇！这是什么啊！力、力量……", 37, 3001312, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#能量被……截断……了……", 37, 3001300, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.setNpcSpecialActionReset("oid=671792");
                                            cm.setNpcSpecialActionReset('oid=671793');
                                            cm.playSoundEffDirectly("Ambience.img/electronic");
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/rhyo_off", 100);
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/makina_off", 100);
                                            cm.npc_SetSpecialAction("oid=671792", "die", 0, 1);
                                            cm.npc_SetSpecialAction('oid=671793', "die", 0, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=671792", "stand3", -1, 1);
                                              cm.npc_SetSpecialAction('oid=671793', 'stand3', -1, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_LeaveField('oid=671792');
                                                cm.npc_LeaveField("oid=671793");
                                                cm.sendNormalTalk_Bottom("#face3#利奥！玛奇那！！！", 37, 3001354, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission5", 100);
                                                    cm.npc_ChangeController(3001368, "oid=671804", 2420, 79, 148, 2370, 2470, 0, true, 0, false);
                                                    cm.npc_SetSpecialAction('oid=671804', "summon", 0, 0);
                                                    cm.npc_ChangeController(3001368, "oid=671805", 2310, 79, 146, 2260, 2360, 0, true, 0, false);
                                                    cm.npc_SetSpecialAction('oid=671805', 'summon', 0, 0);
                                                    cm.sendNormalTalk_Bottom("#face3#可恶，没办法了。", 37, 3001354, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_LeaveField("oid=671804");
                                                      cm.npc_LeaveField("oid=671805");
                                                      cm.npc_LeaveField("oid=671797");
                                                      cm.npc_LeaveField('oid=671798');
                                                      cm.npc_LeaveField('oid=671799');
                                                      cm.npc_LeaveField("oid=671800");
                                                      cm.npc_LeaveField("oid=671801");
                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                    } else if (status === V++) {
                                                      cm.dispose();
                                                      cm.warp(940202044, 0, false);
                                                      cm.setStandAloneMode(false);
                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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