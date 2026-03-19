var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestActive(37155)) {
    action37155(f, E, e);
  } else {
    cm.dispose();
  }
}
function action37155(f, E, e) {
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -601, -389);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('安说的地方是哪里呢？', 3, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, -834, 496);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -1380, 395);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("是……那边吗？", 3, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                        } else {
                          if (status === V++) {
                            cm.setAmbience("Ambience.img/wind", 90, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("呃……", 3, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("有点可怕……不过……还是进去看看吧。", 3, 0, true, true);
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
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                      } else if (status === V++) {
                                        cm.setStandAloneMode(false);
                                        cm.eventSKill(0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.updateInfoQuest(37155, "dir=end");
                                        cm.OnStartNavigation(101080000, 0, 'south00', 37155);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;