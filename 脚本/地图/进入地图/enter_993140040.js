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
    cm.npc_ChangeController(3004412, 'oid=368305', -220, 245, 15, -270, -170, 1, false, 0, false);
    cm.npc_ChangeController(3004413, 'oid=368306', -317, 245, 14, -367, -267, 0, false, 0, false);
    cm.npc_ChangeController(3004424, "oid=368307", 475, 180, 0, 425, 525, 1, false, 0, false);
    cm.npc_ChangeController(3004424, 'oid=368308', 540, 200, 0, 490, 590, 1, false, 0, false);
    cm.npc_ChangeController(3004423, 'oid=368309', -430, 180, 0, -480, -380, 0, false, 0, false);
    cm.npc_ChangeController(3004423, "oid=368310", -495, 195, 0, -545, -445, 0, false, 0, false);
    cm.dispose();
  }
}