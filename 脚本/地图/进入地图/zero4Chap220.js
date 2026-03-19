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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.fieldEffect_PlayFieldSound("cannonshooter/Attack3", 100);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
      cm.effect_Direction("Effect/Direction13.img/zeroPrologue/Emotion11", 0, 0, 0);
      cm.effect_Direction("Effect/Direction13.img/zeroQuest/bomb", 0, 0, 0);
    } else {
      if (status === V++) {
        cm.updateInfoQuest(40405, '');
        cm.forceStartQuest(40405, '');
        cm.forceCompleteQuest(40405);
        cm.forceCompleteQuest(40942);
        cm.inGameDirectionEvent_AskAnswerTime(2100);
      } else if (status === V++) {
        cm.gainExp(18918000);
        cm.dispose();
        cm.warp(325000000, 3, false);
        cm.setInGameDirectionMode(false, true, false);
        cm.forceStartQuest(41218, '0');
        cm.forceStartQuest(41219, '0');
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;