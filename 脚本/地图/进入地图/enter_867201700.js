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
      cm.npc_ChangeController(9400580, "oid=7614879", -1120, 175, 33, -1170, -1070, 0, true, false);
      cm.npc_SetSpecialAction("oid=7614879", "summon", 0, 0);
      cm.npc_ChangeController(9400676, "oid=7614880", -890, 175, 34, -940, -840, 1, true, false);
      cm.npc_SetSpecialAction("oid=7614880", "summon", 0, 0);
      cm.npc_ChangeController(9400685, "oid=7614881", -600, 175, 21, -650, -550, 0, true, false);
      cm.npc_SetSpecialAction("oid=7614881", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7614882", 25, 175, 5, -25, 75, 1, true, false);
      cm.npc_SetSpecialAction("oid=7614882", "summon", 0, 0);
      cm.npc_ChangeController(9400685, "oid=7614883", 240, 175, 5, 190, 290, 0, true, false);
      cm.npc_SetSpecialAction("oid=7614883", "summon", 0, 0);
      cm.npc_ChangeController(9400685, "oid=7614884", -730, 350, 37, -780, -680, 1, true, false);
      cm.npc_SetSpecialAction("oid=7614884", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7614885", -420, 350, 23, -470, -370, 1, true, false);
      cm.npc_SetSpecialAction("oid=7614885", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7614886", 15, 350, 7, -35, 65, 0, true, false);
      cm.npc_SetSpecialAction("oid=7614886", 'summon', 0, 0);
      cm.npc_ChangeController(9400674, "oid=7614887", 350, 350, 8, 300, 400, 0, true, false);
      cm.npc_SetSpecialAction("oid=7614887", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7614888", -450, 445, 33, -500, -400, 1, true, false);
      cm.npc_SetSpecialAction("oid=7614888", "summon", 0, 0);
      cm.npc_ChangeController(9400676, "oid=7614889", 100, 445, 9, 50, 150, 0, true, false);
      cm.npc_SetSpecialAction("oid=7614889", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7614890", 580, 445, 1, 530, 630, 1, true, false);
      cm.npc_SetSpecialAction("oid=7614890", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7614891", 1230, 445, 47, 1180, 1280, 0, true, false);
      cm.npc_SetSpecialAction("oid=7614891", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7614892", 1620, 445, 47, 1570, 1670, 1, true, false);
      cm.npc_SetSpecialAction("oid=7614892", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=7614880", "attack1", 0, 1);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=7614882", "attack1", 0, 1);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=7614890", "attack1", 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=7614889", "attack1", 0, 1);
              cm.inGameDirectionEvent_AskAnswerTime(700);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=7614885", "attack1", 0, 1);
                cm.sendNormalTalk_Bottom("#b真是的，从一开始就要……小心，艾丽卡。", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 5000, 1220, 200);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=7614881", "attack1", 0, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=7614887", "attack1", 0, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=7614883", "attack1", 0, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=7614888", "attack1", 0, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(700);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=7614892", 'attack1', 0, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#啊，真是好多啊。这下要过去就困难了。", 37, 9400580, false, true);
                            } else {
                              if (status === V++) {
                                cm.playerMessage(-1, "消灭怪物并进入森林深处吧");
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=7614879");
                                    cm.npc_LeaveField("oid=7614879");
                                    cm.npc_LeaveField("oid=7614880");
                                    cm.npc_LeaveField("oid=7614880");
                                    cm.npc_LeaveField("oid=7614881");
                                    cm.npc_LeaveField("oid=7614881");
                                    cm.npc_LeaveField("oid=7614882");
                                    cm.npc_LeaveField("oid=7614882");
                                    cm.npc_LeaveField("oid=7614883");
                                    cm.npc_LeaveField("oid=7614883");
                                    cm.npc_LeaveField("oid=7614884");
                                    cm.npc_LeaveField("oid=7614884");
                                    cm.npc_LeaveField("oid=7614885");
                                    cm.npc_LeaveField("oid=7614885");
                                    cm.npc_LeaveField("oid=7614886");
                                    cm.npc_LeaveField("oid=7614886");
                                    cm.npc_LeaveField("oid=7614887");
                                    cm.npc_LeaveField("oid=7614887");
                                    cm.npc_LeaveField("oid=7614888");
                                    cm.npc_LeaveField("oid=7614888");
                                    cm.npc_LeaveField("oid=7614889");
                                    cm.npc_LeaveField("oid=7614889");
                                    cm.npc_LeaveField("oid=7614890");
                                    cm.npc_LeaveField("oid=7614890");
                                    cm.npc_LeaveField("oid=7614891");
                                    cm.npc_LeaveField("oid=7614892");
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else if (status === V++) {
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.setPartner(1, 9400644, 80011692, 0);
                                    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                                    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
                                    cm.addPopupSay(0, 3000, "#b你跟在我后面。", '', 0);
                                    cm.spawnMobLimit(9402241, 1, -890, 131, 100);
                                    cm.spawnMobLimit(9402238, 1, -600, 131, 100);
                                    cm.spawnMobLimit(9402242, 1, 25, 132, 100);
                                    cm.spawnMobLimit(9402238, 1, 240, 132, 100);
                                    cm.spawnMobLimit(9402238, 1, -730, 309, 100);
                                    cm.spawnMobLimit(9402242, 1, -420, 312, 100);
                                    cm.spawnMobLimit(9402242, 1, 15, 308, 100);
                                    cm.spawnMobLimit(9402243, 1, 350, 305, 100);
                                    cm.spawnMobLimit(9402242, 1, -450, 404, 100);
                                    cm.spawnMobLimit(9402241, 1, 100, 404, 100);
                                    cm.spawnMobLimit(9402242, 1, 580, 404, 100);
                                    cm.addPopupSay(0, 3000, "#b这都是从哪儿冒出来的？", '', 0);
                                    cm.spawnMobLimit(9402243, 1, 1995, 404, 100);
                                    cm.spawnMobLimit(9402242, 1, 1717, 404, 100);
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