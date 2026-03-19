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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1052229, "oid=6268361", -25, 100, 1, -75, 25, 1, false, false);
      cm.npc_SetSpecialAction("oid=6268361", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=6268361", "knockDown", -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 35, 150);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.sendNormalTalk_Bottom("#b（……看来这段时间没少辛苦吧。）#k", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#啊，你是哪位？", 37, 1052230, true, true);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(1052230, "oid=6268539", -330, 100, 1, -380, -280, 0, true, false);
                  cm.npc_SetSpecialAction("oid=6268539", 'summon', 0, 0);
                  cm.inGameDirectionEvent_MoveAction(7);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(-1);
                    cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -225, 150);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b（解释说受冬青的嘱托，来看看阿赫的状态。）#k", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#真是叫你操心了呢……不过制作人的健康状况很好，只是睡着了罢了。", 37, 1052230, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#啊，忘了介绍我自己了，我是制作人的秘书，我叫迪亚。", 37, 1052230, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                              cm.effect_NormalSpeechBalloon('…', 1, 0, 0, 1500, 1052230, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                cm.effect_NormalSpeechBalloon('…', 1, 0, 0, 1000, 0, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#嘿嘿，来者是客，总该招待你些什么才好，可惜也没什么拿得出手的东西……", 37, 1052230, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#额……额额……额额额！！", 37, 1052229, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_MoveAction(7);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_ForcedFlip(1);
                                          cm.npc_SetForceMove("oid=6268539", 1, 100, 100);
                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -75, 150);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#啊，灵……灵感！！！！！！！！！！！", 37, 1052229, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.setNpcSpecialActionReset("oid=6268361");
                                                cm.npc_SetSpecialAction("oid=6268361", "stand", -1, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我有灵感了！", 37, 1052229, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.setNpcSpecialActionReset("oid=6268361");
                                                      cm.npc_SetSpecialAction("oid=6268361", "knockDown", -1, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        cm.effect_NormalSpeechBalloon("…!?", 1, 0, 0, 3000, 1052230, cm.getPlayer().getId());
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          cm.effect_NormalSpeechBalloon('…!?', 1, 0, 0, 3000, 0, cm.getPlayer().getId());
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else if (status === V++) {
                                                            cm.npc_LeaveField("oid=6268361");
                                                            cm.npc_LeaveField("oid=6268361");
                                                            cm.npc_LeaveField("oid=6268539");
                                                            cm.npc_LeaveField("oid=6268539");
                                                            cm.dispose();
                                                            cm.warp(103041001, 0);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;