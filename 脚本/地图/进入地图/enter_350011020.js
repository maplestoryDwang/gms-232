var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(33151, "halo") > 0) {
    cm.npc_ChangeController(1540502, "oid=12965799", 157, 21, 11, 107, 207, 0, true, 100, false);
    cm.npc_SetSpecialAction("oid=12965799", "summon", 0, 0);
    cm.npc_ChangeController(1540503, "oid=12965800", 108, 21, 11, 58, 158, 0, true, 300, false);
    cm.npc_SetSpecialAction("oid=12965800", "summon", 0, 0);
    cm.npc_ChangeController(1540504, "oid=12965801", 50, 21, 10, 0, 100, 0, true, 300, false);
    cm.npc_SetSpecialAction("oid=12965801", 'summon', 0, 0);
    cm.dispose();
    cm.cancelItem(2023418);
    cm.cancelItem(2023419);
    cm.cancelItem(2023420);
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1540446, "oid=32539", -792, 30, 23, -842, -742, 1, false, 0, false);
      cm.updateInfoQuest(33128, "act1=350011020");
      cm.forceCompleteQuest(33151);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
      cm.cancelItem(2023418);
      cm.cancelItem(2023419);
      cm.cancelItem(2023420);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(1540475, "oid=12965140", -100, 21, 7, -150, -50, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=12965140", "summon", 0, 0);
        cm.npc_ChangeController(1540475, "oid=12965141", 62, 21, 10, 12, 112, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=12965141", 'summon', 0, 0);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.inGameDirectionEvent_PushMoveInfo(0, 100, 25, 21);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(4003);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(1540502, "oid=12965353", -391, 21, 4, -441, -341, 0, true, 300, false);
            cm.npc_SetSpecialAction("oid=12965353", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=12965140", -1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
                cm.effect_NormalSpeechBalloon("什么人!", 0, 0, 0, 1500, 0, 0, 0, 0, 4, 1540475, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(1540503, "oid=12965465", 208, 21, 13, 158, 258, 1, true, 300, false);
                  cm.npc_SetSpecialAction("oid=12965465", 'summon', 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(1540504, "oid=12965506", 306, 21, 12, 256, 356, 1, true, 300, false);
                    cm.npc_SetSpecialAction("oid=12965506", "summon", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.setNpcSpecialActionReset("oid=12965353");
                      cm.npc_SetSpecialAction("oid=12965353", "spin", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=12965353");
                        cm.npc_LeaveField("oid=12965353");
                        cm.npc_ChangeController(1540502, "oid=12965529", -240, 21, 6, -290, -190, 0, true, 100, false);
                        cm.npc_SetSpecialAction("oid=12965529", "summon", 0, 0);
                        cm.inGameDirectionEvent_PushScaleInfo(200, 1500, 200, 0, 21);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=12965529", "attack", 0, 0);
                          cm.npc_SetSpecialAction("oid=12965465", 'attack', 0, 0);
                          cm.npc_SetSpecialAction("oid=12965506", "attack", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(700);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=12965140", "die1", 0, 0);
                            cm.npc_SetSpecialAction("oid=12965141", "die1", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                            cm.effect_Voice("Game.img/MonsterBattleDraw", 100);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=12965140");
                              cm.npc_LeaveField("oid=12965140");
                              cm.npc_LeaveField("oid=12965141");
                              cm.npc_LeaveField("oid=12965141");
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 200, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.onTeleport(0, 3, cm.getPlayer().getId(), -225, -4475);
                                cm.forceCompleteQuest(33153);
                                cm.inGameDirectionEvent_SetHideEffect(0);
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  cm.npc_LeaveField("oid=32539");
                                  cm.npc_LeaveField("oid=12965465");
                                  cm.npc_LeaveField("oid=12965506");
                                  cm.npc_LeaveField("oid=12965529");
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=12965529");
                                    cm.npc_LeaveField("oid=12965465");
                                    cm.npc_LeaveField("oid=12965506");
                                    cm.npc_ChangeController(1540502, "oid=12965799", 157, 21, 11, 107, 207, 0, true, 100, false);
                                    cm.npc_SetSpecialAction("oid=12965799", 'summon', 0, 0);
                                    cm.npc_ChangeController(1540503, "oid=12965800", 108, 21, 11, 58, 158, 0, true, 300, false);
                                    cm.npc_SetSpecialAction("oid=12965800", 'summon', 0, 0);
                                    cm.npc_ChangeController(1540504, "oid=12965801", 50, 21, 10, 0, 100, 0, true, 300, false);
                                    cm.npc_SetSpecialAction("oid=12965801", "summon", 0, 0);
                                    cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 2147483647, 2147483647, 2147483647);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else if (status === V++) {
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.updateInfoQuest(33151, "onBoard=1;halo=1");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;