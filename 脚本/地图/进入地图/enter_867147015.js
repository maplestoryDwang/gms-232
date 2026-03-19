var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.npc_ChangeController(9401054, 'oid=201036', 1305, 70, 15, 1280, 1380, 4, true, 0, false);
      cm.npc_ChangeController(9401054, 'oid=201037', 625, -210, 31, 592, 686, 3, true, 0, false);
      cm.npc_ChangeController(9401054, "oid=201038", 801, 69, 2, 801, 901, 4, true, 0, false);
      cm.npc_ChangeController(9401054, "oid=201039", 1077, 73, 14, 1077, 1139, 5, true, 0, false);
      cm.npc_ChangeController(9401054, 'oid=201040', -83, 67, 5, -179, -79, 4, true, 0, false);
      cm.npc_ChangeController(9401054, 'oid=201041', 40, 68, 6, -43, 57, 5, true, 0, false);
      cm.npc_ChangeController(9401054, "oid=201042", 186, 74, 3, 177, 258, 4, true, 0, false);
      cm.npc_ChangeController(9401054, "oid=201043", -211, 74, 4, -311, -211, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9401123, "oid=8696648", 1000, -245, 32, 950, 1050, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=8696648", "summon", 0, 0);
      cm.npc_ChangeController(9401124, "oid=8696649", 1170, -245, 33, 1120, 1220, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=8696649", "summon", 0, 0);
      cm.sendNewEffects(12, [0, 810, -300, 0, 0]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.sendNewEffects(12, [4000, -50, -80, 0, 0]);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("呜哇啊啊！这里有水流，果然到处都是食石者。", 37, 9401029, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNewEffects(19, [0]);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=8696648", -1, 100, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("这种植物在上层没见过呢。唔～～好像有一股隐约的香气。", 37, 9401029, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……你最好还是什么都别碰，这里可能混有麻痹成分。", 37, 9401030, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("呃啊啊啊啊？我，我会被麻痹吗？", 37, 9401029, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("不是这个意思，别大惊小怪的。", 37, 9401030, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("哼，哼。", 37, 9401029, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#b哈哈，好了。我们开始吧？", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("好的！好的！啊！队长，请你使用口号技能吧！给我们加油！", 37, 9401029, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.eventSKill(0);
                                        cm.updateInfoQuest(64772, "chk1=1");
                                        cm.npc_LeaveField("oid=8696648");
                                        cm.npc_LeaveField("oid=8696648");
                                        cm.npc_LeaveField("oid=8696649");
                                        cm.npc_LeaveField("oid=8696649");
                                        cm.dispose();
                                        var O = cm.getEventManager("深渊远征队_教程3");
                                        O.startInstance(cm.getPlayer());
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