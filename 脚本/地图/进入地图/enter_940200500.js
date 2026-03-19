var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  status++;
  if (!cm.isQuestActive(34600) && !cm.isQuestFinished(34600)) {
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
      cm.updateInfoQuest(34655, "0=1");
      cm.forceCompleteQuest(34655);
      cm.updateInfoQuest(34655, "gender=1;0=1");
      cm.updateInfoQuest(34655, "10=1;gender=1;0=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 288, -57);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.playVideoByScript("Cadena1.avi");
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(4);
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_OneTimeAction(4, 100);
                    cm.sendNormalTalk_Bottom("#face4#不要！！！！！！！！！！！！！！！！！！！！！！！", 37, 3001270, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(5);
                          cm.inGameDirectionEvent_AskAnswerTime(600);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(0);
                            cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(5);
                              cm.inGameDirectionEvent_AskAnswerTime(600);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(5);
                                cm.inGameDirectionEvent_AskAnswerTime(600);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_MoveAction(0);
                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_OneTimeAction(4, 1000);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.getTopMsgFont("点击灯泡，即可开始任务。任务状态快捷键(Q)/选择型(J)", 3, 20, 20, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_OnUserEff("UI/tutorial.img/34");
                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                            } else {
                                              if (status === V++) {
                                                cm.setInGameDirectionMode(false, false, false);
                                                cm.setStandAloneMode(false);
                                                while (cm.getLevel() < 10) {
                                                  cm.getPlayer().levelUp();
                                                }
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