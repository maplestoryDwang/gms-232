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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 712, -54);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3004460, "oid=507089", 642, -275, 33, 592, 692, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=507089", "summon", 0, 0);
        cm.npc_ChangeController(3004461, 'oid=507090', 902, -284, 34, 852, 952, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=507090", 'summon', 0, 0);
        cm.npc_ChangeController(3004460, "oid=507091", 162, -249, 19, 112, 212, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=507091", "summon", 0, 0);
        cm.npc_ChangeController(3004460, "oid=507092", 816, -495, 36, 766, 866, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=507092", "summon", 0, 0);
        cm.npc_ChangeController(3004461, "oid=507093", 895, -753, 40, 845, 945, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=507093", 'summon', 0, 0);
        cm.npc_ChangeController(3004433, "oid=507094", 520, -76, 13, 470, 570, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=507094", "summon", 0, 0);
        cm.npc_ChangeController(3004431, "oid=507095", 859, -66, 14, 809, 909, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=507095", "summon", 0, 0);
        cm.npc_ChangeController(3004437, 'oid=507096', 938, -36, 14, 888, 988, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=507096", 'summon', 0, 0);
        cm.npc_ChangeController(3004436, "oid=507097", 730, -36, 13, 680, 780, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=507097", "summon", 0, 0);
        cm.npc_ChangeController(3004461, "oid=507098", 859, -1023, 1, 809, 909, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=507098", "summon", 0, 0);
        cm.npc_ChangeController(3004461, "oid=507099", 759, -1021, 4, 709, 809, 0, false, 0, false);
        cm.npc_SetSpecialAction('oid=507099', "summon", 0, 0);
        cm.npc_ChangeController(3004461, "oid=507100", 659, -1021, 7, 609, 709, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=507100", 'summon', 0, 0);
        cm.npc_ChangeController(3004461, 'oid=507101', 559, -1021, 6, 509, 609, 0, false, 0, false);
        cm.npc_SetSpecialAction('oid=507101', "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 712, -830);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#切，得想办法解决悬崖上的那些弓箭手……", 37, 3004433, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=507098", "attack1", -1, 1);
                    cm.npc_SetSpecialAction("oid=507099", "attack1", -1, 1);
                    cm.npc_SetSpecialAction('oid=507100', "attack1", -1, 1);
                    cm.npc_SetSpecialAction("oid=507101", "attack1", -1, 1);
                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645112/Attack1", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645120/Die", 100);
                      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                      cm.npc_SetSpecialAction("oid=507098", "die1", 1, 1);
                      cm.npc_SetSpecialAction("oid=507099", 'die1', 1, 1);
                      cm.npc_SetSpecialAction("oid=507100", "die1", 1, 1);
                      cm.npc_SetSpecialAction("oid=507101", "die1", 1, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=507098");
                        cm.npc_LeaveField("oid=507099");
                        cm.npc_LeaveField('oid=507100');
                        cm.npc_LeaveField("oid=507101");
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(3004437, "oid=507467", 588, -1055, 6, 538, 638, 1, true, 1000, false);
                          cm.npc_SetSpecialAction("oid=507467", 'summon', 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(700);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(3004437, 'oid=507493', 812, -1055, 3, 762, 862, 0, true, 1000, false);
                            cm.npc_SetSpecialAction('oid=507493', "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(3004430, "oid=507496", 705, -1055, 4, 655, 755, 0, true, 1500, false);
                              cm.npc_SetSpecialAction("oid=507496", "summon", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#塞伦卿！", 37, 3004433, false, true);
                                cm.effect_Voice("Voice5.img/CH2/Carlyle/5", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#守护者大人，敌人已经冲了过来。", 37, 3004437, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#王子殿下，上面就交给我们吧。请您快回城去。", 37, 3004430, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.Npc_Fadeout('oid=507467', 0, 500);
                                          cm.Npc_Fadeout('oid=507493', 0, 500);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.Npc_Fadeout("oid=507496", 0, 500);
                                            cm.inGameDirectionEvent_AskAnswerTime(800);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, 712, -54);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#那人是谁？", 37, 3004431, false, true);
                                                  cm.effect_Voice("Voice5.img/CH2/Idea/8", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#她是剑之守护者。", 37, 3004433, true, true);
                                                    cm.effect_Voice("Voice5.img/CH2/Carlyle/6", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#剑之守护者？不是守护之剑？", 37, 3004431, true, true);
                                                      cm.effect_Voice("Voice5.img/CH2/Idea/9", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#就像剑守护人一样，也有人守护剑的情况。", 37, 3004433, true, true);
                                                        cm.effect_Voice("Voice5.img/CH2/Carlyle/7", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#我们走吧。", 37, 3004433, true, true);
                                                          cm.effect_Voice("Voice5.img/CH2/Carlyle/8", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else if (status === V++) {
                                                              cm.warp(410000560, 0, false);
                                                              cm.eventSKill(0);
                                                              cm.setInGameDirectionMode(false, true, false);
                                                              cm.setStandAloneMode(false);
                                                              cm.npc_LeaveField("oid=507089");
                                                              cm.npc_LeaveField("oid=507089");
                                                              cm.npc_LeaveField("oid=507090");
                                                              cm.npc_LeaveField("oid=507090");
                                                              cm.npc_LeaveField("oid=507091");
                                                              cm.npc_LeaveField('oid=507091');
                                                              cm.npc_LeaveField("oid=507092");
                                                              cm.npc_LeaveField("oid=507092");
                                                              cm.npc_LeaveField("oid=507093");
                                                              cm.npc_LeaveField("oid=507094");
                                                              cm.npc_LeaveField("oid=507094");
                                                              cm.npc_LeaveField('oid=507095');
                                                              cm.npc_LeaveField("oid=507095");
                                                              cm.npc_LeaveField('oid=507096');
                                                              cm.npc_LeaveField("oid=507096");
                                                              cm.npc_LeaveField("oid=507097");
                                                              cm.npc_LeaveField('oid=507097');
                                                              cm.npc_LeaveField('oid=507467');
                                                              cm.npc_LeaveField("oid=507493");
                                                              cm.npc_LeaveField('oid=507496');
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