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
      cm.npc_ChangeController(3003656, "oid=275824", 25, 419, 6, -25, 75, 4, true, 0, false);
      cm.npc_ChangeController(3003651, 'oid=275825', -86, 419, 6, -136, -36, 4, true, 0, false);
      cm.npc_ChangeController(3003681, "oid=275826", 409, 447, 3, 359, 422, 1, false, 0, false);
      cm.npc_ChangeController(3003680, "oid=275827", 318, 447, 3, 268, 368, 1, false, 0, false);
      cm.npc_ChangeController(3003682, 'oid=275828', 513, 447, 1, 463, 563, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1326, 520);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(0);
          cm.npc_ChangeController(3003659, "oid=2202749", -700, 150, 12, -750, -650, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202749", "summon", 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202750", -600, 150, 12, -650, -550, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202750", "summon", 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202751", -500, 150, 12, -550, -450, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202751", 'summon', 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202752", -400, 150, 12, -450, -350, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202752", "summon", 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202753", -300, 150, 11, -350, -250, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202753", "summon", 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202754", -200, 150, 10, -250, -150, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202754", "summon", 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202755", -800, 400, 6, -850, -750, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202755", "summon", 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202756", -710, 400, 6, -760, -660, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202756", "summon", 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202757", -610, 400, 6, -660, -560, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202757", 'summon', 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202758", -520, 400, 6, -570, -470, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202758", 'summon', 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202759", -410, 400, 6, -460, -360, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202759", 'summon', 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202760", -320, 400, 6, -370, -270, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202760", 'summon', 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202761", -210, 400, 6, -260, -160, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202761", "summon", 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202762", 620, 400, 1, 570, 670, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202762", "summon", 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202763", 700, 400, 1, 650, 750, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202763", "summon", 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202764", 780, 400, 1, 730, 830, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202764", "summon", 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202765", 860, 400, 1, 810, 910, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202765", 'summon', 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202766", 920, 400, 2, 870, 970, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202766", "summon", 0, 0);
          cm.npc_ChangeController(3003659, "oid=2202767", 1040, 400, 2, 990, 1090, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=2202767", 'summon', 0, 0);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(1, 1120);
              cm.inGameDirectionEvent_PushScaleInfo(9000, 0, 1000, 9000, 160, 337);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#终于突破了迷雾屏障！！\r\n我们距离黑太阳又更近了一步！！", 37, 3003659, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#呃……果然不愧是#b#ho##k。\r\n完美地压制住了敌人！！", 37, 3003659, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                          cm.npc_SetSpecialAction("oid=2202749", "cheer", -1, 1);
                          cm.npc_SetSpecialAction("oid=2202750", "cheer", -1, 1);
                          cm.npc_SetSpecialAction("oid=2202751", 'cheer', -1, 1);
                          cm.npc_SetSpecialAction("oid=2202752", "cheer", -1, 1);
                          cm.npc_SetSpecialAction("oid=2202753", 'cheer', -1, 1);
                          cm.npc_SetSpecialAction("oid=2202754", "cheer", -1, 1);
                          cm.npc_SetSpecialAction("oid=2202755", "cheer", -1, 1);
                          cm.npc_SetSpecialAction("oid=2202756", 'cheer', -1, 1);
                          cm.npc_SetSpecialAction("oid=2202757", "cheer", -1, 1);
                          cm.npc_SetSpecialAction("oid=2202758", "cheer", -1, 1);
                          cm.npc_SetSpecialAction("oid=2202759", 'cheer', -1, 1);
                          cm.npc_SetSpecialAction("oid=2202760", "cheer", -1, 1);
                          cm.npc_SetSpecialAction("oid=2202761", "cheer", -1, 1);
                          cm.npc_SetSpecialAction("oid=2202762", 'cheer', -1, 1);
                          cm.npc_SetSpecialAction("oid=2202763", "cheer", -1, 1);
                          cm.npc_SetSpecialAction("oid=2202764", 'cheer', -1, 1);
                          cm.npc_SetSpecialAction("oid=2202765", "cheer", -1, 1);
                          cm.npc_SetSpecialAction("oid=2202766", "cheer", -1, 1);
                          cm.npc_SetSpecialAction("oid=2202767", "cheer", -1, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(5000);
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
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 180, 457);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#你做得非常好，#b#ho##k。\r\n多亏了你，我们才能成功突破迷雾屏障。", 37, 3003656, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#但是在这无边无际的迷雾中……\r\n不知道有什么威胁在等待着我们。", 37, 3003656, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#呼……以后再慢慢品味胜利的喜悦吧。\r\n希望在下一次作战中你也能有出色的表现。", 37, 3003656, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, 736, -100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
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
                                                            cm.npc_LeaveField("oid=2202749");
                                                            cm.npc_LeaveField("oid=2202749");
                                                            cm.npc_LeaveField("oid=2202750");
                                                            cm.npc_LeaveField("oid=2202750");
                                                            cm.npc_LeaveField("oid=2202751");
                                                            cm.npc_LeaveField("oid=2202751");
                                                            cm.npc_LeaveField("oid=2202752");
                                                            cm.npc_LeaveField("oid=2202752");
                                                            cm.npc_LeaveField("oid=2202753");
                                                            cm.npc_LeaveField("oid=2202753");
                                                            cm.npc_LeaveField("oid=2202754");
                                                            cm.npc_LeaveField("oid=2202754");
                                                            cm.npc_LeaveField("oid=2202755");
                                                            cm.npc_LeaveField("oid=2202755");
                                                            cm.npc_LeaveField("oid=2202756");
                                                            cm.npc_LeaveField("oid=2202756");
                                                            cm.npc_LeaveField("oid=2202757");
                                                            cm.npc_LeaveField("oid=2202757");
                                                            cm.npc_LeaveField("oid=2202758");
                                                            cm.npc_LeaveField("oid=2202758");
                                                            cm.npc_LeaveField("oid=2202759");
                                                            cm.npc_LeaveField("oid=2202759");
                                                            cm.npc_LeaveField("oid=2202760");
                                                            cm.npc_LeaveField("oid=2202760");
                                                            cm.npc_LeaveField("oid=2202761");
                                                            cm.npc_LeaveField("oid=2202761");
                                                            cm.npc_LeaveField("oid=2202762");
                                                            cm.npc_LeaveField("oid=2202762");
                                                            cm.npc_LeaveField("oid=2202763");
                                                            cm.npc_LeaveField("oid=2202763");
                                                            cm.npc_LeaveField("oid=2202764");
                                                            cm.npc_LeaveField("oid=2202764");
                                                            cm.npc_LeaveField("oid=2202765");
                                                            cm.npc_LeaveField("oid=2202765");
                                                            cm.npc_LeaveField("oid=2202766");
                                                            cm.npc_LeaveField("oid=2202766");
                                                            cm.npc_LeaveField("oid=2202767");
                                                            cm.npc_LeaveField("oid=2202767");
                                                            cm.dispose();
                                                            cm.warp(993060076, 0, false);
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
          }
        }
      }
    }
  }
}