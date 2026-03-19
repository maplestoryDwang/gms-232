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
      cm.gainSkillBuff(80001592);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
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
          cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 2);
          cm.forceCompleteQuest(33196);
          cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
        } else {
          if (status === V++) {
            cm.setAmbience("Ambience.img/gravity", 150, 60);
            cm.inGameDirectionEvent_同时移动镜头和人(2, 700);
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1501);
              cm.effect_NormalSpeechBalloon("这个区域的结界维持器\r\n已经全部失效. ", 1, 0, 0, 4500, 1, 0, -120, 0, 4, 0, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(4500);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(350042603, 0, true);
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