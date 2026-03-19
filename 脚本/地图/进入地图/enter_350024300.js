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
      cm.updateInfoQuest(33128, "act1=350013000;act2=350024300");
      var O = cm.getNumberFromQuestInfo(33178, 'r');
      if (O == 0) {
        cm.effect_NormalSpeechBalloon("明明从这里进来了啊……", 1, 0, 1, 4000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
      } else {
        if (O == 1) {
          cm.effect_NormalSpeechBalloon("去其他房间看看吧!", 1, 0, 1, 4000, 0, 5559508);
        } else if (O == 2) {
          cm.effect_NormalSpeechBalloon('去其他房间看看吧!', 1, 0, 1, 4000, 0, 5559508);
        } else {
          cm.effect_NormalSpeechBalloon("所有房间都确认完毕!到外面去看看吧. ", 1, 0, 1, 4000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
        }
      }
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;