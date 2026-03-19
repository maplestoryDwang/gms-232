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
      cm.spawnMobLimit(9300794, 1, -491, -16, 100);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……这次也不是玩具城呢。但是…… 也不是时间碎片所创造的空间。", 41, 2400006, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("说是玩具城的时间塔下面聚集了破碎的时间碎片，对吧。这里不会就是那时间之塔下面吧？从四处的时间碎片来看。", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face7#……阿尔法。那边有敌人。", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("天哪…… 先干掉他们吧！", 41, 2400005, true, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;