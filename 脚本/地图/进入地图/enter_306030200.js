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
      if (cm.getNumberFromQuestInfo(32689, "enter") > 0) {
        cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal", '', ''], [1, 1, 0, 0, 0, 0, 0, 0]);
        cm.setAmbience("SoundEff.img/DLep4/war2", 80, 60);
      }
      cm.sendNormalTalk_Bottom("我有点担心东边的城墙……\r\n万一墙上出现裂缝，可就给敌人提供了一架现成的梯子了。", 57, 0, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk_Bottom('希望他们别发现吧。', 57, 0, true, false);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;