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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_ScreenMsg("Map/Effect2.img/blackHeaven/gal");
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/gal_bomb", 100);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
        cm.effect_Voice("Voice3.img/BlackHeaven/gel/0/3", 100);
      } else {
        if (status === V++) {
          cm.userSetFieldFloating(350062600, 5, 5, 20);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.userSetFieldFloating(350062600, 0, 0, 20);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                cm.forceCompleteQuest(33280);
                cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(350063000, 0, true);
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