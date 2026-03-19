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
    cm.npc_ChangeController(1540446, "oid=38033", 1524, 101, 7, 1474, 1574, 1, false, 0, false);
    cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350042720;act5=350053005");
    cm.setPartner(1, 1540705, 80001633, 0);
    cm.updateInfoQuest(33238, "start=0");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;