var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.spawnMobLimit(9309047, 1, -748, 220, 3);
      cm.spawnMobLimit(9309049, 1, -1291, 220, 1);
      cm.spawnMobLimit(9309048, 1, -1291, 220, 3);
      cm.spawnMobLimit(9309046, 1, -841, 220, 1);
      cm.spawnMobLimit(9309048, 1, -1291, 220, 3);
      cm.spawnMobLimit(9309047, 1, -569, 220, 3);
      cm.spawnMobLimit(9309048, 1, -1291, 220, 3);
      cm.spawnMobLimit(9309047, 1, 175, 220, 3);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 900, 834, 270);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 800, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("黑魔法师出现之前, 冒险岛世界曾是那么的平静祥和......", 0);
            cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene1/0", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("可是, 你们也知道, 自从黑魔法师出现之后, 怪物们就开始变得残暴, 冒险岛世界和生活在那片土地上的生灵就变得如同风前残烛一般。", 1);
              cm.effect_Voice("Voice.img/aquaris/Alicia_Soul/Scene1/1", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else if (status === V++) {
                cm.warp(992000030, 0);
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