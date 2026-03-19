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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 198, 20);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.npc_ChangeController(3003500, "oid=1999983", 285, 130, 1, 235, 335, 1, true, false);
          cm.npc_SetSpecialAction("oid=1999983", "summon", 0, 0);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#希望休麦和梅尔朗看到信号之后，会回应我们……", 37, 3003500, false, true);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(1540672, "oid=1999984", 150, 0, 1, 100, 200, 1, false, false);
                cm.npc_SetSpecialAction("oid=1999984", 'summon', 0, 0);
                cm.npc_SetSpecialAction("oid=1999984", "appear", 3500, 1);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.effect_PlayMusic("SoundEff.img/blackHeaven/flare_appear");
                  cm.npc_SetSpecialAction("oid=1999984", "prepare", -1, 1);
                  cm.setAmbience("Ambience.img/flare_ready", 100, 60);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_OneTimeAction(9, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                      if (status === V++) {
                        cm.playSoundEffDirectly("Ambience.img/flare_ready");
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier1", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(600);
                      } else {
                        if (status === V++) {
                          cm.setNpcSpecialActionReset("oid=1999984");
                          cm.npc_SetSpecialAction("oid=1999984", "shoot", 3500, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(900);
                        } else {
                          if (status === V++) {
                            cm.effect_PlayMusic("SoundEff.img/blackHeaven/flare_fire");
                            cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 150, -500);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(1540673, "oid=1999988", 150, 0, 1, 100, 200, 1, false, false);
                              cm.npc_SetSpecialAction("oid=1999988", 'summon', 0, 0);
                              cm.setNpcSpecialActionReset("oid=1999984");
                              cm.npc_SetSpecialAction("oid=1999984", "last", -1, 1);
                              cm.npcMove(1540673, 0, -850, 5000);
                              cm.inGameDirectionEvent_AskAnswerTime(5500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#如果看到信号弹，他们一定会应答……", 37, 3003500, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_PlayMusic("SoundEff.img/blackHeaven/flare_fire");
                                      cm.sendNormalTalk_Bottom("#face0#看到了吗？他们回应我们了。在#b右边#k。", 37, 3003500, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#我在前面带路。", 37, 3003500, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.forceStartQuest(34566, '');
                                          cm.updateInfoQuest(34560, "30=h1;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
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
                                                cm.npc_LeaveField("oid=1999983");
                                                cm.npc_LeaveField("oid=1999984");
                                                cm.npc_LeaveField("oid=1999988");
                                                cm.dispose();
                                                cm.warp(450007040, 3);
                                                cm.setStandAloneMode(false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;