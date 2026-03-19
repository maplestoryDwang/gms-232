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
      cm.playerMessage(-1, "必须消灭区域内的所有怪物，才能移动到下一区域。");
      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
      cm.fieldEffect_InsertCanvas11(4, 0, 0, 0, 0, 0);
      cm.fieldEffect_InsertCanvas11(5, 0, 0, 0, 0, 0);
      cm.fieldEffect_InsertCanvas11(6, 0, 0, 0, 0, 0);
      if (cm.getMapId() == 304060100) {
        cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
        cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
      } else {
        if (cm.getMapId() == 304060200) {
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
        } else if (cm.getMapId() == 304060300) {
          cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
        }
      }
      cm.dispose();
    }
  }
}