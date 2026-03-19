var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
    cm.npc_ChangeController(9076130, 55, 32, 1);
    cm.npc_ChangeController(9390008, 724, 32, 1);
    cm.npc_ChangeController(9076100, 227, 32, 1);
    cm.npc_ChangeController(9020000, -242, -688, 1);
    cm.npc_ChangeController(2133000, 831, -488, 1);
    cm.npc_ChangeController(3003145, -200, 0, 1);
    cm.npc_ChangeController(3003166, -300, 0, 1);
    cm.npc_ChangeController(9010100, -590, 0, 0);
    cm.npc_ChangeController(3003323, -778, 0, 0);
    cm.dispose();
  }
}