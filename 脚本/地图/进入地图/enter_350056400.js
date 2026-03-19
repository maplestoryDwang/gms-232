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
    cm.npc_ChangeController(1540671, 'oid=47993', -4511, 777, 4, -4561, -4461, 0, false, 0, false);
    cm.npc_ChangeController(1540671, "oid=47994", -4401, 777, 2, -4451, -4351, 0, false, 0, false);
    cm.npc_ChangeController(1540671, 'oid=47995', -4621, 777, 13, -4671, -4571, 0, false, 0, false);
    cm.npc_ChangeController(1540671, "oid=47996", -4291, 777, 26, -4341, -4241, 0, false, 0, false);
    cm.npc_ChangeController(1540753, "oid=47997", -4161, 777, 14, -4211, -4111, 1, false, 0, false);
    cm.setPartner(1, 1540741, 80001601, 0);
    cm.setPartner(1, 1540736, 80001602, 0);
    cm.setPartner(1, 1540737, 80001635, 0);
    cm.setInGameDirectionMode(false, true, false);
    cm.updateInfoQuest(33213, "area=D3_Z57;x=4;y=2");
    cm.openUI(254);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;