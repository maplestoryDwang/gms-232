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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 90, 260);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3003270, "oid=1754668", 120, -20, 3, 70, 170, 1, true, false);
          cm.npc_SetSpecialAction("oid=1754668", "summon", 0, 0);
          cm.setNpcSpecialActionReset("oid=1754668");
          cm.npc_SetSpecialAction("oid=1754668", 'sleep', -1, 0);
          cm.setAmbience("SoundEff.img/ArcaneRiver/night", 200, 60);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                    cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 90, 260);
                  } else {
                    if (status === V++) {
                      cm.setNpcSpecialActionReset("oid=1754668");
                      cm.sendNormalTalk_Bottom("#face0#又是那个梦啊。那么真实的梦…完全跟我期望的一样…", 37, 3003270, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#跟我期望的… 啊，等一下，如果说是梦，未免也太真实了吧。那温度，那感触… 怎么回事，刚才我做了什么？", 37, 3003270, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=1754668", -1, 80, 160);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 0, 260);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#…梦境按照我的心意进行着，我可以操纵梦！", 37, 3003270, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#操纵梦的能力… 这就是只有我才拥有的能力啊！", 37, 3003270, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNewEffects(17, [3000, 2000, 1000, 0, -1800]);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                          } else if (status === V++) {
                                            cm.dispose();
                                            cm.warp(940200105, 0);
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