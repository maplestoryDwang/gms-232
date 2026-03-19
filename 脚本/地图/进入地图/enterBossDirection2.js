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
      cm.setInGameDirectionMode(true, false, false);
      cm.fieldEffect_Tremble(0, 800, 30);
      cm.fieldEffect_PlayFieldSound("GiantVellud/Boom", 100);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.贝勒德_小地图([], []);
        cm.fieldEffect_Tremble(0, 800, 30);
        cm.fieldEffect_PlayFieldSound("GiantVellud/Boom", 100);
        cm.inGameDirectionEvent_AskAnswerTime(800);
      } else {
        if (status === V++) {
          cm.fieldEffect_Tremble(0, 1200, 30);
          cm.fieldEffect_PlayFieldSound("GiantVellud/Boom", 100);
          cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
          cm.warp(863010100, 0, false);
        }
      }
    }
  }
}