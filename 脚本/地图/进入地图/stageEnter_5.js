var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(32025)) {
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
      cm.forceStartQuest(32025);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === w++) {
        cm.sendNormalTalk("视贺你！你是第一次来到第5层吧？你如此敢于探险, 甚至让我有些感动！", 1, 2540000, true, true);
      } else {
        if (status === w++) {
          cm.sendNormalTalk("我要送你一枚勋章作为纪念！不要推辞收下吧！", 1, 2540000, true, true);
        } else {
          if (status === w++) {
            cm.sendNormalTalk("希望你凭借这股气势走到终点。", 1, 2540000, true, true);
          } else if (status === w++) {
            cm.forceCompleteQuest(32025);
            cm.gainItem(1142686, 1);
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