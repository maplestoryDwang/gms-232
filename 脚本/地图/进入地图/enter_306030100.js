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
  } else if (status === V++) {
    if (cm.getNumberFromQuestInfo(32689, "enter") > 0) {
      cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal", '', ''], [1, 1, 0, 0, 0, 0, 0, 0]);
      cm.setAmbience("SoundEff.img/DLep4/war2", 80, 60);
    }
    cm.sendNormalTalk_Bottom("还好城墙足够结实，只要拦住爬上来的家伙就行。", 57, 0, false, false);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;