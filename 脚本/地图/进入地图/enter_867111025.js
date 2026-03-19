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
      cm.npc_ChangeController(9400031, "oid=1664772", -410, -330, 0);
      cm.npc_SetSpecialAction("oid=1664772", "summon");
      cm.npc_ChangeController(9400032, "oid=1664773", -310, -345, 1);
      cm.npc_SetSpecialAction("oid=1664773", "summon");
      cm.npc_ChangeController(9400033, "oid=1664774", -480, -310, 0);
      cm.npc_SetSpecialAction("oid=1664774", 'summon');
      cm.npc_ChangeController(9400034, "oid=1664775", -240, -370, 1);
      cm.npc_SetSpecialAction("oid=1664775", "summon");
      cm.npc_ChangeController(9400035, "oid=1664776", -365, -330, 1);
      cm.npc_SetSpecialAction("oid=1664776", "summon");
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, -358, -330);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -358, -260);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.sendNextNoESC_Bottom("的确如陈所说，动物的毛发正在越来越多。", 9400034);
          } else {
            if (status === V++) {
              cm.sendNextNoESC_Bottom("而且都朝着同一个方向啊。", 9400033);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=1664774", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC_Bottom("既然如此！APORD是不是就在前面？！！", 9400031);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=1664772", -1);
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
                            cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 2147483647, 2147483647, 2147483647);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.forceCompleteQuest(59723);
                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                cm.updateInfoQuest(59763, "1=1;2=1;3=1;4=1");
                                cm.inGameDirectionEvent_AskAnswerTime(4200);
                              } else if (status === V++) {
                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
                                cm.inGameDirectionEvent_SetHideEffect(0);
                                cm.warp(cm.getNumberFromQuestInfo(59744, "map"), 0);
                                cm.setInGameDirectionMode(false, false, false);
                                cm.setStandAloneMode(false);
                                cm.npc_LeaveField("oid=1664772");
                                cm.npc_LeaveField("oid=1664773");
                                cm.npc_LeaveField("oid=1664774");
                                cm.npc_LeaveField("oid=1664775");
                                cm.npc_LeaveField("oid=1664776");
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