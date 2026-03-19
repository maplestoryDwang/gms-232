var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      var O = cm.getMapId() % 10000 / 100;
      cm.fieldEffect_PlayFieldSound("Sound/Field.img/Dojang/start");
      cm.fieldEffect_ScreenMsg("Map/Effect.img/dojang/start/stage");
      cm.fieldEffect_ScreenMsg("Map/Effect.img/dojang/start/number/" + O);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;