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
    if (!cm.isQuestFinished(40001)) {
      cm.npc_ChangeController(2410003, "oid=1355185", -200, -20, 7, -250, -150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1355185", "summon", 0, 0);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;