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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("等等，这是个不错的结局吗？总感觉什么地方有点奇怪？", 37, 1530110, false, true);
          cm.effect_Voice("Voice2.img/Friends/CH2_09/22", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#随他去吧，他自己不是乐意嘛。", 37, 1530120, true, true);
            cm.effect_Voice("Voice2.img/Friends/CH2_09/23", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#真是个悲伤的结局……", 37, 1530060, true, true);
              cm.effect_Voice("Voice2.img/Friends/CH2_09/24", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("单相思本来就是悲伤的。", 37, 1530100, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH2_09/25", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("哈哈哈……#fs20#哇哈哈哈……#fs30#哇哈哈哈哈！！", 37, 1530140, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH2_09/26", 100);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.forceStartQuest(32790, '');
                    cm.forceCompleteQuest(32790);
                    cm.dispose();
                    cm.warp(100000004, 0);
                    cm.inGameDirectionEvent_SetHideEffect(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;