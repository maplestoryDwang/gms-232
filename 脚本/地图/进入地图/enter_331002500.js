var status = -1;
function action(f, E, e) {
  if (f == 0) {
    status--;
  } else {
    status++;
  }
  if (cm.getPlayer().getGender() == 0) {
    var V = 1531000;
  } else {
    var V = 1531052;
  }
  ;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.onSetMapObjectCreateLayer("class_flyObj", 1, 0, 0);
      cm.onSetMapObjectCreateLayerMore("classroom", 2, "night", 1);
      cm.onSetMapObjectCreateLayerMore("class_dayObj", 2, "night", 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === O++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === O++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === O++) {
            cm.sendNormalTalk_Bottom('谁在那里？', 37, V, false, true);
          } else {
            if (status === O++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === O++) {
                cm.sendNormalTalk_Bottom('难道是我听错了吗……', 37, V, false, true);
              } else {
                if (status === O++) {
                  cm.sendNormalTalk_Bottom("#face0#呃……！！头……？", 37, V, true, true);
                } else {
                  if (status === O++) {
                    cm.inGameDirectionEvent_MoveAction(4);
                    cm.emotion(7, 9000);
                    cm.userSetFieldFloating(331002500, 20, 20, 100);
                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === O++) {
                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === O++) {
                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === O++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === O++) {
                            cm.onSetMapObjectCreateLayer("class_flyObj", 1, 255, 1000);
                            cm.onSetMapObjectCreateLayer("class_dayObj", 1, 0, 1000);
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === O++) {
                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === O++) {
                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === O++) {
                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === O++) {
                                    cm.userSetFieldFloating(331002500, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === O++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === O++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === O++) {
                                          cm.onSetMapObjectCreateLayer("class_flyObj", 1, 0, 0);
                                          cm.onSetMapObjectCreateLayer("class_dayObj", 1, 255, 0);
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === O++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                          } else {
                                            if (status === O++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === O++) {
                                                cm.sendNormalTalk_Bottom("#face0#呃……我的头。", 37, V, false, true);
                                              } else {
                                                if (status === O++) {
                                                  cm.sendNormalTalk_Bottom("怎么回事？我刚刚好像暂时失去了意识，\r\n虽然只是暂时的，但我有种完全没法控制自己力量的感觉。", 37, V, true, true);
                                                } else {
                                                  if (status === O++) {
                                                    cm.sendNormalTalk_Bottom("……应该没什么问题吧，可能是最近有点累了，赶紧回去吧。", 37, V, true, true);
                                                  } else {
                                                    if (status === O++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else if (status === O++) {
                                                      cm.updateInfoQuest(22700, "V01=1;V02=1;q21end=0;coNight=1;kinetuto=1;kinetuto2=1;E1=1;blackCat=1;E2=1;E3=1");
                                                      cm.forceCompleteQuest(22728);
                                                      cm.gainExp(1200);
                                                      cm.setStandAloneMode(false);
                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                      cm.eventSKill(0);
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