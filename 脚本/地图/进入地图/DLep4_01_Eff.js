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
      cm.dispose();
      cm.playerMessage(-1, "必须消灭区域内的所有怪物，才能移动到下一区域。");
      if (cm.getMapId() == 306010400) {
        cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
        cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
        cm.effect_NormalSpeechBalloon("#fn黑体##fs18#这些怪物到底是从哪儿来的？", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
      } else {
        if (cm.getMapId() == 306010500) {
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
          cm.effect_NormalSpeechBalloon("#fn黑体##fs18#看到了倒地的士兵。", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
        } else {
          if (cm.getMapId() == 306010600) {
            cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
            cm.fieldEffect_ScreenMsg("aswan/stageEff/number/3");
            cm.effect_NormalSpeechBalloon("#fn黑体##fs18#没有其他生存者吗？", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
          } else if (cm.getMapId() == 306010700) {
            cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
            cm.effect_NormalSpeechBalloon("#fn黑体##fs18#这个国家要完了啊……", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
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