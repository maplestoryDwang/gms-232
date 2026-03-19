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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(100);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Ambience.img/blizzard_strong", 128);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(1, 4);
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_OneTimeAction(29, 10000);
          cm.emotion(2, 100000);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.forceStartQuest(31377, '');
            cm.updateInfoQuest(31389, "ex=4");
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/heartFast", 128);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.fieldEffect_ProcessOnOffLayer('3', "Map/Effect3.img/fantasticThemePark/count/three", 0, 1000, 0, 0, 15, 4, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 10, 0, 0, 0, 0, 0);
                cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect3.img/fantasticThemePark/count/two", 0, 1000, 0, 0, 16, 4, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 10, 0, 0, 0, 0, 0);
                  cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/fantasticThemePark/count/one", 0, 1000, 0, 0, 17, 4, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 10, 0, 0, 0, 0, 0);
                    cm.fieldEffect_InsertCanvas(1, 255, 255, 255, 255, 3000, 0);
                    cm.fieldEffect_ProcessOnOffLayer("gyro", "Map/Effect3.img/fantasticThemePark/gyroDrop", 0, 1000, 0, 0, 18, 4, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_Voice("SoundEff.img/girlScream", 128);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(222120100, 0);
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