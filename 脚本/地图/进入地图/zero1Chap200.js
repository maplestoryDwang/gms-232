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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("虽然来到了这里……但是那个#p2420007#能帮我们找回女神之泪吗？看他的样子，说什么沙图团之类的，我看也就那么回事。", 41, 2400005, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("……已经到头了……", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("……感觉这附近有点奇怪……？你不觉得地面有点空空吗，好像地下有个空间……如果下边就是沙图团的据点……那可太厉害了？", 41, 2400005, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("看似空空的房子，但是有人进出过的痕迹……", 41, 2400006, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("好，那么我们进去看看。说不定能找到什么有用的情报。", 41, 2400005, true, true);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.warp(322000000, 15, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;