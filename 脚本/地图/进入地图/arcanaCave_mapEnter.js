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
      if (cm.getMapId() == 940200300) {
        cm.setPartner(1, 3003306, 80002267, 0);
        cm.setPartner(1, 3003366, 80002269, 0);
        cm.playerMessage(-1, "只有消灭野外的所有怪物，才能前往下一地区。");
        cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
        cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
      } else {
        if (cm.getMapId() == 940200310) {
          cm.setPartner(1, 3003306, 80002267, 0);
          cm.setPartner(1, 3003366, 80002269, 0);
          cm.playerMessage(-1, "只有消灭野外的所有怪物，才能前往下一地区。");
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
        } else if (cm.getMapId() == 940200320) {
          cm.setPartner(1, 3003366, 80002269, 0);
          cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
          cm.forceStartQuest(34476, '');
          cm.forceCompleteQuest(34476);
        }
      }
      cm.dispose();
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