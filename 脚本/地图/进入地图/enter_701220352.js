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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/effect/tuto/BalloonMsg0/0"], [2000, -377, -34, 1, 0, 1, 1, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/tuto/BalloonMsg0/1"], [2000, 456, -79, 1, 0, 1, 1, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/tuto/BalloonMsg0/2"], [2000, -14, 58, 1, 0, 1, 1, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/tuto/BalloonMsg0/3"], [2000, -377, -34, 1, 0, 1, 1, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/tuto/BalloonMsg0/4"], [2000, 456, -79, 1, 0, 1, 1, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/tuto/BalloonMsg0/5"], [2000, -14, 58, 1, 0, 1, 1, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/tuto/BalloonMsg0/6"], [2000, -377, -34, 1, 0, 1, 1, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/tuto/BalloonMsg0/7"], [2000, 456, -79, 1, 0, 1, 1, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/tuto/BalloonMsg0/8"], [2000, -377, -34, 1, 0, 1, 1, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/tuto/BalloonMsg0/9"], [2000, -14, 58, 1, 0, 1, 1, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/tuto/BalloonMsg0/10"], [2000, -377, -34, 1, 0, 1, 1, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction_CN.img/effect/tuto/BalloonMsg0/11"], [2000, 456, -79, 1, 0, 1, 1, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else if (status === V++) {
                            cm.updateInfoQuest(62012, "secret=1;hidden=hid1;find=1");
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispose();
                            cm.warp(701220351, 0);
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