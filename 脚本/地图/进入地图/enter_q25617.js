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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0");
        cm.spawnMobLimit(9300532, 1, 750, -32, 100);
        cm.spawnMobLimit(9300532, 1, 750, -32, 100);
        cm.spawnMobLimit(9300532, 1, 850, -32, 100);
        cm.spawnMobLimit(9300532, 1, 850, -32, 100);
        cm.spawnMobLimit(9300533, 1, 800, -32, 100);
        cm.spawnMobLimit(9300533, 1, 800, -32, 100);
        cm.spawnMobLimit(9300533, 1, 900, -32, 100);
        cm.spawnMobLimit(9300533, 1, 900, -32, 100);
        cm.inGameDirectionEvent_PushMoveInfo(0, 300, 500, -32);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2189);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(1800);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("这……是怎么回事？黑魔法师的手下怎么会出现在这里？难不成，拉尼娅出事啦……如果是那样，我绝不会原谅我自己。", 17, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("必须快去看看。快点。", 17, 0, true, true);
                } else if (status === V++) {
                  cm.forceCompleteQuest(25617);
                  cm.gainExp(47938);
                  cm.eventSKill(0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.dispose();
                  cm.warp(101000100, 0, false);
                }
              }
            }
          }
        }
      }
    }
  }
}