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
    cm.updateInfoQuest(15142, "Stage=1");
    cm.fieldEffect_ScreenMsg("PoloFritto/msg5");
    cm.fieldEffect_Effect14("PoloFritto/msg2", 7, 1);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;