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
    cm.setInGameDirectionMode(false, true, false);
    cm.npc_ChangeController(1540446, "oid=35864", -2087, -434, 8, -2137, -2037, 1, false, 0, false);
    cm.npc_ChangeController(1540458, "oid=35865", -1637, -237, 26, -1687, -1637, 0, false, 0, false);
    cm.npc_ChangeController(1540461, "oid=35866", -1960, -237, 21, -2010, -1960, 0, false, 0, false);
    cm.npc_ChangeController(1540461, "oid=35867", -2100, -237, 22, -2135, -2050, 0, false, 0, false);
    cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;