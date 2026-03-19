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
    cm.setNumberForQuestInfo(59785, cm.getMapId(), 1);
    cm.fieldEffect_复合图片动画(["Map/EffectPL.img/3min/notice_spine/bossWarn/skeleton_warning_boss", "animation", '', ''], [0, 1, 1, 5000, 0, 0, 0, 0]);
    cm.effect_Voice("PL_3min.img/effectSound/BossWarn", 100);
    cm.addNumberForQuestInfo(59791, 'bCount', 1);
    cm.scheduleWarpTask(4, 867110600 + cm.rand(0, 2) * 50, 0);
    cm.dispose();
    checkStage();
  } else {
    cm.dispose();
  }
}
function checkStage() {
  for (var f = 867110050; f <= 867110700; f += 50) {
    if (cm.getNumberFromQuestInfo(59785, f) == 0) {
      return;
    }
  }
  cm.setNumberForQuestInfo(59785, "stage", 1);
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;