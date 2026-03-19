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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=1656473", 1354, 1920, 0);
      cm.npc_SetSpecialAction("oid=1656473", "summon");
      cm.npc_ChangeController(9400032, "oid=1656474", 1270, 1920, 0);
      cm.npc_SetSpecialAction("oid=1656474", 'summon');
      cm.npc_ChangeController(9400033, "oid=1656475", 1140, 1920, 0);
      cm.npc_SetSpecialAction("oid=1656475", 'summon');
      cm.npc_ChangeController(9400034, "oid=1656476", 1500, 1920, 1);
      cm.npc_SetSpecialAction("oid=1656476", "summon");
      cm.inGameDirectionEvent_PushMoveInfo(0, 500, 1300, 1890);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1350);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(4200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 0, 1300, 1980);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else {
                    if (status === V++) {
                      cm.sendNextNoESC_Bottom("#face2#好，这些应该够了吧？！赏金猎人！", 9400031);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                            } else {
                              if (status === V++) {
                                cm.forceCompleteQuest(59718);
                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                cm.updateInfoQuest(59762, "1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
                                cm.inGameDirectionEvent_AskAnswerTime(4200);
                              } else if (status === V++) {
                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
                                cm.updateInfoQuest(18418, "B=228");
                                cm.inGameDirectionEvent_SetHideEffect(0);
                                cm.warp(867111018);
                                cm.setInGameDirectionMode(false, false, false);
                                cm.setStandAloneMode(false);
                                cm.npc_LeaveField("oid=1656473");
                                cm.npc_LeaveField("oid=1656474");
                                cm.npc_LeaveField("oid=1656475");
                                cm.npc_LeaveField("oid=1656476");
                                cm.dispose();
                              } else {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;