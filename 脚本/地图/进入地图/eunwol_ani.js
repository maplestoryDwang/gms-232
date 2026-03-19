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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.playVideoByScript('eunwol.avi');
      } else if (status === V++) {
        cm.playerMessage(-1, "视频播放失败。");
        cm.updateInfoQuest(38069, '');
        cm.forceStartQuest(38069, '');
        cm.forceCompleteQuest(38069);
        cm.gainExp(100000);
        cm.inGameDirectionEvent_SetHideEffect(0);
        cm.eventSKill(0);
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
        cm.warp(270000000, 1, false);
      }
    }
  }
}