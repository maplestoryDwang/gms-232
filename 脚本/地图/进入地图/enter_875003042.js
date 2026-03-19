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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401283, "oid=2154527", 70, -720, 49, 20, 120, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154527", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.sendNewEffects(17, [0, 1000, 2000, 30, -670]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=2154527", 1, 200, 120);
            cm.sendNewEffects(13, [2000, 300, 0]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNewEffects(13, [2000, 0, 500]);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 9401283, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNewEffects(13, [2000, -500, 0]);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNewEffects(13, [2000, 0, 500]);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#看多了白色的东西，感觉眼睛有点发花……", 37, 9401283, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/boyScream", 100);
                                  cm.fieldEffect_Hero9(0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=2154527", -1);
                                    cm.sendNewEffects(17, [0, 1000, 2000, 360, -670]);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=2154527"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                      cm.sendNormalTalk_Bottom("#face1#大侠！刚才你有没有听到呼救声？！", 37, 9401283, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(900);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNewEffects(14, [0, 2000, 1000]);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNewEffects(19, [0]);
                                          } else if (status === V++) {
                                            cm.forceCompleteQuest(65967);
                                            cm.npc_LeaveField("oid=2154527");
                                            cm.dispose();
                                            cm.warp(211040100, 0, false);
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