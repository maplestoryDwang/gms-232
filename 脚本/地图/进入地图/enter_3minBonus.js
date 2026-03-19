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
      var O = cm.rand(9400053, 9400056);
      cm.npc_ChangeController(O, 6, 46);
      cm.fieldEffect_复合图片动画(["Map/EffectPL.img/3min/notice_spine/bg/skeleton_text_bg", "animation_text01_01", '', ''], [0, 0, 1, 0, 0, 0, 0, 0]);
      cm.fieldEffect_复合图片动画(["Map/EffectPL.img/3min/notice_spine/stage/skeleton_text_02", "animation_text02_09", '', ''], [0, 0, 1, 0, 0, 0, 0, 0]);
      cm.effect_Voice("PL_3min.img/effectSound/stageUI", 100);
      cm.setNumberForQuestInfo(59785, cm.getMapId(), 1);
      cm.setNumberForQuestInfo(59785, O, 1);
      checkShop();
      checkStage();
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function checkShop() {
  for (var f = 9400053; f <= 9400056; f++) {
    if (cm.getNumberFromQuestInfo(59785, f) == 0) {
      return;
    }
  }
  cm.setNumberForQuestInfo(59785, "shop", 1);
}
function checkStage() {
  for (var f = 867110050; f <= 867110700; f += 50) {
    if (cm.getNumberFromQuestInfo(59785, f) == 0) {
      return;
    }
  }
  cm.setNumberForQuestInfo(59785, 'stage', 1);
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;