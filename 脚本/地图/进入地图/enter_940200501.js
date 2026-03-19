var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestActive(34600) && !cm.isQuestFinished(34600)) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(34655, "10=1;11=1;gender=1;0=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(1, cm.getPlayer().getId(), 583, 293);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(1, 1);
      cm.inGameDirectionEvent_AskAnswerTime(10);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(1, 170);
            cm.inGameDirectionEvent_AskAnswerTime(1700);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#呼，我说据点怎么这么安静。因为大家都出去执行任务了。", 37, 3001270, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(1, 180);
                cm.inGameDirectionEvent_AskAnswerTime(1800);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(5);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(6);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(6);
                        cm.inGameDirectionEvent_AskAnswerTime(600);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(5);
                          cm.inGameDirectionEvent_AskAnswerTime(600);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#等等，也就是说我已经彻底自由了？这下没人跟我唠唠叨叨了！", 37, 3001270, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(0);
                              cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(5);
                                cm.inGameDirectionEvent_AskAnswerTime(600);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_MoveAction(0);
                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 120);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#……哈哈，好，那不如出去大玩一场？仔细想想，最近过得太安逸了。", 37, 3001270, false, true);
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
                                            cm.playerMessage(5, "请跟随箭头走出传送口。");
                                            cm.getTopMsgFont("请跟随箭头走出传送口。", 3, 20, 20, 0);
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                          } else if (status === V++) {
                                            cm.setInGameDirectionMode(false, false, false);
                                            cm.setStandAloneMode(false);
                                            cm.dispose();
                                          } else {
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {} else if (status === V++) {
        cm.warp(992000000, 0);
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(false, true);
        cm.setStandAloneMode(false);
        cm.dispose();
        cm.npc_LeaveField(2540000);
      } else {
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;