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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/ship2", 100);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -795, -150);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, 150, -280);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3500);
          } else {
            if (status === V++) {
              cm.userSetFieldFloating(993060003, 0, 30, 1000);
              cm.sendNormalTalk_Bottom("#face0#啊，已经搞定了吗？果然很快。\r\n怪物的数量明显减少了，电波也变得稳定了。", 37, 3003652, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#让我们结束调查，一定是因为出征的准备已经完成。", 37, 3003652, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#黑太阳周边的状态看上去很危险。\r\n好像很快就会波及这里。", 37, 3003652, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#黑魔法师……真的在那边……", 37, 3003652, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#不，不，马上出发吧。\r\n南哈特一定在等我们……", 37, 3003652, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.forceStartQuest(35602, '');
                          cm.forceCompleteQuest(35602);
                          cm.gainExp(171586691);
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
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
                              } else if (status === V++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.dispose();
                                cm.warp(993060002, 0, false);
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