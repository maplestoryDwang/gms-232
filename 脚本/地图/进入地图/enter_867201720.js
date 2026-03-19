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
      cm.npc_ChangeController(9400682, "oid=203087", 1469, -72, 5, 1419, 1519, 1, false, false);
      cm.npc_ChangeController(9400682, "oid=203088", 1208, -124, 3, 1158, 1258, 1, false, false);
      cm.npc_ChangeController(9400682, 'oid=203089', 1225, -442, 7, 1175, 1275, 1, false, false);
      cm.npc_ChangeController(9400682, "oid=203090", 42, -413, 57, -8, 72, 1, false, false);
      cm.npc_ChangeController(9400682, "oid=203091", -407, -490, 53, -457, -357, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9400580, "oid=7615509", -1120, 175, 48, -1170, -1070, 0, true, false);
      cm.npc_SetSpecialAction("oid=7615509", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7615510", -230, 445, 56, -280, -180, 1, true, false);
      cm.npc_SetSpecialAction("oid=7615510", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7615511", 45, 445, 56, -5, 95, 0, true, false);
      cm.npc_SetSpecialAction("oid=7615511", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7615512", 305, 445, 56, 255, 355, 1, true, false);
      cm.npc_SetSpecialAction("oid=7615512", 'summon', 0, 0);
      cm.npc_ChangeController(9400676, "oid=7615513", 780, 445, 1, 730, 830, 0, true, false);
      cm.npc_SetSpecialAction("oid=7615513", "summon", 0, 0);
      cm.npc_ChangeController(9400676, "oid=7615514", 1225, 445, 2, 1175, 1275, 1, true, false);
      cm.npc_SetSpecialAction("oid=7615514", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7615515", 1585, 445, 2, 1535, 1635, 1, true, false);
      cm.npc_SetSpecialAction("oid=7615515", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7615516", -20, 190, 49, -70, 30, 0, true, false);
      cm.npc_SetSpecialAction("oid=7615516", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7615517", 340, 190, 29, 290, 390, 0, true, false);
      cm.npc_SetSpecialAction("oid=7615517", 'summon', 0, 0);
      cm.npc_ChangeController(9400676, "oid=7615518", 560, 30, 18, 510, 610, 1, true, false);
      cm.npc_SetSpecialAction("oid=7615518", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7615519", 1060, 60, 21, 1010, 1110, 0, true, false);
      cm.npc_SetSpecialAction("oid=7615519", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7615520", 1430, 190, 23, 1380, 1480, 1, true, false);
      cm.npc_SetSpecialAction("oid=7615520", "summon", 0, 0);
      cm.npc_ChangeController(9400676, "oid=7615521", 530, 305, 26, 480, 580, 0, true, false);
      cm.npc_SetSpecialAction("oid=7615521", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7615522", 1560, 360, 40, 1510, 1610, 1, true, false);
      cm.npc_SetSpecialAction("oid=7615522", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=7615510", "attack1", 0, 1);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=7615512", "attack1", 0, 1);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=7615520", 'attack1', 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=7615519", "attack1", 0, 1);
              cm.inGameDirectionEvent_AskAnswerTime(700);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=7615515", 'attack1', 0, 1);
                cm.npc_SetForceMove("oid=7615509", 1, 200, 200);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.addPopupSay(9400580, 3000, "#face4##h0#……树上都是恶心的粉红触手呢。", '', 0);
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 3000, 1260, -195);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=7615511", "attack1", 0, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=7615517", 'attack1', 0, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=7615513", "attack1", 0, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=7615518", "attack1", 0, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(700);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=7615522", "attack1", 0, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.addPopupSay(9400580, 3000, "#face0#难道要把那些都破坏掉……？", '', 0);
                              cm.playerMessage(-1, "消灭怪物并进入森林深处吧");
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else if (status === V++) {
                                cm.npc_LeaveField("oid=7615509");
                                cm.npc_LeaveField("oid=7615509");
                                cm.npc_LeaveField("oid=7615510");
                                cm.npc_LeaveField("oid=7615510");
                                cm.npc_LeaveField("oid=7615511");
                                cm.npc_LeaveField("oid=7615511");
                                cm.npc_LeaveField("oid=7615512");
                                cm.npc_LeaveField("oid=7615512");
                                cm.npc_LeaveField("oid=7615513");
                                cm.npc_LeaveField("oid=7615513");
                                cm.npc_LeaveField("oid=7615514");
                                cm.npc_LeaveField("oid=7615515");
                                cm.npc_LeaveField("oid=7615516");
                                cm.npc_LeaveField("oid=7615516");
                                cm.npc_LeaveField("oid=7615517");
                                cm.npc_LeaveField("oid=7615517");
                                cm.npc_LeaveField("oid=7615518");
                                cm.npc_LeaveField("oid=7615518");
                                cm.npc_LeaveField("oid=7615519");
                                cm.npc_LeaveField("oid=7615520");
                                cm.npc_LeaveField("oid=7615521");
                                cm.npc_LeaveField("oid=7615521");
                                cm.npc_LeaveField("oid=7615522");
                                cm.setInGameDirectionMode(false, true, false);
                                cm.setPartner(1, 9400644, 80011692, 0);
                                cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                                cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
                                cm.spawnMobLimit(9402243, 1, -230, 404, 100);
                                cm.spawnMobLimit(9402242, 1, 45, 404, 100);
                                cm.spawnMobLimit(9402242, 1, 305, 404, 100);
                                cm.spawnMobLimit(9402241, 1, 780, 404, 100);
                                cm.spawnMobLimit(9402242, 1, -20, 147, 100);
                                cm.spawnMobLimit(9402243, 1, 340, 147, 100);
                                cm.spawnMobLimit(9402241, 1, 560, -14, 100);
                                cm.spawnMobLimit(9402241, 1, 530, 262, 100);
                                cm.spawnMobLimit(9402241, 1, 1205, 404, 100);
                                cm.spawnMobLimit(9402242, 1, 1951, 404, 100);
                                cm.spawnMobLimit(9402242, 1, 758, -11, 100);
                                cm.spawnMobLimit(9402243, 1, 966, -11, 100);
                                cm.spawnMobLimit(9402242, 1, 1731, 320, 100);
                                cm.spawnMobLimit(9402243, 1, 1397, 404, 100);
                                cm.spawnMobLimit(9402242, 1, 1730, 320, 100);
                                cm.npc_LeaveField("oid=203089");
                                cm.npc_LeaveField("oid=203090");
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