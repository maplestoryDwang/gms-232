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
      cm.forceStartQuest(58776, '');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.spawnMobLimit(9400071, 1, 850, 35, 3);
      cm.spawnMobLimit(9400071, 1, 1862, 35, 3);
      cm.spawnMobLimit(9400072, 1, 1820, 125, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这是谁的记忆……？", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#在哪里，跑哪里去了！", 37, 9111023, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我要把你们全都吃掉！", 37, 9111023, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#我要把你嚼得稀巴烂，还要把剩下的人全都一扫而光！", 37, 9111023, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('先从这里出去吧……！', 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我得到那边去！", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(1, 3000, 0, 0);
                    } else if (status === V++) {
                      cm.eventSKill(0);
                      cm.setInGameDirectionMode(false, true, false);
                      cm.spawnMobLimit(9400071, 1, 160, 35, 3);
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