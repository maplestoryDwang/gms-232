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
      cm.npc_ChangeController(3003476, 'oid=205318', 1591, 63, 5, 1541, 1641, 1, false, false);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_同时移动镜头和人(2, 180);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("没有开启过的痕迹……要打开看看吗？", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_OneTimeAction(16, 0);
            cm.fieldEffect_PlayFieldSound("Sound/Reactor.img/2002001/0/Hit", 200);
            cm.inGameDirectionEvent_AskAnswerTime(700);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_OneTimeAction(16, 0);
              cm.fieldEffect_PlayFieldSound("Sound/Reactor.img/2002001/0/Hit", 200);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('一动都不动。', 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('那样的话……', 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('哎嗨！', 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_OneTimeAction(10, 0);
                      cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/othello/criHit", 200);
                      cm.inGameDirectionEvent_AskAnswerTime(700);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_OneTimeAction(10, 0);
                        cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/othello/criHit", 200);
                        cm.inGameDirectionEvent_AskAnswerTime(700);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_OneTimeAction(10, 0);
                          cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/othello/criHit", 200);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("呼呼……不行。一点缺口都没有？！", 57, 0, false, true);
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
                                    cm.dispose();
                                    cm.warp(450006330, 2, true);
                                    cm.setStandAloneMode(false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;