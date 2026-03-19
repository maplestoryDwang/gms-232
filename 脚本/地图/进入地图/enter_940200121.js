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
      cm.npc_ChangeController(2144014, "oid=200918", -882, 2, 14, -932, -832, 1, false, false);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_Monologue("我要利用操纵梦的能力，把所有人记忆中的我深藏起来。", 0);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("并且投身于自己创造的梦境世界。", 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("…不去管时间的流逝。", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("在这期间，残酷的战争最终以英雄们的胜利终结，但是", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("…他们受到了黑魔法师的诅咒。", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("与英雄、双弩精灵同命相连的精灵们也一起受到了诅咒…", 1);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(250);
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(940200122, 0);
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