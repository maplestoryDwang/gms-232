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
      cm.npc_ChangeController(1540502, "oid=290450530", -250, 46, 5, -300, -200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290450530", "summon", 0, 0);
      cm.npc_ChangeController(1540503, "oid=290450531", -300, 46, 5, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290450531", "summon", 0, 0);
      cm.npc_ChangeController(1540504, "oid=290450532", -350, 46, 4, -400, -300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290450532", "summon", 0, 0);
      cm.setAmbience("Ambience.img/secretmissionbase", 100, 60);
      cm.cancelItem(2023447);
      cm.cancelItem(2023448);
      cm.cancelItem(2023449);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(10);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(10);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我们就到这里了，队长。", 37, 1540502, false, true);
                cm.effect_Voice("Voice3.img/BlackHeaven/3_11/1", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('请一定要保重，队长！', 37, 1540503, true, true);
                  cm.effect_Voice("Voice3.img/BlackHeaven/3_11/2", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('请小心啊！', 37, 1540504, true, true);
                    cm.effect_Voice("Voice3.img/BlackHeaven/3_11/3", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(2);
                      cm.inGameDirectionEvent_AskAnswerTime(650);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_SetHideEffect(1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.setAmbience("SoundEff.img/blackHeaven/scanner_stand", 100, 60);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.userSetFieldFloating(350040261, 5, 5, 20);
                              cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 2);
                              cm.forceCompleteQuest(33195);
                              cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission5", 100);
                                cm.playSoundEffDirectly("SoundEff.img/blackHeaven/scanner_stand");
                                cm.userSetFieldFloating(350040261, 0, 0, 0);
                                cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, 0, -1500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                      } else if (status === V++) {
                                        cm.dispose();
                                        cm.warp(350040270, 0, true);
                                        cm.npc_LeaveField("oid=290450530");
                                        cm.npc_LeaveField("oid=290450530");
                                        cm.npc_LeaveField("oid=290450531");
                                        cm.npc_LeaveField("oid=290450531");
                                        cm.npc_LeaveField("oid=290450532");
                                        cm.npc_LeaveField("oid=290450532");
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