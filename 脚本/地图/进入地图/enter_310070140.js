var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(U, J, m) {
  if (status == 0 && U == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = m;
  var u = -1;
  if (status <= u++) {
    cm.dispose();
  } else if (status === u++) {
    if (cm.isQuestActive(39116)) {
      cm.npc_ChangeController(2155116, "tower1", 1657, -122, true, false, true);
      if (cm.getNumberFromQuestInfo(39116, "success") > 0) {
        cm.npc_SetSpecialAction('oid=tower1', "repaired", -1, 1);
      }
    }
    cm.dispose();
  }
}