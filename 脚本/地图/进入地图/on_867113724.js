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
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9400332, "oid=22494168", -285, 80, 8, -335, -235, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=22494168", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=22494168", 'action', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("噢噢……动了……秋千荡起来了。", 5, 9400332, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b嗯，我在推。怎么样？还害怕吗？", 3, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("嗯……不……不害怕。再大力点推好吗？", 5, 9400332, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#b好，飞咯。", 3, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=22494168", 'action2', 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(7600);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("哇！原来是这样的感觉！", 5, 9400332, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#b怎么样？好玩吗？", 3, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("嗯！我很喜欢，太好玩了！", 5, 9400332, true, true);
                        } else {
                          if (status === V++) {
                            cm.updateInfoQuest(63110, "endCheck=1");
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else if (status === V++) {
                            cm.setStandAloneMode(false);
                            cm.dispose();
                            cm.warp(867113500, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;