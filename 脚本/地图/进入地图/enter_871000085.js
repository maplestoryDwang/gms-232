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
    if (cm.isQuestFinished(65437) && cm.getQuestStatus(65438) == 0) {
      cm.npc_ChangeController(9401158, "oid=91700369", -200, 240, 1, -250, -150, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=91700369", "summon", 0, 0);
    }
    cm.dispose();
  }
}