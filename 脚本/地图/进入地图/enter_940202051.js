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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, 0, -300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 80, 0, 465);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs18#另一边，阿波利斯新王战", ''], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(6000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#听说戴尔斯最终……还是失败了……", 37, 3001393, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#古代水晶还在平民翼人那些小毛孩手里……", 37, 3001393, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#这可怎么办……", 37, 3001393, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('1', "Effect/Direction14.img/illium/meawhile/0", 0, 2500, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                      } else {
                        if (status === V++) {
                          cm.effect_Text(["#fn黑体##fs20#幼小生命的无谓挣扎……", ''], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                        } else {
                          if (status === V++) {
                            cm.effect_Text(["#fn黑体##fs20#看起来甚是可怜呢……", ''], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
                            cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                    cm.dispose();
                                    cm.warp(cm.getNumberFromQuestInfo(34843, "map"), 0);
                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                    cm.setStandAloneMode(false);
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