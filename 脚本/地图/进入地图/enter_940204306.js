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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -300, -40);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.npc_ChangeController(3003480, "oid=2011278", -440, 30, 6, -490, -390, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2011278", "summon", 0, 0);
          cm.npc_ChangeController(3003482, "oid=2011279", 1350, -300, 14, 1300, 1400, 1, false, 1000, false);
          cm.npc_SetSpecialAction("oid=2011279", "summon", 0, 0);
          cm.npc_ChangeController(3003482, "oid=2011280", 1100, 0, 3, 1050, 1150, 0, false, 1000, false);
          cm.npc_SetSpecialAction("oid=2011280", "summon", 0, 0);
          cm.npc_ChangeController(3003484, "oid=2011281", 1450, 0, 2, 1400, 1500, 1, false, 1000, false);
          cm.npc_SetSpecialAction("oid=2011281", "summon", 0, 0);
          cm.npc_ChangeController(3003484, "oid=2011282", 1075, -300, 10, 1025, 1125, 0, false, 1000, false);
          cm.npc_SetSpecialAction("oid=2011282", 'summon', 0, 0);
          cm.npc_ChangeController(3003483, "oid=2011283", 1250, 0, 3, 1200, 1300, 0, false, 1000, false);
          cm.npc_SetSpecialAction("oid=2011283", "summon", 0, 0);
          cm.npc_ChangeController(3003485, "oid=2011284", 1600, 0, 2, 1550, 1650, 1, false, 1000, false);
          cm.npc_SetSpecialAction("oid=2011284", 'summon', 0, 0);
          cm.npc_ChangeController(3003485, "oid=2011285", 1750, 0, 2, 1700, 1800, 1, false, 1000, false);
          cm.npc_SetSpecialAction("oid=2011285", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=2011278", 1, 500, 160);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(2500, 1500, 2500, 100, -40);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#看那个！", 37, 3003480, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 1180, -150);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('那个？！', 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face4#好像是守卫这里的士兵！因为她的力量而变成了那个样子！", 37, 3003480, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face4#必须击败他们，然后继续前进！", 37, 3003480, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
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
                                        } else {
                                          if (status === V++) {
                                            cm.playerMessage(5, "必须消灭掉区域内的所有怪物，才能移动到下一地区。");
                                            cm.npc_LeaveField("oid=2011278");
                                            cm.npc_LeaveField("oid=2011279");
                                            cm.npc_LeaveField("oid=2011280");
                                            cm.npc_LeaveField("oid=2011281");
                                            cm.npc_LeaveField("oid=2011282");
                                            cm.npc_LeaveField("oid=2011283");
                                            cm.npc_LeaveField("oid=2011284");
                                            cm.npc_LeaveField("oid=2011285");
                                            cm.dispose();
                                            var O = cm.getEventManager("莫拉斯_剧情_战斗4");
                                            O.startInstance(cm.getPlayer());
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;