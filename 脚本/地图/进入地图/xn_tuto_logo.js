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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.teachSkill(30021238, 1, 1);
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.effect_Direction("Effect/Direction12.img/XenonTutorial/SceneLogo", 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(6300);
      } else if (status === V++) {
        cm.dispose();
        cm.warp(931050900, 0, false);
      }
    }
  }
}