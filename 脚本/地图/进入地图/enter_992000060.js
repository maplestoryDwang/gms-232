var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.spawnMobLimit(9309103, 1, 308, -630, 2);
      cm.spawnMobLimit(9309102, 1, -427, -630, 1);
      cm.spawnMobLimit(9309103, 1, -695, -630, 2);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 900, -132, 536);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 800, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("而且, 和我当初的预想不同的是, 冒险岛世界并没有灭亡, 同时那些被自然力量所淘汰的生命也继续存活在了这座塔之内。", 0);
            cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene6/0", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("很悲哀的是, 现在, 它们必须把栖息之所让给其他的生命, 然后自己消失掉。", 0);
              cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene6/1", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("现在, 就算把它们重新送回到世上, 冒险岛世界上它们曾经生活的家园也已经不复存在了。", 1);
                cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene6/2", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(992000070, 0);
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