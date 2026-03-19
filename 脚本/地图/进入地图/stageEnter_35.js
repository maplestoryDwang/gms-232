var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(32031)) {
    cm.dispose();
    return;
  }
  var w = -1;
  if (status <= w++) {
    cm.dispose();
  } else {
    if (status === w++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.forceStartQuest(32031);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === w++) {
        cm.sendNextNoESC("视贺你！你是第一次来到第35层吧？我们离目标越来越近了！", 2540000);
      } else {
        if (status === w++) {
          cm.sendNextNoESC("我要送你一份礼物！", 2540000);
        } else {
          if (status === w++) {
            cm.sendNextNoESC("希望你能继续发挥出色，我们的目标就快要到了。", 2540000);
          } else if (status === w++) {
            cm.forceCompleteQuest(32031);
            cm.gainItem(1142692, 1);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(false, true);
            cm.setStandAloneMode(false);
            cm.dispose();
          } else {
            cm.dispose();
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