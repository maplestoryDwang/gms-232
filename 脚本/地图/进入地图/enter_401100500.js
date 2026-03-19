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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(3001015, "oid=102438254", 568, -140, 3, 518, 618, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=102438254", 'summon', 0, 0);
      cm.npc_ChangeController(3000122, "oid=102438255", 483, 164, 7, 433, 533, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=102438255", "summon", 0, 0);
      cm.npc_ChangeController(3000122, "oid=102438256", 413, 164, 7, 363, 463, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=102438256", 'summon', 0, 0);
      cm.npc_ChangeController(3000128, "oid=102438257", 353, 164, 9, 303, 403, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=102438257", "summon", 0, 0);
      cm.npc_ChangeController(3000122, "oid=102438258", 193, 164, 12, 143, 243, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=102438258", "summon", 0, 0);
      cm.npc_ChangeController(3000122, "oid=102438259", 103, 164, 14, 53, 153, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=102438259", "summon", 0, 0);
      cm.npc_ChangeController(3000122, "oid=102438260", 13, 164, 15, -37, 63, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=102438260", "summon", 0, 0);
      cm.npc_ChangeController(3000125, "oid=102438261", -83, 164, 17, -133, -33, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=102438261", "summon", 0, 0);
      cm.sendNormalTalk("呼……幽灵的数量真是太多了，到底得杀到什么时候才结束。", 17, 3001015, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("不过看那边的情况差不多快结束了。哈哈……", 17, 3001015, true, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 600, 293, 182);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1331);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("任务基本上已经做完了，这下只要等待伊黛娜的魔法就行了吧？", 17, 3001015, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(0, 600, 293, 182);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(935);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("你等我很久了吧！你的任务已经结束，辛苦了！这帮家伙只要被我的魔法击中，就全都会死翘翘啦！", 1, 3001015, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=102438254", "HyperMagic", 0, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(2280);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ScreenMsg("tdAnbur/idea_hyperMagic");
                            cm.inGameDirectionEvent_AskAnswerTime(900);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=102438255", "hit1", 0, 1);
                              cm.npc_SetSpecialAction("oid=102438256", "hit1", 0, 1);
                              cm.npc_SetSpecialAction("oid=102438257", "hit1", 0, 1);
                              cm.npc_SetSpecialAction("oid=102438258", "hit1", 0, 1);
                              cm.npc_SetSpecialAction("oid=102438259", "hit1", 0, 1);
                              cm.npc_SetSpecialAction("oid=102438260", "hit1", 0, 1);
                              cm.npc_SetSpecialAction("oid=102438261", 'hit1', 0, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(900);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=102438255", "hit1", 0, 1);
                                cm.npc_SetSpecialAction("oid=102438256", 'hit1', 0, 1);
                                cm.npc_SetSpecialAction("oid=102438257", 'hit1', 0, 1);
                                cm.npc_SetSpecialAction("oid=102438258", "hit1", 0, 1);
                                cm.npc_SetSpecialAction("oid=102438259", "hit1", 0, 1);
                                cm.npc_SetSpecialAction("oid=102438260", "hit1", 0, 1);
                                cm.npc_SetSpecialAction("oid=102438261", "hit1", 0, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1800);
                              } else if (status === V++) {
                                cm.forceCompleteQuest(31830);
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                cm.eventSKill(0);
                                cm.warp(940100001, 0, false);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.npc_LeaveField("oid=102438254");
                                cm.npc_LeaveField("oid=102438254");
                                cm.npc_LeaveField("oid=102438255");
                                cm.npc_LeaveField("oid=102438255");
                                cm.npc_LeaveField("oid=102438256");
                                cm.npc_LeaveField("oid=102438256");
                                cm.npc_LeaveField("oid=102438257");
                                cm.npc_LeaveField("oid=102438257");
                                cm.npc_LeaveField("oid=102438258");
                                cm.npc_LeaveField("oid=102438258");
                                cm.npc_LeaveField("oid=102438259");
                                cm.npc_LeaveField("oid=102438259");
                                cm.npc_LeaveField("oid=102438260");
                                cm.npc_LeaveField("oid=102438260");
                                cm.npc_LeaveField("oid=102438261");
                                cm.npc_LeaveField("oid=102438261");
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