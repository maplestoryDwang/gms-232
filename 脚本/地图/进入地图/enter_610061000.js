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
      cm.updateInfoQuest(61333, "act1=610061000");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("勇敢而强大的战士们啊，", 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("请聆听我的话语。", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("我是你们的兄弟，", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue('能够赐予你们力量……', 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("我的灵魂徘徊在黑暗中，", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("身体也不知所踪。", 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("我只知道我曾是一名战士，", 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("一名想要变强的战士……", 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("如果你们也想变强，", 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("无论你们出身何处，", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("都请前来找我……", 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(4200);
                            } else if (status === V++) {
                              cm.eventSKill(0);
                              cm.dispose();
                              cm.warp(610061010, 0, false);
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