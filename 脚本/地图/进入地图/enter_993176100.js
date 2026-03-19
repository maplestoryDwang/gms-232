var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.playerMessage(-1, "必须消灭区域内的所有怪物，才能移动至下一关。");
      switch (cm.getMapId()) {
        case 993176100:
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
          break;
        case 993176110:
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
          break;
        case 993176120:
          cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
          break;
      }
      cm.dispose();
    }
  }
}