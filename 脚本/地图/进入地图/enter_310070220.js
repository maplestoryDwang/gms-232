var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(Y, P, F) {
  if (status == 0 && Y == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = F;
  var K = -1;
  if (status <= K++) {
    cm.dispose();
  } else if (status === K++) {
    if (cm.isQuestActive(39125)) {
      cm.npc_ChangeController(2155117, 'tower2', 1405, -459, true, false, true);
      if (cm.getNumberFromQuestInfo(39125, "success") > 0) {
        cm.npc_SetSpecialAction("oid=tower2", "repaired", -1, 1);
      }
    }
    cm.dispose();
  }
}