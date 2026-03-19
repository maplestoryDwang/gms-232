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
    cm.showMapleHero();
    cm.npc_ChangeController(1540795, "oid=57713", 135, 351, 4, 88, 185, 0, false, 0, false);
    cm.updateInfoQuest(33915, "act1=350112100");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;