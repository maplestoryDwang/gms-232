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
      if (cm.getMapId() == 940200220) {
        cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
        cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
        cm.dispose();
      } else {
        if (cm.getMapId() == 940200230) {
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
          cm.dispose();
        } else if (cm.getMapId() == 940200230) {
          cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
          cm.dispose();
        } else {
          cm.dispose();
        }
      }
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;