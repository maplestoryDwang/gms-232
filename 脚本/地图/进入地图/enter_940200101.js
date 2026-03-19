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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -5, -450);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003270, "oid=1754656", -250, -20, 2, -300, -200, 0, true, false);
        cm.npc_SetSpecialAction("oid=1754656", "summon", 0, 0);
        cm.setAmbience("SoundEff.img/ArcaneRiver/night", 200, 60);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(4000, 1000, 4000, -5, 160);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/arrow0", 200);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/arrow1", 200);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/arrow2", 200);
                    cm.inGameDirectionEvent_AskAnswerTime(100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#哈！", 37, 3003270, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('#face2#哈嗯！', 37, 3003270, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=1754656", 1, 320, 160);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=1754656", -1, 5, 160);
                            cm.sendNormalTalk_Bottom("#face2#不…这样没有办法赢… 练习的结果？说谎！", 37, 3003270, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#…只练习没有任何的用途。如果我有天分的话… 那样的话…", 37, 3003270, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#呼啊啊…", 37, 3003270, true, true);
                              } else {
                                if (status === V++) {
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
                                        cm.setNpcSpecialActionReset("oid=1754656");
                                        cm.npc_SetSpecialAction("oid=1754656", "sleep", -1, 0);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, 260);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 90, 260);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else if (status === V++) {
                                                cm.dispose();
                                                cm.warp(940200102, 0);
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