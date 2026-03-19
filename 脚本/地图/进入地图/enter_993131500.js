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
    cm.npc_ChangeController(3004335, "oid=2752523", 53, 274, 15, 3, 103, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=2752523", "summon", 0, 0);
    cm.npc_ChangeController(3004304, "oid=2752524", -132, 228, 7, -182, -82, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=2752524", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=2752523", "special2", cm.getQuestStatus(39716) > 0 ? 1 : -1, 1);
    cm.npc_ChangeController(3004329, "oid=2752525", -35, 228, 8, -85, 15, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=2752525", "summon", 0, 0);
    cm.dispose();
  }
}