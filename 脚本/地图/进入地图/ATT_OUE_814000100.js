var status = -1;
function action(f, E, e) {
  if (f > 0) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true);
    cm.sendNextSNoESC_New("喔喔~ 這里就是 '异世界'吗? 看来是一个个非常和平的村庄? 话说怎么在屋顶上啊…需要先去找个安全下去路线吧…", 57, 1);
  } else {
    if (status == 1) {
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status == 2) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 4000, 3402, 184);
      } else {
        if (status == 3) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status == 4) {
            cm.sendNextSNoESC_New("啊！那边有个梯子，另外用那个爬下去到地上吧！", 57, 1);
          } else {
            if (status == 5) {
              cm.fieldEffect_Tremble(0, 300, 30);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status == 6) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status == 7) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status == 8) {
                    cm.sendNextSNoESC_New("哇啊！什么啊！？", 57, 1);
                  } else {
                    if (status == 9) {
                      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, -800, 184);
                    } else {
                      if (status == 10) {
                        cm.spawnMonster(9460029, -800, 395);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status == 11) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status == 12) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status == 13) {
                              cm.sendNextSNoESC_New("到底是什么什么事情了？那是巨人？竟然在吃人！？不管如何这里很危险！使用那梯子先逃吧！！", 57, 1);
                            } else if (status == 14) {
                              cm.killMob(9460029);
                              cm.setInGameDirectionMode(false);
                              cm.warp(814000200, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;