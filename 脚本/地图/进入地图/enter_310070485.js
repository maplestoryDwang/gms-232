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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1200, 0, 3210, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2155104, "oid=45422616", 3200, 0, 29, 3150, 3250, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=45422616", "summon", 0, 0);
        cm.npc_ChangeController(2155110, "oid=45422617", 4050, 0, 26, 4000, 4100, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=45422617", 'summon', 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.npc_setForceFlip("oid=45422616", 1);
        cm.npc_setForceFlip("oid=45422617", -1);
        cm.sendNormalTalk_Bottom("这里…等等。\r\n等等。\r\n", 37, 2155104, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1100, 1, 0, 0, 0, 4, 2155104, null, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
            cm.effect_NormalSpeechBalloon("....", 1, 0, 0, 1100, 1, 0, 0, 0, 4, 2155104, null, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
              cm.effect_NormalSpeechBalloon(".....", 1, 0, 0, 1100, 1, 0, 0, 0, 4, 2155104, null, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=45422616", 1, 100, 200);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("…只要往那边走就行了。", 37, 2155104, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=45422616", 1, 280, 200);
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 800);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1200, 2000, 3890, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1500, 500, 3650, 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(400);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=45422616"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(200, 0, 1700, 200, 4050, 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(400);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#小猫？… 那小猫是！", 37, 2155121, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(400);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, 3650, 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(400);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=45422616"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 2100, 0, 3650, 0);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                cm.sendNormalTalk_Bottom("#face0#嗯，这里是…我第一次遇见她的地方。", 37, 2155121, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#小猫和…那个… 超级人造人。", 37, 2155121, false, true);
                                                  } else if (status === V++) {
                                                    cm.eventSKill(0);
                                                    cm.warp(310070486, 0, false);
                                                    cm.npc_LeaveField("oid=45422616");
                                                    cm.npc_LeaveField("oid=45422616");
                                                    cm.npc_LeaveField("oid=45422617");
                                                    cm.npc_LeaveField("oid=45422617");
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