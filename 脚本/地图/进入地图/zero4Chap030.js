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
      cm.npc_ChangeController(2450033, 'oid=26487', -1270, -254, 35, -1320, -1220, 1, false, 0, false);
      cm.npc_ChangeController(2450034, "oid=26488", -1370, -254, 34, -1420, -1320, 1, false, 0, false);
      cm.onZeroInfo(2);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.spawnMobLimit(9300769, 1, -1887, -14, 100);
      cm.spawnMobLimit(9300769, 1, -1687, -14, 100);
      cm.spawnMobLimit(9300769, 1, -1487, -14, 100);
      cm.spawnMobLimit(9300769, 1, -1287, -14, 100);
      cm.spawnMobLimit(9300769, 1, -1087, -14, 100);
      cm.spawnMobLimit(9300769, 1, -887, -14, 100);
      cm.spawnMobLimit(9300769, 1, -687, -14, 100);
      cm.spawnMobLimit(9300769, 1, -487, -14, 100);
      cm.spawnMobLimit(9300769, 1, -287, -14, 100);
      cm.spawnMobLimit(9300769, 1, -387, -14, 100);
      cm.spawnMobLimit(9300769, 1, -587, -14, 100);
      cm.spawnMobLimit(9300769, 1, -787, -14, 100);
      cm.spawnMobLimit(9300769, 1, -987, -14, 100);
      cm.spawnMobLimit(9300769, 1, -1187, -14, 100);
      cm.spawnMobLimit(9300769, 1, -1387, -14, 100);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("呜嗡……", 33, 2450033, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('哭……声？', 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("……？这种地方怎么会有野兽呢……？这不是#r#o9300769##k嘛？什么呢，这是？", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("什么什么啊！当然是抓你们的陷阱啦！", 33, 2450034, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face1#？！你是，什么人啊！", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("哼！没有认出我是谁吗？嗯，没关系。我的真实身份等把你们绑好再说也不迟！", 33, 2450034, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face1#先把他撂倒吧！", 41, 2400006, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else if (status === V++) {
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;