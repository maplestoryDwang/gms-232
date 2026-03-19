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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -51, -139);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
              cm.fieldEffect_复合图片动画(["Effect/Direction9.img/HoyoungEffect/8/skeleton", "02_gone", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
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
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -32, -140);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face7#要说那是梦，可实在是太逼真了，就像真的来到了道观，\r\n嘻嘻……赶紧去找师父的道术集……", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（我打开师父的抽屉，取出道术集，没错……就是这些内容，\r\n这些都残留在我的潜意识里啊。）", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#好吧，内容已经记到脑子里了，现在就再次回到现实吧。\r\n这是在做梦……这是在做梦，睁开眼睛吧，哈！", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                  if (status === V++) {
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
                                          cm.warp(993160124, 0, false);
                                          cm.setStandAloneMode(false);
                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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