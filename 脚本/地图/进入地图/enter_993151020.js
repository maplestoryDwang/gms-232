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
      cm.onSetMapObjectMove("cernium_sky_b", [1, 0, 0]);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1500, 38);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3004436, "oid=63567505", 1500, 105, 5, 1450, 1550, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=63567505", "summon", 0, 0);
        cm.npc_ChangeController(3004435, "oid=63567506", 1600, 105, 5, 1550, 1650, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=63567506", "summon", 0, 0);
        cm.npc_ChangeController(3004433, "oid=63567507", 1400, 105, 5, 1350, 1450, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=63567507", "summon", 0, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 1300, 6);
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=63567505", "special", -1, 1);
          cm.npc_SetSpecialAction("oid=63567506", "special", -1, 1);
          cm.npc_ChangeController(3004437, "oid=63567508", 2650, 105, 10, 2600, 2700, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=63567508", "summon", 0, 0);
          cm.npc_ChangeController(3004437, "oid=63567509", 2800, 105, 9, 2750, 2850, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=63567509", "summon", 0, 0);
          cm.npc_ChangeController(3004437, "oid=63567510", 2930, 105, 9, 2880, 2980, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=63567510", "summon", 0, 0);
          cm.npc_ChangeController(3004437, "oid=63567511", 3500, 105, 7, 3450, 3550, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63567511", "summon", 0, 0);
          cm.npc_ChangeController(3004437, "oid=63567512", 3570, 105, 7, 3520, 3620, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63567512", "summon", 0, 0);
          cm.npc_ChangeController(3004437, "oid=63567513", 3690, 105, 7, 3640, 3740, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=63567513", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=63567508", 'special6', -1, 1);
          cm.npc_SetSpecialAction("oid=63567509", "special6", -1, 1);
          cm.npc_SetSpecialAction("oid=63567510", 'specia4', -1, 1);
          cm.npc_SetSpecialAction("oid=63567511", "special0", -1, 1);
          cm.npc_SetSpecialAction("oid=63567512", "specia4", -1, 1);
          cm.npc_SetSpecialAction("oid=63567513", "special0", -1, 1);
          cm.npc_ChangeController(3004465, "oid=63567514", 3100, 105, 8, 3050, 3150, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63567514", 'summon', 0, 0);
          cm.npc_ChangeController(3004465, "oid=63567515", 3180, 105, 8, 3130, 3230, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=63567515", "summon", 0, 0);
          cm.npc_ChangeController(3004465, "oid=63567516", 3320, 105, 8, 3270, 3370, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=63567516", "summon", 0, 0);
          cm.npc_SetSpecialAction("oid=63567514", "attack1", -1, 1);
          cm.npc_SetSpecialAction("oid=63567516", "attack1", -1, 1);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#这些家伙真是没完没了！", 37, 3004435, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#又来了！", 37, 3004435, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#……", 37, 3004433, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("（王子在看哪里呢？）", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#快撤退……", 37, 3004433, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#什么？", 37, 3004437, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1340, -30);
                            } else {
                              if (status === V++) {
                                cm.onSetMapObjectMove("cernium_sky_b", [1, 255, 500]);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/burningSky", 100);
                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63567505"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63567506"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#怎、怎么回事？那道闪电？！", 37, 3004435, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/blueThunder", 100);
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63567505"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63567506"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_PushScaleInfo(300, 0, 1000, 300, 3076, -30);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect2/13"], [3000, 2600, 100, 1, 100, 1, 1, 0]);
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(350);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect2/13"], [3000, 2800, 100, 1, 100, 1, 1, 0]);
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(350);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect2/13"], [3000, 3600, 100, 1, 100, 1, 1, 0]);
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63567508"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63567509"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63567510"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63567511"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63567512"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63567513"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63567514"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63567515"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63567516"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.userSetFieldFloating(993151020, 5, 5, 5);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect2/3"], [0, 2600, 100, 1, 100, 1, 1, 0]);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                    cm.userSetFieldFloating(993151020, 7, 7, 5);
                                                    cm.inGameDirectionEvent_AskAnswerTime(350);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect2/4"], [0, 2800, 100, 1, 100, 1, 1, 0]);
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder2", 100);
                                                      cm.userSetFieldFloating(993151020, 10, 10, 5);
                                                      cm.inGameDirectionEvent_AskAnswerTime(350);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect2/5"], [0, 3600, 100, 1, 100, 1, 1, 0]);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder3", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.userSetFieldFloating(993151020, 1, 1, 5);
                                                          cm.npc_SetSpecialAction("oid=63567508", "die1", 1, 1);
                                                          cm.npc_SetSpecialAction("oid=63567509", "die1", 1, 1);
                                                          cm.npc_SetSpecialAction("oid=63567510", "die1", 1, 1);
                                                          cm.npc_SetSpecialAction("oid=63567511", 'die1', 1, 1);
                                                          cm.npc_SetSpecialAction("oid=63567512", "die1", 1, 1);
                                                          cm.npc_SetSpecialAction("oid=63567513", 'die1', 1, 1);
                                                          cm.setNpcSpecialActionReset("oid=63567514");
                                                          cm.setNpcSpecialActionReset("oid=63567515");
                                                          cm.setNpcSpecialActionReset("oid=63567516");
                                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645120/Die", 100);
                                                          cm.Npc_Fadeout("oid=63567508", 0, 500);
                                                          cm.Npc_Fadeout("oid=63567509", 0, 500);
                                                          cm.Npc_Fadeout("oid=63567510", 0, 500);
                                                          cm.Npc_Fadeout("oid=63567511", 0, 500);
                                                          cm.Npc_Fadeout("oid=63567512", 0, 500);
                                                          cm.Npc_Fadeout("oid=63567513", 0, 500);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#撤退！！弃守城墙！！", 37, 3004433, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                                            } else if (status === V++) {
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/blueThunder", 100);
                                                              cm.eventSKill(0);
                                                              cm.warp(993151021, 0, true);
                                                              cm.npc_LeaveField("oid=63567505");
                                                              cm.npc_LeaveField("oid=63567505");
                                                              cm.npc_LeaveField("oid=63567506");
                                                              cm.npc_LeaveField("oid=63567506");
                                                              cm.npc_LeaveField("oid=63567507");
                                                              cm.npc_LeaveField("oid=63567507");
                                                              cm.npc_LeaveField("oid=63567508");
                                                              cm.npc_LeaveField("oid=63567509");
                                                              cm.npc_LeaveField("oid=63567510");
                                                              cm.npc_LeaveField("oid=63567511");
                                                              cm.npc_LeaveField("oid=63567512");
                                                              cm.npc_LeaveField("oid=63567513");
                                                              cm.npc_LeaveField("oid=63567514");
                                                              cm.npc_LeaveField("oid=63567515");
                                                              cm.npc_LeaveField("oid=63567516");
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