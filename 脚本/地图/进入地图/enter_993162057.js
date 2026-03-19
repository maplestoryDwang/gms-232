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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, 22);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(4);
        cm.emotion(1, 3000);
        cm.setNPC_Fadein(3001676, 1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#……第107个。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(自从我被再次吸入亚空间之中，已经过去多久了？\r\n如今，连在现世经历的事情，也渐渐变得模糊起来。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, 200, 22);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#你是第108个。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#永远背负着没能守护主君的罪孽活下去。", 36, 3001938 - cm.getPlayer().getGender(), true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#这是你我唯一的赎罪之法。", 36, 3001938 - cm.getPlayer().getGender(), true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.forceCompleteQuest(39655);
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                      cm.warp(993162058, 0, false);
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