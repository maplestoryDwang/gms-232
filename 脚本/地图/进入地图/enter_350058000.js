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
    cm.npc_ChangeController(1540446, 'oid=48238', -73, -24, 1, -79, -23, 1, false, 0, false);
    cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350044000;act5=350058000");
    cm.setPartner(1, 1540721, 80001635, 0);
    cm.setPartner(1, 1540722, 80001602, 0);
    cm.setPartner(1, 1540451, 80001601, 0);
    cm.updateInfoQuest(33247, '');
    cm.updateInfoQuest(33248, '');
    cm.updateInfoQuest(33249, '');
    cm.forceForfeitQuest(33248);
    cm.forceForfeitQuest(33249);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;