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
    cm.npc_ChangeController(1540446, "oid=56658", 738, 61, 1, 688, 788, 1, false, 0, false);
    cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350044000;act5=350058700;act6=350062000");
    cm.updateInfoQuest(33267, 'dir=0');
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;