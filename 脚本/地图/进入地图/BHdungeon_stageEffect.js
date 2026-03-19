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
    cm.setPartner(1, 1540765, 80001594, 0);
    cm.setPartner(1, 1540766, 80001595, 0);
    cm.setPartner(1, 1540767, 80001596, 0);
    cm.useItem(2023418);
    cm.useItem(2023419);
    cm.useItem(2023420);
    cm.playerMessage(-1, "必须消灭野外的所有怪物, 才能移动到下一地区. ");
    if (cm.getMapId() == 350011100) {
      cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
      cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
    }
    if (cm.getMapId() == 350011200) {
      cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
      cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
    }
    if (cm.getMapId() == 350011300) {
      cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
      cm.fieldEffect_ScreenMsg("aswan/stageEff/number/3");
    }
    if (cm.getMapId() == 350011800) {
      cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
      cm.fieldEffect_ScreenMsg("aswan/stageEff/number/4");
    }
    if (cm.getMapId() == 350011900) {
      cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;