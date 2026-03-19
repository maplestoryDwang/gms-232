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
    cm.npc_ChangeController(3001010, "oid=1082998", -426, 170, 1, -476, -376, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=1082998", "summon", 0, 0);
    cm.setSessionValue("kaiser401", '1082998');
    cm.dispose();
  }
}