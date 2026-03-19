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
      cm.npc_ChangeController(9400590, "oid=7532865", -1300, 130, 23, -1350, -1250, 0, true, false);
      cm.npc_SetSpecialAction("oid=7532865", "summon", 0, 0);
      cm.npc_ChangeController(9400672, "oid=7532866", -1400, 130, 25, -1450, -1350, 0, true, false);
      cm.npc_SetSpecialAction("oid=7532866", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7532867", -1500, 130, 24, -1550, -1450, 0, true, false);
      cm.npc_SetSpecialAction("oid=7532867", "summon", 0, 0);
      cm.npc_ChangeController(9400676, "oid=7532868", -1550, 130, 12, -1600, -1500, 0, true, false);
      cm.npc_SetSpecialAction("oid=7532868", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7532869", -1650, 130, 28, -1700, -1600, 0, true, false);
      cm.npc_SetSpecialAction("oid=7532869", "summon", 0, 0);
      cm.npc_ChangeController(9400589, "oid=7532870", -60, 130, 16, -110, -10, 0, true, false);
      cm.npc_SetSpecialAction("oid=7532870", 'summon', 0, 0);
      cm.npc_ChangeController(9400592, "oid=7532871", 130, 130, 18, 80, 180, 0, true, false);
      cm.npc_SetSpecialAction("oid=7532871", "summon", 0, 0);
      cm.npc_ChangeController(9400596, "oid=7532872", 400, 130, 13, 350, 450, 0, true, false);
      cm.npc_SetSpecialAction("oid=7532872", 'summon', 0, 0);
      cm.npc_ChangeController(9400635, "oid=7532873", 460, 130, 22, 410, 510, 0, true, false);
      cm.npc_SetSpecialAction("oid=7532873", "summon", 0, 0);
      cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#咳……咳！等……等一下！这里，我在这里！", 37, 9400590, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.inGameDirectionEvent_AskAnswerTime(250);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=7532870", -1);
            cm.inGameDirectionEvent_AskAnswerTime(250);
          } else {
            if (status === V++) {
              cm.sendNewEffects(12, [3000, -1200, 45, 0, 0]);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=7532865", 1, 600, 200);
                cm.inGameDirectionEvent_AskAnswerTime(250);
                cm.updateInfoQuest(49004, "QET=QAFjwsKV1QE$");
                cm.updateInfoQuest(49004, "QET=QAFjwsKV1QE$");
                cm.updateInfoQuest(49004, "QET=QAFjwsKV1QE$");
                cm.forceStartQuest(49004, '');
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=7532866", 1, 600, 180);
                  cm.inGameDirectionEvent_AskAnswerTime(250);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=7532867", 1, 600, 180);
                    cm.inGameDirectionEvent_AskAnswerTime(250);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=7532868", 1, 580, 180);
                      cm.inGameDirectionEvent_AskAnswerTime(250);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=7532869", 1, 570, 180);
                        cm.inGameDirectionEvent_AskAnswerTime(250);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=7532871", -1);
                          cm.inGameDirectionEvent_AskAnswerTime(250);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=7532872", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(250);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=7532873", -1);
                              cm.sendNormalTalk_Bottom("#face0#…斯洛克？！", 37, 9400589, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNewEffects(12, [1000, -600, 45, 0, 0]);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=7532870", -1, 100, 200);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=7532870", "attack2", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=7532866", "die1", 0, 0);
                                      cm.npc_SetSpecialAction("oid=7532867", 'die1', 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=7532866");
                                        cm.npc_LeaveField("oid=7532866");
                                        cm.npc_LeaveField("oid=7532867");
                                        cm.npc_LeaveField("oid=7532867");
                                        cm.sendNormalTalk_Bottom("#face0#咳呵！", 37, 9400590, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0##h0#！！！", 37, 9400589, true, true);
                                        } else if (status === V++) {
                                          cm.forceStartQuest(64109, '');
                                          cm.warp(867202620, 0);
                                          cm.setInGameDirectionMode(false, true, false);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;