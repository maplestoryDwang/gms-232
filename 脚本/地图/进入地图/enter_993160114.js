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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001655, "oid=3018556", 907, 25, 66, 857, 957, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3018556", 'summon', 0, 0);
      cm.npc_ChangeController(3001651, "oid=3018557", 1574, -11, 80, 1524, 1624, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3018557", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 907, 15);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4000);
            cm.effect_Text(["#fn黑体##fs18#片刻后，商业街"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#约定的时间已经到了啊……", 37, 3001655, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 1036, 15);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(1, 360);
                    cm.npc_SetForceMove("oid=3018557", 1, 360, 150);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#呼……已经来了呢，为了正式开始实施作战计划，\r\n我稍微做了点准备，就来迟了。法师，你那边怎么样？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#是，我也准备就绪。", 37, 3001655, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#作战计划就是我刚刚说的那样，我会去寺院那边对付怪物老鼠，\r\n然后法师你要按照约定……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我知道。", 37, 3001655, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#那这就前往我们各自所负责的任务地点吧。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#好，那这就去吧，愿你能平安无事。", 37, 3001655, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.forceCompleteQuest(39536);
                                      cm.gainExp(6029);
                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
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
                                          } else if (status === V++) {
                                            cm.setStandAloneMode(false);
                                            cm.warp(410000200, 4, false);
                                            cm.eventSKill(0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.npc_LeaveField("oid=3018556");
                                            cm.npc_LeaveField("oid=3018556");
                                            cm.npc_LeaveField("oid=3018557");
                                            cm.npc_LeaveField("oid=3018557");
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
}