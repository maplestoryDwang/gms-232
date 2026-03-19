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
    cm.npc_ChangeController(1540446, "oid=42409", -65, -24, 1, -79, -15, 1, false, 0, false);
    cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350042720;act5=350055000");
    cm.setPartner(1, 1540741, 80001601, 0);
    cm.setPartner(1, 1540736, 80001602, 0);
    cm.setPartner(1, 1540737, 80001635, 0);
    cm.setPartner(1, 1540738, 80001615, 0);
    cm.setPartner(1, 1540739, 80001616, 0);
    cm.setNumberForQuestInfo(33242, "savePt", 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;