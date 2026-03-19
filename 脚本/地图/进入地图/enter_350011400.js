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
    cm.hideNpc(1540501);
    cm.npc_ChangeController(1540501, "oid=32861", 1963, -20, 17, 1960, 1963, 1, false, 0, true);
    cm.npc_ChangeController(1540505, "oid=32862", 2045, 18, 14, 1995, 2095, 1, false, 0, false);
    cm.npc_ChangeController(1540446, 'oid=32863', 934, 18, 3, 884, 984, 1, false, 0, false);
    cm.updateInfoQuest(33128, "act1=350011400");
    cm.setPartner(1, 1540765, 80001594, 0);
    cm.setPartner(1, 1540766, 80001595, 0);
    cm.setPartner(1, 1540767, 80001596, 0);
    cm.useItem(2023418);
    cm.useItem(2023419);
    cm.useItem(2023420);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;