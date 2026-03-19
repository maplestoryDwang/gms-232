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
    cm.npc_ChangeController(3004430, "oid=780129", 150, 184, 2, 100, 200, 1, true, 0, false);
    cm.npc_SetSpecialAction('oid=780129', "summon", 0, 0);
    cm.npc_SetSpecialAction('oid=780129', "special4", -1, 1);
    cm.setNumberForQuestInfo(16700, "count", 0);
    cm.dispose();
  }
}