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
      cm.effect_Lightness(false);
      cm.effect_Lightness(true);
      cm.inGameDirectionEvent_Monologue("飞花院深处", 0);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("某个下雨天", 1);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
            cm.setInGameDirectionMode(false, true, false);
            cm.getTopMsgFont("点击头上有电灯泡图标的NPC就可以开始任务。", 3, 20, 20, 0, 0);
            cm.effect_Lightness(false);
            cm.dispose();
          }
        }
      }
    }
  }
}