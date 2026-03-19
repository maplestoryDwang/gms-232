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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_ForcedFlip(0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 200, -200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNextNoESC_Bottom("#face0#哦，太阳马上就要升到山坡上了。\r\n好了，把与想用罗盘寻找的东西有关的东西放上去吧。", 1013351);
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
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 120);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNext_Bottom("#face0##b（把遗物放到了罗盘上。\r\n阳光变得更耀眼了，照亮了整个山坡。）#k", 1013358);
                } else {
                  if (status === V++) {
                    cm.userSetFieldFloating(910090310, 5, 5, 50);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.userSetFieldFloating(910090310, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/compass");
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, -170, -200);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(1, 120);
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                          } else {
                            if (status === V++) {
                              cm.sendNextNoESC_Bottom("#face2#哇，启动了！", 1013350);
                            } else {
                              if (status === V++) {
                                cm.sendNext_Bottom("#face3#那里是……", 1013358);
                              } else {
                                if (status === V++) {
                                  cm.sendNext_Bottom("#face3##b（虽然是在遗迹附近，但看上去只是个草木茂盛的地方……\r\n那里到底有什么呢？）#k", 1013358);
                                } else {
                                  if (status === V++) {
                                    cm.sendNextNoESC_Bottom("#face0#罗盘指向了废墟那边的森林。\r\n那里有和怪声有关的什么东西吗……", 1013350);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNextNoESC_Bottom("#face0#哈……祝你们一路顺风。不过我可不去。\r\n虽然有点好奇，但那里太可怕了……不，我太忙，所以不去了。", 1013351);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNextNoESC_Bottom("#face0#哎呀，装什么装？难道不是因为害怕吗？\r\n算了……知道了。那我跟勇士去那里看看。再见。", 1013350);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                } else if (status === V++) {
                                                  cm.setStandAloneMode(false);
                                                  cm.setInGameDirectionMode(false, false, false);
                                                  cm.forceCompleteQuest(35922);
                                                  cm.warp(100051030);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;