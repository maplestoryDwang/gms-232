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
      cm.inGameDirectionEvent_PushMoveInfo(0, 400, 457, -4567);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("Ambience.img/secretmissionbase", 100, 60);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
        cm.effect_Voice("SoundEff.img/blackHeaven/secretmission1", 100);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else if (status === V++) {
          cm.dispose();
          cm.warp(350011020, 0, true);
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