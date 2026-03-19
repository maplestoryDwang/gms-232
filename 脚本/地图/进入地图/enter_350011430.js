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
      cm.getMap().resetFully();
      cm.useItem(2023418);
      cm.useItem(2023419);
      cm.useItem(2023420);
      cm.npc_ChangeController(1540446, "oid=32885", 878, 16, 2, 830, 928, 1, false, 0, false);
      cm.updateInfoQuest(33128, "act1=350011430");
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/secretmissionbase", 100, 60);
      cm.npc_ChangeController(1540504, "oid=12980386", 1070, 10, 4, 1020, 1120, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12980386", "summon", 0, 0);
      cm.npc_ChangeController(1540503, "oid=12980387", 1020, 10, 4, 970, 1070, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12980387", "summon", 0, 0);
      cm.npc_ChangeController(1540502, "oid=12980388", 970, 10, 5, 920, 1020, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=12980388", "summon", 0, 0);
      cm.fieldEffect_BackgroundCanvas(1, 30, 30, 30, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.getMap().spawnReactorIfNotExist(3500021, 0, 1618, 13, 0, '布吉');
      cm.sendNormalTalk_Bottom('找到了，布吉在这里！', 37, 1540502, false, true);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Voice3.img/BlackHeaven/3_6/1", 100);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 600, 1487, 10);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(333);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=12980386", 1, 200, 300);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=12980387", 1, 260, 300);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=12980388", 1, 300, 300);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("幸好她还平安无事。", 37, 1540504, false, true);
                  cm.effect_Voice("Voice3.img/BlackHeaven/3_6/2", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("这空间究竟是怎么回事？", 37, 1540502, true, true);
                    cm.effect_Voice("Voice3.img/BlackHeaven/3_6/3", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我们以后再思考吧，哥哥。我们得先把人质救出去。", 37, 1540503, true, true);
                      cm.effect_Voice("Voice3.img/BlackHeaven/3_6/4", 100);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=12980386", "spin", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                        cm.effect_Voice("Weapon.img/spear/Attack", 100);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=12980387", "spin", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                          cm.effect_Voice("Weapon.img/spear/Attack", 100);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=12980388", "spin", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                            cm.effect_Voice("Weapon.img/spear/Attack", 100);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=12980387");
                              cm.npc_LeaveField("oid=12980387");
                              cm.npc_LeaveField("oid=12980386");
                              cm.npc_LeaveField("oid=12980386");
                              cm.npc_ChangeController(1540502, "oid=12980799", 1528, 6, 13, 1478, 1578, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=12980799", "summon", 0, 0);
                              cm.npc_LeaveField("oid=12980388");
                              cm.npc_LeaveField("oid=12980388");
                              cm.npc_SetSpecialAction("oid=12980799", "tower", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                cm.effect_Voice("Weapon.img/barehands/Attack", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                  cm.effect_Voice("Weapon.img/barehands/Attack", 100);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=12980799", "towerEnd", -1, 1);
                                    cm.sendNormalTalk_Bottom("请到我们上面来，把铁链摧毁吧，队长！", 37, 1540502, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 500, 0, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else if (status === V++) {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;