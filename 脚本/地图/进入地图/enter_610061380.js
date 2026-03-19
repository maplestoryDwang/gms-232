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
    cm.updateInfoQuest(61333, "act1=610061380");
    cm.npc_ChangeController(9201535, "oid=2846889", 5, 200, 13, -45, 55, 1, true, 0, false);
    cm.npc_SetSpecialAction("oid=2846889", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=2846889", "hurt", -1, 1);
    cm.forceStartQuest(61353, '');
    cm.forceCompleteQuest(61353);
    cm.dispose();
  }
}