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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.sendNewEffects(17, [0, 1000, 1500, 0, 75]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 165, 3);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip(1);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3##b(看样子都处理好了。)", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3##b（门派里竟然出现了木杂鬼……怎么想怎么不对劲。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0##b（不过在消灭木杂鬼的时候，对新学会的技能有了更深的领悟。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(600);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_OneTimeAction(29, 1000000);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##b（……是因为回到家里放松下来了吗？突然感觉有点疲惫。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1##b（今天先休息一下吧。果然……还是家里最舒服啊。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(900);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNewEffects(14, [0, 2000, 1000]);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNewEffects(19, [0]);
                                      } else if (status === V++) {
                                        cm.dispose();
                                        cm.warp(875003007, 0, false);
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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