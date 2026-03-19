var status = -1;
var selectionLog = [];
function action(f, E, e) {
  var V = "action" + cm.getMapId();
  eval(V)(f, E, e);
}
function action303050000(f, E, e) {
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
    cm.playerMessage(-1, "必须消灭区域内的所有敌军，才能移动到下一地区。");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
    cm.dispose();
  }
}
function action303050100(f, E, e) {
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
    cm.playerMessage(-1, "必须消灭区域内的所有敌军，才能移动到下一地区。");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
    cm.dispose();
  }
}
function action303050200(f, E, e) {
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
    cm.playerMessage(-1, "必须消灭区域内的所有敌军，才能移动到下一地区。");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;