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
    cm.npc_ChangeController(1540795, 'oid=59173', -656, 123, 5, -680, -606, 1, false, 0, false);
    cm.updateInfoQuest(33915, "act1=350112400;act2=350123600;act3=350131700");
    cm.showMapleHero();
    cm.Hidden_background('stone', 1, 0, 0, 0);
    cm.onSetMapTagedObjectVisible(1, 'blow', 512);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;