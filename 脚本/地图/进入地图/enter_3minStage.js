var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  var V = cm.getNumberFromQuestInfo(59792, "score");
  var O = cm.getMapId();
  cm.getWeatherEffectNotice("目前分数: " + V + '分', 217, 5000, 1);
  cm.effect_Voice("PL_3min.img/effectSound/stageUI", 100);
  cm.setNumberForQuestInfo(59785, O, 1);
  if (cm.isLeader()) {
    em.setProperty('type', cm.rand(1, 3));
    em.setProperty('mob', cm.rand(1, 8));
    em.schedule('刷怪', 7000);
  }
  var b = Math.floor((O - 867110050) / 50);
  cm.fieldEffect_复合图片动画(["Map/EffectPL.img/3min/notice_spine/bg/skeleton_text_bg", "animation_text01_01", '', ''], [0, 0, 1, 0, 0, 0, 0, 0]);
  cm.fieldEffect_复合图片动画(["Map/EffectPL.img/3min/notice_spine/goal/skeleton_text_01", "animation_text01_0" + em.getNumberProperty("type"), ''], [0, 1, 0, 0, 0]);
  cm.fieldEffect_复合图片动画(["Map/EffectPL.img/3min/notice_spine/stage/skeleton_text_02", "animation_text02_0" + b, ''], [0, 1, 0, 0, 0]);
  cm.fieldEffect_复合图片动画(["Map/EffectPL.img/3min/notice_spine/mob/skeleton_text_03", "animation_text03_0" + em.getNumberProperty('mob'), ''], [0, 1, 0, 0, 0]);
  cm.fieldEffect_复合图片动画(["Map/EffectPL.img/3min/start/skeleton_start", "animation_text01_01", '', ''], [0, 0, 1, 0, 0, 0, 0, 0]);
  checkStage();
  cm.dispose();
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