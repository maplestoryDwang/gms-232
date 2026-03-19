var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getNumberFromQuestInfo(33990, "check8") > 0 && cm.getNumberFromQuestInfo(33990, 'check11') == 0) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.npc_ChangeController(1540795, "oid=58730", -180, 60, 3, -227, -130, 1, false, 0, false);
    cm.npc_ChangeController(1540884, "oid=58731", 547, 60, 4, 497, 597, 1, false, 0, false);
    cm.setInGameDirectionMode(false, true, false);
    cm.updateInfoQuest(33915, "act1=350112400;act2=350123600;act3=350130300");
    cm.showMapleHero();
    if (cm.getNumberFromQuestInfo(33990, "check6") > 0 && cm.getNumberFromQuestInfo(33990, "check7") == 0 || cm.getNumberFromQuestInfo(33990, "check11") > 0 && cm.getNumberFromQuestInfo(33990, "check9") == 0) {
      cm.Hidden_background("HofM_Case", 1, 1, 0, 0);
    } else {
      cm.Hidden_background("HofM_Case", 1, 0, 0, 0);
    }
    cm.dispose();
  }
}
function action2(f, E, e) {
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
      cm.npc_ChangeController(1540795, "oid=58730", -180, 60, 3, -227, -130, 1, false, 0, false);
      cm.npc_ChangeController(1540884, 'oid=58731', 547, 60, 4, 497, 597, 1, false, 0, false);
      cm.updateInfoQuest(33915, "act1=350112400;act2=350123600;act3=350130300");
      cm.Hidden_background('HofM_Case', 1, 1, 0, 0);
      cm.npc_ChangeController(1540879, "oid=305781498", 134, -880, 1, 84, 184, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=305781498", "summon", 0, 0);
      cm.npcMove(1540879, 0, 770, 0);
      cm.cancelItem(2210196);
      cm.showMapleHero();
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 210, 30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.sendNormalTalk_Bottom("说不定会被人看到，还是先把变装卸掉……", 37, 1540879, false, true);
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
              cm.sendNormalTalk_Bottom("我说！大帅哥！", 37, 1540852, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#哎哟。", 37, 1540879, true, true);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=305781498", 1, 130, 120);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(1540852, "oid=305787733", 37, 0, 3, -13, 87, 0, true, 1000, false);
                    cm.npc_SetSpecialAction("oid=305787733", "summon", 0, 0);
                    cm.sendNormalTalk_Bottom("哎哟？刚刚就在这里的啊……", 37, 1540852, false, true);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=305787733", 1, 150, 120);
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('难道是去那里了吗？', 37, 1540852, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("等一下嘛~大帅哥~", 37, 1540852, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=305787733", 1, 350, 120);
                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=305781498", -1, 130, 120);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=305781498", 1);
                                cm.sendNormalTalk_Bottom("#face6#哎哟……这个姑娘可真够坚持的。", 37, 1540879, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else if (status === V++) {
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.npc_LeaveField("oid=305781498");
                                  cm.npc_LeaveField("oid=305781498");
                                  cm.npc_LeaveField("oid=305787733");
                                  cm.npc_LeaveField("oid=305787733");
                                  cm.dispose();
                                  cm.updateInfoQuest(33990, "check1=1;check2=1;check3=1;check5=1;check6=1;check7=1;check8=1;check11=1;check=1");
                                  cm.warp(350130300, 2, true);
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