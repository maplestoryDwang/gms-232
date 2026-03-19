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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001960, "oid=6403416", 347, 100, 4, 297, 397, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6403416", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 316, 90);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
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
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=6403416", 'special2', 0, 0);
                cm.sendNormalTalk_Bottom("#face2#布乌，布！", 36, 3001960, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#这是叫我跟着你的意思吗？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=6403416", 'special2', 0, 0);
                    cm.sendNormalTalk_Bottom("#face2#布，布乌！", 36, 3001960, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face5#布乌，我们得快点回去。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=6403416", "special4", 1200, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=6403416", "special5", 0, 0);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/jumpin", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(2400);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=6403416");
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#布乌，站住！", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                      } else if (status === V++) {
                                        cm.warp(993162013, 0, false);
                                        cm.setStandAloneMode(false);
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                        cm.setInGameDirectionMode(false, true, false);
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