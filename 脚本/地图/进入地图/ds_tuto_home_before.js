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
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(90);
      } else {
        if (status === V++) {
          cm.fieldEffect_ScreenMsg("demonSlayer/text11");
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else if (status === V++) {
          cm.effect_Direction("Effect/Direction6.img/DemonTutorial/Scene2", 0, 0, 0);
          cm.dispose();
          cm.warp(924020000, 0, false);
        }
      }
    }
  }
}