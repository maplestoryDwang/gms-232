var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
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
  } else {
    if (status === V++) {
      if (cm.getzhizunvip() == 2) {} else {
        cm.npc_ChangeController(9000330, 500, -300, 1);
        cm.npc_ChangeController(1500032, 950, -300, 1);
        cm.npc_ChangeController(9000100, 1200, -300, 1);
        cm.npc_ChangeController(1540945, 500, 0, 1);
        cm.npc_ChangeController(1052014, 600, 0, 1);
        cm.npc_ChangeController(9400373, 800, 0, 1);
        cm.npc_ChangeController(9900002, 1100, 0, 1);
        cm.npc_ChangeController(9001014, 1200, 0, 1);
        cm.npc_ChangeController(9900000, 1400, 0, 1);
        cm.npc_ChangeController(1002009, 1500, 0, 1);
      }
      cm.dispose();
    }
  }
}