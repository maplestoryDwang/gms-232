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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9400597, "oid=7536715", -638, -70, 1, -688, -588, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536715", "summon", 0, 0);
      cm.npc_ChangeController(9400599, "oid=7536716", -550, -70, 1, -600, -500, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536716", "summon", 0, 0);
      cm.npc_ChangeController(9400599, "oid=7536717", -450, -70, 1, -500, -400, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536717", "summon", 0, 0);
      cm.npc_ChangeController(9400583, "oid=7536718", -10, -70, 1, -60, 40, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536718", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNormalTalk_Bottom("#face0#你就当平时插鱼就行了！", 37, 9400583, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=7536716", 'attack1', 0, 1);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=7536717", "attack1", 0, 1);
          cm.inGameDirectionEvent_AskAnswerTime(700);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=7536715", "attack1", 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#抓鱼的时候也会扔吗？", 37, 9400583, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#哎呀！管不了那么多！", 37, 9400597, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, -305, -65);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_QTE(4);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=7536715", "attack2", 0, 1);
                          cm.inGameDirectionEvent_MoveAction(4);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                            cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(0);
                                cm.addPopupSay(9400597, 3000, "#face0#咳呃，什么鱼跑的这么快？啊？！", '', 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.playerMessage(-1, "成为古纳德和渔夫们的修炼对象，直到他们累垮。");
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else if (status === V++) {
                                      cm.npc_LeaveField("oid=7536715");
                                      cm.npc_LeaveField("oid=7536715");
                                      cm.npc_LeaveField("oid=7536716");
                                      cm.npc_LeaveField("oid=7536716");
                                      cm.npc_LeaveField("oid=7536717");
                                      cm.npc_LeaveField("oid=7536717");
                                      cm.npc_LeaveField("oid=7536718");
                                      cm.npc_LeaveField("oid=7536718");
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.spawnMobLimit(9402331, 1, -650, -115, 1);
                                      cm.spawnMobLimit(9402332, 1, -550, -115, 1);
                                      cm.spawnMobLimit(9402332, 1, -450, -115, 1);
                                      cm.dispose();
                                      cm.forceJoinEvent("莫奈德_地图_Act3.4_战斗训练2");
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