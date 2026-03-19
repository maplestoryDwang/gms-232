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
      cm.eventSKill(0);
      var O = em.getMonster(9400070);
      O.setSize(300);
      cm.getMap().spawnMonsterOnGroundBelow(O, new java.awt.Point(463, -1105));
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1000, 525, -1200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("嗯……东西好像在那家伙身上。", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1000, 1000, 400, -235);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("因为有周围的妖鬼在，不好靠近。有没有可以不引起战斗的法子呢……", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else if (status === V++) {
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(false, true, false);
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