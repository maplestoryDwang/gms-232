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
    cm.npc_ChangeController(1540718, 'oid=37660', 1427, 199, 9, 1399, 1477, 1, false, 0, false);
    cm.updateInfoQuest(33213, "area=D1_Z33;x=2;y=1");
    cm.updateInfoQuest(33214, "ul=b87100");
    cm.openUI(254);
    cm.setPartner(1, 1540732, 80001601, 0);
    cm.setPartner(1, 1540736, 80001602, 0);
    cm.setPartner(1, 1540737, 80001635, 0);
    cm.setPartner(1, 1540738, 80001615, 0);
    cm.setPartner(1, 1540739, 80001616, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;