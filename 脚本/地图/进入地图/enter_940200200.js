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
      cm.gainSkillBuff(80002228);
      cm.forceStartQuest(34457, '');
      cm.forceStartQuest(34479, '');
      cm.forceStartQuest(34489, '');
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -150, -400);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(600);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -150, 140);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3300);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b(飞鱼飞来的天路，红雾似乎已经彻底消散了。)#k", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b(……在城市的噩梦彻底消失之前，似乎还是需要一点时间的。)#k", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(2);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(0);
                          cm.sendNormalTalk_Bottom("坐那个应该就可以逃离拉克兰了吧？", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(2);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(0);
                              cm.sendNormalTalk_Bottom("在梦与幻想结束之后，希望大家也都能够保重……", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(6);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else if (status === V++) {
                                  cm.dispose();
                                  cm.warp(940200202, 0, true);
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