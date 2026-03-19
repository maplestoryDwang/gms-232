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
      cm.npc_ChangeController(9400031, "oid=19785689", -460, 93, 1, -510, -410, 0, true, false);
      cm.npc_SetSpecialAction("oid=19785689", "summon", 0, 0);
      cm.npc_ChangeController(9400032, "oid=19785690", -550, 93, 1, -600, -500, 0, true, false);
      cm.npc_SetSpecialAction("oid=19785690", "summon", 0, 0);
      cm.npc_ChangeController(9400033, "oid=19785691", -610, 93, 1, -660, -560, 0, true, false);
      cm.npc_SetSpecialAction("oid=19785691", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19785692", -750, 93, 1, -800, -700, 0, true, false);
      cm.npc_SetSpecialAction("oid=19785692", "summon", 0, 0);
      cm.npc_ChangeController(9400035, "oid=19785693", -690, 93, 1, -740, -640, 0, true, false);
      cm.npc_SetSpecialAction("oid=19785693", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushMoveInfo(0, 200, 490, -80);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(6278);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4200);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=19785692", 1, 500, 150);
                cm.inGameDirectionEvent_AskAnswerTime(5200);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=19785692", 0);
                  cm.npc_setForceFlip("oid=19785692", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("这里有克隆乌龟，奈奈是不是就在这里？", 37, 9400034, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("啊，那样子肯定就是奈奈。", 37, 9400032, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=19785690", 1, 500, 200);
                        cm.inGameDirectionEvent_AskAnswerTime(5200);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=19785692", 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#和嘟嘟一样，看上去就像失去了感情的机器人……", 37, 9400032, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("也许奈奈也会像嘟嘟一样，被宝石吸收力量，并受到精神控制。", 37, 9400033, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我们快点救出奈奈吧", 37, 9400033, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("没错，我们得快点把他们一网打尽！", 37, 9400034, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=19785692", 1, 500, 150);
                                    cm.npc_SetForceMove("oid=19785690", 1, 500, 250);
                                    cm.npc_SetForceMove("oid=19785691", 1, 600, 200);
                                    cm.npc_SetForceMove("oid=19785689", 1, 500, 200);
                                    cm.npc_SetForceMove("oid=19785693", 1, 700, 150);
                                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                                  } else if (status === V++) {
                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                    cm.setStandAloneMode(false);
                                    cm.eventSKill(0);
                                    cm.warp(867111180, 0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.playerMessage(5, "穿过陷阱，寻找奈奈吧！");
                                    cm.npc_LeaveField("oid=19785689");
                                    cm.npc_LeaveField("oid=19785690");
                                    cm.npc_LeaveField("oid=19785691");
                                    cm.npc_LeaveField("oid=19785692");
                                    cm.npc_LeaveField("oid=19785693");
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