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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=19778751", 1354, 1920, 379, 1304, 1404, 0, true, false);
      cm.npc_SetSpecialAction("oid=19778751", 'summon', 0, 0);
      cm.npc_ChangeController(9400032, "oid=19778752", 1270, 1920, 378, 1220, 1320, 0, true, false);
      cm.npc_SetSpecialAction("oid=19778752", 'summon', 0, 0);
      cm.npc_ChangeController(9400033, "oid=19778753", 1140, 1920, 375, 1090, 1190, 0, true, false);
      cm.npc_SetSpecialAction("oid=19778753", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19778754", 1500, 1920, 381, 1450, 1550, 1, true, false);
      cm.npc_SetSpecialAction("oid=19778754", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, 1300, 1890);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
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
                      cm.sendNormalTalk_Bottom("#face1#嗯，你们比我想得还要更优秀嘛？", 37, 9400034, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("你应该不会想着自己带着这些东西跑去哪儿吧？", 37, 9400031, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("你们把我当成什么人了啊，我可是杰特啊，那我们现在就去打听情报吧？", 37, 9400034, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#好！！！！", 37, 9400031, true, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else {
                                if (status === V++) {
                                  cm.gainItem(4034898, -31);
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                } else {
                                  if (status === V++) {
                                    cm.forceCompleteQuest(59719);
                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                    cm.updateInfoQuest(59762, "10=1;1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                  } else if (status === V++) {
                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                    cm.eventSKill(0);
                                    cm.warp(cm.getNumberFromQuestInfo(59744, 'map'), 0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.setStandAloneMode(false);
                                    cm.npc_LeaveField("oid=19778751");
                                    cm.npc_LeaveField("oid=19778752");
                                    cm.npc_LeaveField("oid=19778753");
                                    cm.npc_LeaveField("oid=19778754");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;