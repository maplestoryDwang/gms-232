var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.isQuestFinished(24002) && !cm.isQuestActive(24093)) {
    if (f == 1) {
      status++;
    } else {
      cm.dispose();
      return;
    }
    if (status == 0) {
      cm.forceStartQuest(24093, '1');
      cm.setInGameDirectionMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status == 1) {
        cm.sendDirectionInfo("Effect/Direction5.img/effect/mercedesQuest/merBalloon/0");
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else if (status == 2) {
        cm.sendDirectionInfo("Effect/Direction5.img/effect/mercedesQuest/merBalloon/1");
        cm.sendNextSNoESC("等下... 好像有些奇怪.. .. 我的等级是10级?!");
      } else {
        cm.setInGameDirectionMode(false);
        cm.setStandAloneMode(false);
        cm.dispose();
      }
    }
  } else {
    cm.dispose();
  }
}