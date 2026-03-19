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
    cm.npc_ChangeController(3004335, "oid=2783822", 1324, -540, 2, 1274, 1374, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=2783822", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=2783822", "special2", cm.getQuestStatus(39718) > 0 ? 1 : -1, 1);
    cm.dispose();
  }
}