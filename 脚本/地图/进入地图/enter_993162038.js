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
      cm.inGameDirectionEvent_MoveAction(4);
      cm.npc_ChangeController(3001960, "oid=6590258", -305, -200, 2, -355, -255, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6590258", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=6590258", "special13", -1, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -350, -170);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#咘呜？", 36, 3001960, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#咘！", 36, 3001960, true, true, 1);
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
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -350, -170);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.setNpcSpecialActionReset("oid=6590258");
                            cm.npc_SetSpecialAction("oid=6590258", 'special6', 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1700);
                          } else {
                            if (status === V++) {
                              cm.setNpcSpecialActionReset("oid=6590258");
                              cm.sendNormalTalk_Bottom("#face5#咘呜，你……是来救我的吗？", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#咘，咘呜！", 36, 3001960, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#你能解开这个吗？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#咘！", 36, 3001960, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(布乌弹起来，变成了一把小钥匙。\r\n尝试几次后，就打开了手铐。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#咘呜~！", 36, 3001960, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#……解开了。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_MoveAction(0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.forceCompleteQuest(39626);
                                                    cm.gainExp(14399);
                                                    cm.gainExp(1528);
                                                    cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h1;20=h0;03=h0;12=h1;04=h0;13=h1;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
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
                                                          cm.warp(410000344, 0, false);
                                                          cm.setStandAloneMode(false);
                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.npc_LeaveField("oid=6590258");
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