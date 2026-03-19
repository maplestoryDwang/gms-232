var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.getPlayer().getGender() == 0) {
    var V = 1531000;
  } else {
    var V = 1531052;
  }
  ;
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 645, -260);
      cm.curNodeEventEnd(true);
    } else {
      if (status === O++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === O++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === O++) {
            cm.sendNormalTalk_Bottom("我找到了凯内西斯的位置。", 37, 1531001, false, true);
          } else {
            if (status === O++) {
              cm.sendNormalTalk_Bottom("#face3#！！那是真的吗？", 37, 1531002, true, true);
            } else {
              if (status === O++) {
                cm.sendNormalTalk_Bottom("#face1#没错，凯内西斯还在陷坑里。", 37, 1531001, true, true);
              } else {
                if (status === O++) {
                  cm.sendNormalTalk_Bottom("#face4#？？那是什么意思，陷坑那里不是完全被破坏掉了嘛！", 37, 1531002, true, true);
                } else {
                  if (status === O++) {
                    cm.sendNormalTalk_Bottom("#face0#不，并没有被破坏，而是#b消失#k了。", 37, 1531001, true, true);
                  } else {
                    if (status === O++) {
                      cm.sendNormalTalk_Bottom("#face4#那是什么……\r\n我说你们，是不是有什么事情没有告诉我？", 37, 1531002, true, true);
                    } else {
                      if (status === O++) {
                        cm.sendNormalTalk_Bottom("#face1#尤娜，你应该还不知道，我们在做的事情，并不是单纯地扮演英雄，\r\n你有没有听说过，世界在逐渐地缩小这件事？", 37, 1531001, true, true);
                      } else {
                        if (status === O++) {
                          cm.sendNormalTalk_Bottom("#face3#……好像曾经在科学杂志上看到过一眼。", 37, 1531002, true, true);
                        } else {
                          if (status === O++) {
                            cm.sendNormalTalk_Bottom("#face1#没错，这并不是阴谋论，而是科学家明确观测到的现象。\r\n这个宇宙正在不断缩小，不，也许应该描述为被吸入某个地方才对。", 37, 1531001, true, true);
                          } else {
                            if (status === O++) {
                              cm.sendNormalTalk_Bottom("#face1#当然大多数人并没有办法切身地感受到变化，但继续这么下去，也许我们的世界就会整个消失不见了。", 37, 1531001, true, true);
                            } else {
                              if (status === O++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(250);
                              } else {
                                if (status === O++) {
                                  cm.fieldEffect_ProcessOnOffLayer("cube", "Map/Effect2.img/kinesis/cube", 0, 1000, 0, 0, 12, 4, 0, -1, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === O++) {
                                    cm.sendNormalTalk_Bottom("#face1#就在这个时候，凯内西斯形成了一种名为念力的特别能力。", 37, 1531001, false, true);
                                  } else {
                                    if (status === O++) {
                                      cm.sendNormalTalk_Bottom("#face1#凯内西斯的念力是动摇了物理学基础的异常现象。\r\n它违反了我们所知的所有物理规律，\r\n你能理解我在说什么吧？", 37, 1531001, true, true);
                                    } else {
                                      if (status === O++) {
                                        cm.sendNormalTalk_Bottom("那么一直以来你们扮作英雄的样子，其实并不只是单纯地在玩……", 37, 1531002, true, true);
                                      } else {
                                        if (status === O++) {
                                          cm.sendNormalTalk_Bottom("#face1#没错，我们是为了研究这一现象，需要临床数据。\r\n凯内西斯的力量范围到底有多大，又是否和这个世界的缩小现象有关。", 37, 1531001, true, true);
                                        } else {
                                          if (status === O++) {
                                            cm.fieldEffect_ProcessOnOffLayer("cube", '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === O++) {
                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === O++) {
                                                cm.sendNormalTalk_Bottom("#face2#我并不知道……#b#h0##k从未跟我提起过这种事情。", 37, 1531002, false, true);
                                              } else {
                                                if (status === O++) {
                                                  cm.sendNormalTalk_Bottom("估计是因为怕你担心，才这样的吧。", 37, 1531001, true, true);
                                                } else {
                                                  if (status === O++) {
                                                    cm.sendNormalTalk_Bottom("#face2##b#h0##k……不管他在哪儿，希望一定要活着回来。", 37, 1531002, true, true);
                                                  } else {
                                                    if (status === O++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else if (status === O++) {
                                                      cm.warp(101020400, 0, true);
                                                      cm.inGameDirectionEvent_SetHideEffect(0);
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